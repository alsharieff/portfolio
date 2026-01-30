import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import HomePage from "./pages/home/HomePage.jsx";
import PortfolioPage from "./pages/portfolio/PortfolioPage.jsx";
import CertificatePage from "./pages/certificate/CertificatePage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}
