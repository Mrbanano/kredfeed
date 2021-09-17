import './Avatar.css'

function Avatar({name , icon }) {
  return <section>
  <div className="Avatar">
    <div className="Avatar-container">
      <div className="Avatar-content">
        <img src={icon} alt={name} />
      </div>
    </div>
  </div>
  </section>
}

export default Avatar
