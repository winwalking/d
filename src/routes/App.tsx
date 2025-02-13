import React, { useEffect } from "react";
import "../assets/scss/index.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BaseLayout from "../layouts/Base";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import TextMasker from "../pages/TextMasker";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/main" element={<Dashboard />} />
          <Route path="/textmasker" element={< TextMasker/>} /> 
          {/* <Route path="/" element={< />} /> */ }
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
