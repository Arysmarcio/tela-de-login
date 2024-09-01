import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegisterWeb/RegisterWeb";
import SuccessRegister from "./components/SuccessRegister/SuccessRegister";
import "./index.css"
import AboutScreen from "./components/AboutUs/AboutUs";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="success" element={<SuccessRegister />} />
          <Route path="about" element={<AboutScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
