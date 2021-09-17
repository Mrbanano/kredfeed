import './ProgressBar.css'
import Step from '../Steps'

function ProgressBar({ Steps }) {
  return (
    <section className="ProgressBar">
      <div className="ProgressBar-container">
        <div className="ProgressBar-content">
          {Steps.map((item) => (
            <Step
              className="Steps-item"
              key={`Step-item- ${item.label}`}
              label={item.label}
              status="fail"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgressBar
