import './IconStep.css'
import { statusStep } from '../../../../Data/dataPages'
function IconStep({ status }) {
  const { icon, name } = statusStep[status]

  return (
    <section className="IconStep">
      <div className="IconStep-container">
        <div className="IconStep-content">
          <img src={icon} alt={name} />
        </div>
      </div>
    </section>
  )
}

export default IconStep
