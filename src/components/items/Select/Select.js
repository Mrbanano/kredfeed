import './Select.css'

function Select({ countries }) {
  return (
    <section className="Select">
      <select name="countries">
        {countries.map((country) => (
          <option
            key={`contry-${country.id}-${country.name}`}
            value={country.name}
          >
            {country.name}
          </option>
        ))}
      </select>
    </section>
  )
}

export default Select
