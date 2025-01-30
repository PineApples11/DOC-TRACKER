import React, { useState } from "react";

const LoginForm = () => {
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

  return (
    <section>
      <div>
        <p>Log In</p>
        <form action="">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            onChange={handleChange}
            name="username"
            value={formData.username}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />

          <button type="submit">
            Log In
          </button>
        </form>
        <p>
          Forgot password? <a href="#">Click here</a>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
