import React from 'react'
import css from './ParagraphNight.module.css'
import { useTheme } from '../../ThemeContext'


const ParagraphNight = ({children}) => {

const { theme } = useTheme();

const ParagraphDark = theme === 'dark' ? css.paragraphNight : '';


  return (
    <div className={ParagraphDark}>{children}</div>
  )
}


export default ParagraphNight;