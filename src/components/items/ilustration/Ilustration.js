import './Ilustration.css'

function Ilustration({ ilustration, name }) {
  return <section className="Ilustration">
  <div className="Ilustration-container">
    <div className="Ilustration-content">
       <img src={ilustration} alt={name} />
    </div>
  </div></section>
}

export default Ilustration
