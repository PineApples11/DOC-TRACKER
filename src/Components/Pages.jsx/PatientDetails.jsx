import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PatientForm from '../PatientForm';

function PatientDetails() {
  const [patient,setPatients]=useState({});
  const params=useParams();
  const patientId=params.id

  useEffect(() =>{
    fetch(`http://localhost:3000/newpatients/${patientId}`)
    .then(r => r.json())
    .then(data => setPatients(data))
    .catch(error => console.error(error));
  }, [patientId]);

  if(!patient.name){
    return <h1>Loading...</h1>;
  };

  return (
    <div>
      <h1> Patient Details </h1>
      
      <h2> Medical Details </h2>
   
      <h3> Prescription Details </h3>
      
    </div>
  )
}
export default PatientDetails;