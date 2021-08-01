import React , { useEffect } from 'react';
import Axios from 'axios';
import styles from './LandingPage.module.css'

const LandingPage = (props) => {
   return (
      <div className={styles.landingContent}>
         <h2>시작 페이지</h2>
      </div>
   )
};

export default LandingPage;