import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from "./Registration";
import Home from "./Home"
import Login from "./Login"

import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div>
      
      
      <BrowserRouter>
      <h1>Welcome to the Registration Page</h1>
      <ToastContainer/>
         <Routes>

          <Route path='/' element={<Home/>}> </Route>
          <Route path='/login' element={<Login/>}> </Route>
          <Route path='/register' element={<Registration/>}> </Route>

         </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;
