import './input.css'

function Input() {
  return (
    <div className="form">
      <div className="form-container">
        <div className="form-content">
          <input
            className="form-input"
            type="text"
            name=""
            id=""
            placeholder=" "
          />
          <label className="form-label" htmlFor="">
            email
          </label>
        </div>
      </div>
    </div>
  )
}

export default Input
