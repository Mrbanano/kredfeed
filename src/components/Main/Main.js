import CardForm from './CardForm'
import CardProgressBar from './CardProgressBar'
import './Main.css'

function Main() {
  return (
    <section className="Main">
    <div className="Main-Container">
      <div className="Main-content">
      <CardProgressBar />
      <CardForm />
      </div>
    </div>
    </section>
  )
}

export default Main
