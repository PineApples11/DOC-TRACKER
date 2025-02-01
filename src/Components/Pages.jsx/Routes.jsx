import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "src/Components/Table.jsx";
import PatientForm from "src/Components/PatientForm.jsx";
import PatientDetails from "src/Components/Pages.jsx/PatientDetails.jsx";
import ErrorPage from "src/Components/Pages.jsx/ErrorPage.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/new" element={<PatientForm />} />
        <Route path="/patient/:id" element={<PatientDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
