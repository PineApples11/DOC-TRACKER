// import React, { useState ,useEffect} from 'react'

//  function PatientForm() {

// const [firstName,setFirstName] =useState("")
// const [lastName,setLastName] =useState("")
// const [weight,setWeight] =useState("")
// const [formData, setFormData]=useState([])

// // useEffect(() => {
// //   fetch("http://localhost:3000/doctors")
// //     .then((r) => r.json())
// //     .then((data) => setFormData(data)); 
// // }, []);



// function handleFirstNameChange(event){
// setFirstName(event.target.value)
// }

// function handleLastNameChange(event){
//   setLastName(event.target.value)
// }

// function handleWeightChange(event){
//   setWeight(event.target.value)
// }

//   function handleSubmit(event){
//     event.preventDefault();

// const newPatient ={
//   firstName:firstName,
//   lastName:lastName,
//   weight:weight,
//   medical_history:[],
//   prescription:[],
// }

// fetch("http://localhost:3000/newpatients", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(newPatient),
// })
//   .then((r) => r.json())
//   .then((newEntry) => setFormData([...formData, newEntry]));

// setFirstName("");
// setLastName("");
// setWeight("");

//   }


//   return (
//     <div className='patient-form'>
//       <h1>Patient Form </h1>
//      <form onSubmit={handleSubmit}>
//       <input type="text" name="firstName"  placeholder="First Name" onChange={handleFirstNameChange} value={firstName} />
//       <input type="text" name="lastName" placeholder=" Second Name"  onChange={handleLastNameChange} value={lastName} />
//       <input type="text" name="weight" placeholder="Weight" onChange={handleWeightChange} value={weight} />
//       <button className='submit' type="submit">Submit</button>
//      </form>
      
//     </div>
//   )
// }

// export default PatientForm

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PatientForm({ onSubmit }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [weight, setWeight] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const newPatient = {
      firstName,
      lastName,
      weight,
      medical_history: [],
      prescription: [],
    };

    fetch("http://localhost:3000/newpatients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPatient),
    })
      .then((r) => r.json())
      .then((newEntry) => {
        onSubmit(newEntry); // Updates state in App.js
      });

    setFirstName("");
    setLastName("");
    setWeight("");
    navigate("/table");
  }

  return (
    <div className='patient-form'>
      <h1>Patient Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
        <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
        <input type="text" placeholder="Weight" onChange={(e) => setWeight(e.target.value)} value={weight} />
        <button className='submit' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PatientForm;
