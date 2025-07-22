import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_key: "bbc7414c-2194-4b75-ab06-f3d5010c7eef", // ✅ Your real key
          from_name: "Portfolio Contact Form",                 // ✅ Optional but nice
          subject: formData.subject || "New Message from Portfolio",
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(result.message || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      toast.error('Network error. Please try again later.');
      console.error("Web3Forms error:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };


  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yogeshdumane987@gmail.com',
      href: 'mailto:yogeshdumane987@gmail.com'
    },
    {
      icon: Github,
      label: 'Github',
      value: 'github.com/YogeshDumane',
      href: 'https://github.com/yogesh-123231'
    },
    {
      icon: Linkedin,
      label: 'Linkdin',
      value: 'linkedin.com/in/yogeshdumane',
      href: 'https://www.linkedin.com/in/yogeshdumane/'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/yogesh-123231'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yogeshdumane/'
    },
    {
      icon: Twitter,
      label: 'x.com/yogesh_dumane',
      href: 'https://x.com/yogesh_dumane'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Let's Talk</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new opportunities, creative projects, 
                  or just having a friendly chat about technology and development. 
                  I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card 
                    key={item.label}
                    className="bg-card border-border hover:shadow-card transition-all duration-300 cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => window.open(item.href, '_blank')}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-medium text-card-foreground">{item.label}</div>
                          <div className="text-muted-foreground">{item.value}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="sm"
                      className="border-border hover:bg-secondary hover:shadow-primary transition-all duration-300"
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      <social.icon className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </div>

              <Card className="bg-card border-border shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                    <div>
                      <div className="font-medium text-card-foreground">Available for Work</div>
                      <div className="text-sm text-muted-foreground">Open to new opportunities</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-card border-border shadow-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Send Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-input border-border focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your email"
                        className="bg-input border-border focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="bg-input border-border focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      className="bg-input border-border focus:ring-primary resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium shadow-primary"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <Card className="bg-gradient-primary text-primary-foreground max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="mb-6 opacity-90">
                Let's turn your ideas into reality. I'm here to help you build something amazing.
              </p>
              <Button 
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => {
                  const contactForm = document.querySelector('#contact form')
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
