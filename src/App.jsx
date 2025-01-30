import React, { useState,useEffect } from 'react'
import './App.css'
import PatientForm from './PatientForm'
import Table from './Table';


function App() {
  const [patients, setPatients] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:3000/newpatients")
      .then((r) => r.json())
      .then((data) => setPatients(data));
  }, []);

  
  const handleSubmit = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  return (
    <>
   <PatientForm onSubmit={handleSubmit}/>
   <Table newPatient={patients}/>
  
    </>
  )
}

export default App
