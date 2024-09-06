import React from "react";
import css from "./Loader.module.css"
import { useTranslation } from 'react-i18next';

const Loader = () => {
  const { t } = useTranslation();
  return(
    <div className={css.mesajContainer}>
      <div className={css.mesaj}>{t('loadingMessage')}</div>
    </div>
  )
}
 
export default Loader;
