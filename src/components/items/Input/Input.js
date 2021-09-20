import './input.css'

function Input({ name }) {
  return (
    <div className="form">
      <div className="form-container">
        <div className="form-content">
          <input
            className="form-input"
            type="text"
            name=""
            id={name}
            placeholder=" "
          />
          <label className="form-label" htmlFor={name}>
            {name}
          </label>
        </div>
      </div>
    </div>
  )
}

export default Input
