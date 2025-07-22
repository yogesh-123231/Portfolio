import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { FloatingCube } from './FloatingCube'
import { FloatingSphere } from './FloatingSphere'

export function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[4, 2, 6]} fov={50} />
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#4F46E5" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
        
        {/* 3D Objects */}
        <FloatingCube />
        <FloatingSphere position={[2, 0, -1]} />
        <FloatingSphere position={[-2, 1, 1]} />
        
        {/* Controls */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}