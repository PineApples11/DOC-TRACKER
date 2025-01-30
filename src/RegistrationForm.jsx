import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  const handleRegistration = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/doctors", {//post request to doctors 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.username,
        password: formData.password
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        toast.success("Registered Successfully");//toast notification 
      })
      .catch((err) => {
        toast.error("Failed: " + err.message);
      });
  };

  return (
    <section>
      <div>
        <p>Registration Form</p>
        <form onSubmit={handleRegistration}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="registration-username"
            placeholder="Username"
            onChange={handleChange}
            name="username"
            value={formData.username}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="registration-password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />

          <button type="submit">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
