import './GhostDivider.css'

export default function GhostDivider() {
  return (
    <div className="ghost" aria-hidden="true">
      <span className="ghost__text">something</span>
    </div>
  )
}
