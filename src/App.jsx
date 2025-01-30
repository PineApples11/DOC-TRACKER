import React from "react";
import RegistrationForm from "./RegistrationForm"; // Adjust the path if necessary
import LoginForm from "./LoginForm"
const App = () => {
  return (
    <div>
      <h1>Welcome to the Registration Page</h1>
      <RegistrationForm />
           <LoginForm />
    </div>
  );
};

export default App;
