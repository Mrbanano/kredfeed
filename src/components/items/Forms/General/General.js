import './General.css'
import { countries } from '../../../../Data/countries'
import Input from '../../Input'
import Select from '../../Select'
import Calendar from '../../Calendar'
function General() {
  return (
    <div className="General">
      <h2>General</h2>
      <Input name={'Razón Social'} />
      <Input name={'Nombre Comercial'} />
      <div className="General-section-3">
        <Select countries={countries} />
        <Calendar />
        <Calendar />
      </div>
      <div className="General-section-2">
        <Input name={'RFC'} />
        <Select countries={countries} />
      </div>
        <Input name={'Industria'} />
    </div>
  )
}

export default General
