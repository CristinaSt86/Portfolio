import React, { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PageTransition from "../components/PageTransition/PageTransition";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";



const HomePage = lazy(() => import("../../src/pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("../../src/pages/AboutPage/AboutPage"));
const ContactPage = lazy(() => import("../../src/pages/ContactPage/ContactPage"));
const ProjectsPage = lazy(() => import("../../src/pages/ProjectsPage/ProjectsPage"));
const AdviceSlipPage = lazy(() => import("../../src/pages/AdviceSlip/AdviceSlip"));
const JokeTellerPage = lazy(() => import("../../src/pages/JokeTeller/JokeTeller"));
const ToDoPage = lazy(() => import("../../src/pages/ToDo/ToDo"));
const FigoRestPage = lazy(() => import("../../src/pages/FigoRest/FigoRest"));
const JoggaInter = lazy(() => import("../../src/pages/JoggaInter/JoggaInter"));
const ServicesPage = lazy(() => import("../../src/pages/ServicesPage/ServicesPage"));


const RoutesConfig = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <PageTransition duration={1000}>
            <ErrorBoundary>
              <HomePage />
            </ErrorBoundary>
          </PageTransition>
        }
      />
      <Route
        path="/about"
        element={
          <PageTransition duration={1000}>
            <ErrorBoundary>
              <AboutPage />
            </ErrorBoundary>
          </PageTransition>
        }
      />
      <Route
        path="/contact"
        element={
          <PageTransition duration={1000}>
            <ContactPage />
          </PageTransition>
        }
      />
      <Route
        path="/projects"
        element={
          <PageTransition duration={1000}>
            <ProjectsPage />
          </PageTransition>
        }
      />
      <Route
        path="/advice-slip"
        element={
          <PageTransition duration={1000}>
            <AdviceSlipPage />
          </PageTransition>
        }
      />
      <Route
        path="/joke-teller"
        element={
          <PageTransition duration={1000}>
            <JokeTellerPage />
          </PageTransition>
        }
      />
      <Route
        path="/to-do"
        element={
          <PageTransition duration={1000}>
            <ToDoPage />
          </PageTransition>
        }
      />
      <Route
        path="/figo-restaurant"
        element={
          <PageTransition duration={1000}>
            <FigoRestPage />
          </PageTransition>
        }
      />
      <Route
        path="/jogga-inter"
        element={
          <PageTransition duration={1000}>
            <JoggaInter />
          </PageTransition>
        }
      />
      <Route
        path="/services"
        element={
          <PageTransition duration={1000}>
            <ServicesPage />
          </PageTransition>
        }
      />
  
    </Routes>
  );
};

export default RoutesConfig;
