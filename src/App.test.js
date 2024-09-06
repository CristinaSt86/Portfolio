import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './ThemeContext'; // Make sure to import ThemeProvider
import { LanguageProvider } from './LanguageContext'; // Make sure to import LanguageProvider
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';  // Assuming i18n configuration is correctly set

test('renders learn react link', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LanguageProvider>
    </I18nextProvider>
  );
  const linkElement = screen.getByText(/learn react/i); // Make sure this text actually exists in App
  expect(linkElement).toBeInTheDocument();
});
