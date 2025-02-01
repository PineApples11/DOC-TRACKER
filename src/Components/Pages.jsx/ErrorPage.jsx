import { useRouteError } from "react-router-dom";
import PatientDetails from "./PatientDetails";

import React from 'react'

function ErrorPage() {
  return (
    <div>
      <header>
        <PatientDetails/>
      </header>
      <main>
        <h1>Whoops! Something went wrong!</h1>
      </main>
      
    </div>
  )
}
export default ErrorPage;