import React, { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const HomePage = lazy(() => import("../../src/pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("../../src/pages/AboutPage/AboutPage"));
const ContactPage = lazy(() =>
  import("../../src/pages/ContactPage/ContactPage")
);
const ProjectsPage = lazy(() =>
  import("../../src/pages/ProjectsPage/ProjectsPage")
);
const AdviceSlipPage = lazy(() =>
  import("../../src/pages/AdviceSlip/AdviceSlip")
);
const JokeTellerPage = lazy(() =>
  import("../../src/pages/JokeTeller/JokeTeller")
);
const ToDoPage = lazy(() => import("../../src/pages/ToDo/ToDo"));
const FigoRestPage = lazy(() => import("../../src/pages/FigoRest/FigoRest"));
const JoggaInter = lazy(() => import("../../src/pages/JoggaInter/JoggaInter"));
const ServicesPage = lazy(() =>
  import("../../src/pages/ServicesPage/ServicesPage")
);
const Topalx = lazy(() => import("../../src/pages/Topalx/Topalx"));
const Csweb = lazy(() => import("../../src/pages/Csweb/Csweb"));
const Teilen = lazy(() => import("../../src/pages/TeilenApp/Teilen"));

const RoutesConfig = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <ErrorBoundary>
            <HomePage />
          </ErrorBoundary>
        }
      />
      <Route
        path="/about"
        element={
          <ErrorBoundary>
            <AboutPage />
          </ErrorBoundary>
        }
      />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/advice-slip" element={<AdviceSlipPage />} />
      <Route path="/joke-teller" element={<JokeTellerPage />} />
      <Route path="/to-do" element={<ToDoPage />} />
      <Route path="/figo-restaurant" element={<FigoRestPage />} />
      <Route path="/jogga-inter" element={<JoggaInter />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/topalx" element={<Topalx />} />
      <Route path="/csweb" element={<Csweb />} />
      <Route path="/teilen" element={<Teilen />} />
    </Routes>
  );
};

export default RoutesConfig;
