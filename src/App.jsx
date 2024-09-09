import React, { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import RoutesConfig from "./RoutesConfig/RoutesConfig";
import ThemeWrapper from "./components/ThemeWrapper/ThemeWrapper";
import Header from "./components/Header/Header";
import { LanguageProvider } from "./LanguageContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <HelmetProvider>
          <Suspense fallback={<Loader />}>
            <ThemeWrapper>
              <Header />
              <RoutesConfig />
              <Footer />
            </ThemeWrapper>
          </Suspense>
        </HelmetProvider>
      </LanguageProvider>
    </I18nextProvider>
  );
};

export default App;
