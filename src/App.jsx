import React, { useState } from 'react'
import './App.css'
import PatientForm from './PatientForm'
import Appointmentform from './Appointment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Appointmentform/>
   <PatientForm/>
    </>
  )
}

export default App
