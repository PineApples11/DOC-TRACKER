import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";
import Login from "./Login";
import FirstPage from "./FirstPage"; // Import Landing Page
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <ToastContainer />
                <Routes>
                  <Route path="/" element={<FirstPage />} /> {/* First Page */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/home" element={<Home />} /> {/* After Login */}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
