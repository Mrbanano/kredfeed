import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import './Calendar.css'

function Calendar() {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <section className="Calendar">
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </section>
  )
}

export default Calendar
