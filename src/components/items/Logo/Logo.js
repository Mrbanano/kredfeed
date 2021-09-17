import './Logo.css'

function Logo({Logo,Name}) {
  return <section className="Logo"><div className="Logo-container">
    <div className="Logo-content"><img src={Logo} alt={Name} /></div>
  </div></section>
}

export default Logo
