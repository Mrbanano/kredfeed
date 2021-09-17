import './Logout.css'

function Logout({ name, url, icon }) {
  return (
    <section>
      <div className="Logout">
        <div className="Logout-container">
          <div className="Logout-content">
            <a href={url} className="Logout-link">
            <img src={icon} alt={name} />
            </a>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default Logout
