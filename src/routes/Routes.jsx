import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "../pages/auth/login/Login";
function BasicRoutes() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default BasicRoutes;
