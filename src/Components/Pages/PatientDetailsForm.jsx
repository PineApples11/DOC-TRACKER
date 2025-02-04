import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function PatientDetailsForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bloodType: "",
    medications: "",
    allergies: "",
    illnesses: "",
    surgeries: "",
    insurance: "",
    kin: "",
    date: "",
    diagnosis: "",
    prescriptions: "",
    instructions: "",
    doctor: "",
    hospital: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/newpatients/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data); 
        console.log("Patient ID:", id);
                      // Debugging
        if (data) {
          setFormData({
            bloodType: data.medical_history?.bloodType || "",
            medications: data.medical_history?.medications?.join(", ") || "",
            allergies: data.medical_history?.allergies?.join(", ") || "",
            illnesses: data.medical_history?.chronicIllnesses?.join(", ") || "",
            surgeries: data.medical_history?.majorSurgeries?.join(", ") || "",
            insurance: data.medical_history?.healthInsuranceProvider || "",
            kin: data.medical_history?.nextOfKin || "",
            date: data.prescription?.dateOfPrescription || "",
            diagnosis: data.prescription?.diagnosis || "",
            prescriptions: data.prescription?.medicationsPrescribed?.dosage || "",
            instructions: data.prescription?.additionalInstructions?.join(", ") || "",
            doctor: data.prescription?.doctorsName || "",
            hospital: data.prescription?.hospital || "",
          });
        }
      })
      .catch((error) => console.error("Error fetching patient details:", error));
  }, [id, formData]);//Form data as a dependancy 

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
  
    const updatedData = {
      medical_history: {
        bloodType: formData.bloodType,
        medications: formData.medications ? formData.medications.split(",") : [],
        allergies: formData.allergies ? formData.allergies.split(",") : [],
        chronicIllnesses: formData.illnesses ? formData.illnesses.split(",") : [],
        majorSurgeries: formData.surgeries ? formData.surgeries.split(",") : [],
        healthInsuranceProvider: formData.insurance,
        nextOfKin: formData.kin,
      },
      prescription: {
        dateOfPrescription: formData.date,
        diagnosis: formData.diagnosis,
        medicationsPrescribed: {
          dosage: formData.prescriptions,
          frequency: "N/A",
        },
        additionalInstructions: formData.instructions ? formData.instructions.split(",") : [],
        doctorsName: formData.doctor,
        hospital: formData.hospital,
      },
    };
  
    fetch(`http://localhost:3000/newpatients/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update patient details.");
        }
        return response.json();
      })
      .then(() => {
        alert("Patient details updated successfully!");
        navigate(`/patientdetails/${id}`);
      })
      .catch((error) => {
        console.error("Error updating patient details:", error);
        alert("Error updating patient details. Please try again.");
      });
      setTimeout(() => navigate(`/patientdetails/${id}`), 500);//delay so we dont davigate before state
  }
  
  return (
    <div className="detail-form">
      <h1>Medical Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="bloodType" placeholder="Blood Type" value={formData.bloodType} onChange={handleChange} />
        <input type="text" name="medications" placeholder="Medications (comma-separated)" value={formData.medications} onChange={handleChange} />
        <input type="text" name="allergies" placeholder="Allergies (comma-separated)" value={formData.allergies} onChange={handleChange} />
        <input type="text" name="illnesses" placeholder="Chronic Illnesses (comma-separated)" value={formData.illnesses} onChange={handleChange} />
        <input type="text" name="surgeries" placeholder="Major Surgeries (comma-separated)" value={formData.surgeries} onChange={handleChange} />
        <input type="text" name="insurance" placeholder="Insurance Provider" value={formData.insurance} onChange={handleChange} />
        <input type="text" name="kin" placeholder="Next Of Kin" value={formData.kin} onChange={handleChange} />

        <h2>Prescription Form</h2>
        <input type="text" name="date" placeholder="Date" value={formData.date} onChange={handleChange} />
        <input type="text" name="diagnosis" placeholder="Diagnosis" value={formData.diagnosis} onChange={handleChange} />
        <input type="text" name="prescriptions" placeholder="Medications Prescribed" value={formData.prescriptions} onChange={handleChange} />
        <input type="text" name="instructions" placeholder="Additional Instructions (comma-separated)" value={formData.instructions} onChange={handleChange} />
        <input type="text" name="doctor" placeholder="Doctor's Name" value={formData.doctor} onChange={handleChange} />
        <input type="text" name="hospital" placeholder="Hospital" value={formData.hospital} onChange={handleChange} />
        <Link to={`/patientdetails/${id}`}>
        <button type="submit" className="submit">Save Changes</button> {/*link to patientdetails/:id*/}
        </Link>
      </form>
    </div>
  );
}

export default PatientDetailsForm;