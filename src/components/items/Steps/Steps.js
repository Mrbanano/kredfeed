import './Step.css'
import IconStep from './IconStep'
import LabelStep from './LabelStep'

function Steps({ label, status }) {
  return (
    <section className="Step">
      <div className="Step-container">
        <div className="Step-content">
          <IconStep  status={status} />
          <LabelStep label ={label}  />
        </div>
      </div>
    </section>
  )
}

export default Steps
