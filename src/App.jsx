import React, { useState } from 'react'
import './App.css'
import PatientForm from './PatientForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <PatientForm/>
    </>
  )
}

export default App
