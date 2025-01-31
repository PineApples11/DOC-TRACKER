import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Registration from "./Registration";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div>
      <h1>Welcome to the Registration Page</h1>
      <ToastContainer></ToastContainer>
      <BrowserRouter>
         <Routes>

          <Route path='/' element={<Home/>}> </Route>
          <Route path='/login' element={<Registration/>}> </Route>
          <Route path='/register' element={<Login/>}> </Route>

         </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;
