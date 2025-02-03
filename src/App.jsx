import { Routes, Route } from "react-router-dom"; // Keep only Routes & Route
import FirstPage from "./FirstPage";
import Login from "./Login";
import Register from "./Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
