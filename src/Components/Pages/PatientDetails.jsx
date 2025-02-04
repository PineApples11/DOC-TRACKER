import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function PatientDetails() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  
  useEffect(() => {
    fetch(`http://localhost:3000/newpatients/${id}`)
      .then((response) => response.json())
      .then((data) => setPatient(data))
      .catch((error) => console.error("Error fetching patient:", error));
  }, [id]);

  if (!patient) {
    return <h2>Loading patient details...</h2>;
  }

  return (
    <div className='details'>
      <h2>Patient Details</h2>
      <p><strong>First Name:</strong> {patient.firstName}</p>
      <p><strong>Last Name:</strong> {patient.lastName}</p>
      <p><strong>Weight:</strong> {patient.weight} kg</p>

<<<<<<< HEAD:src/Components/Pages.jsx/PatientDetails.jsx
      <h3>Medical History</h3>
      {/* <p> None</p> */}
      <p><strong>Blood Type:</strong> {patient.medical_history?.bloodType || "N/A"}</p>
=======
      {/* <p><strong>Blood Type:</strong> {patient.medical_history?.bloodType || "N/A"}</p>
>>>>>>> origin/main:src/Components/Pages/PatientDetails.jsx
      <p><strong>Medications:</strong> {patient.medical_history?.medications?.join(", ") || "None"}</p>
      <p><strong>Allergies:</strong> {patient.medical_history?.allergies?.join(", ") || "None"}</p>
      <p><strong>Chronic Illnesses:</strong> {patient.medical_history?.chronicIllnesses?.join(", ") || "None"}</p>
      <p><strong>Major Surgeries:</strong> {patient.medical_history?.majorSurgeries?.join(", ") || "None"}</p>
      <p><strong>Health Insurance Provider:</strong> {patient.medical_history?.healthInsuranceProvider || "N/A"}</p>
      <p><strong>Next of Kin:</strong> {patient.medical_history?.nextOfKin || "N/A"}</p>

      <h4>Prescription History</h4>
      <h3>Medical History</h3>
      <p><strong>Blood Type:</strong> {patient.medical_history?.bloodType || "N/A"}</p>
      <p><strong>Medications:</strong> {patient.medical_history?.medications?.join(", ") || "None"}</p>
      <p><strong>Allergies:</strong> {patient.medical_history?.allergies?.join(", ") || "None"}</p>
      <p><strong>Chronic Illnesses:</strong> {patient.medical_history?.chronicIllnesses?.join(", ") || "None"}</p>
      <p><strong>Major Surgeries:</strong> {patient.medical_history?.majorSurgeries?.join(", ") || "None"}</p>
      <p><strong>Health Insurance Provider:</strong> {patient.medical_history?.healthInsuranceProvider || "N/A"}</p>
      <p><strong>Next of Kin:</strong> {patient.medical_history?.nextOfKin || "N/A"}</p>

      <h4>Prescription History</h4>
      <p><strong>Date:</strong> {patient.prescription?.dateOfPrescription || "N/A"}</p>
      <p><strong>Diagnosis:</strong> {patient.prescription?.diagnosis || "N/A"}</p>
      <p><strong>Medications Prescribed:</strong> {patient.prescription?.medicationsPrescribed?.dosage || "None"}</p>
      <p><strong>Additional Instructions:</strong> {patient.prescription?.additionalInstructions?.join(", ") || "None"}</p>
      <p><strong>Doctor:</strong> {patient.prescription?.doctorsName || "N/A"}</p>
      <p><strong>Hospital:</strong> {patient.prescription?.hospital || "N/A"}</p>

      <Link to={`/patientdetailsform/${id}`}>
        <button className='submit'>Edit</button>
      </Link>
      <Link to="/table">
        <button className='submit'>Back to Patients</button> 
      </Link>
    </div>
  );
}

export default PatientDetails;