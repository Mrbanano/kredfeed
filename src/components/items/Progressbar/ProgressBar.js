import './ProgressBar.css'
function ProgressBar({ Steps }) {
  return <section className="ProgressBar">
  <div className="ProgressBar-container">
    <div className="ProgressBar-content">
        {Steps.map((item) => (
            <p
              className="NavBar-item"
              key={item.name + item.hrfe}
              hrfe={item.hrfe}
              icon={item.icon}
              enable={item.status}
            >{item.name}</p>
          ))}
    </div>
  </div>
  </section>
}

export default ProgressBar
