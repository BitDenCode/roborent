import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ConsultationPage from "./pages/ConsultationPage/ConsultationPage";
import ScrollToTop from "./components/ScrollToTop";
import ConsultationForm from "./components/ConsultationForm";
import styles from "./style/App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/consult" element={<ConsultationPage />} />
          <Route path="/consultation-form" element={<ConsultationForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
