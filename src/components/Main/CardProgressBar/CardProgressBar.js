import { Companyinfo, Steps } from '../../../Data/dataPages'
import Ilustration from '../../items/ilustration/Ilustration'
import Progressbar from '../../items/Progressbar'
import Logo from '../../items/Logo/Logo'
import './CardProgressBar.css'

function CardProgressBar() {
  const { icon, ilustration, name } = Companyinfo

  return (
    <section className="CardProgressBar">
      <div className="CardPrgressBar-container">
        <div className="Card-ProgressBar-content">
          <Logo Logo={icon} />
          <Progressbar Steps={Steps} />
        </div>
        <Ilustration ilustration={ilustration} name={name} />
      </div>
    </section>
  )
}

export default CardProgressBar
