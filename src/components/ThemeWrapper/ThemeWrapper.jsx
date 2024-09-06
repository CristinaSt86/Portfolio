import React from 'react'
import { useTheme } from '../../ThemeContext';
import css from './ThemeWrapper.module.css'


const ThemeWrapper = ({children}) => {


const { theme } = useTheme();


  return (
    <div className={theme === 'dark' ? `${css.darkTheme} dark-theme` : `${css.lightTheme} light-theme`}>
    {children}
  </div>
  )
}

export default ThemeWrapper;
