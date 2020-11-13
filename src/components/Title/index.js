import React from 'react'
import styles from './Title.module.css'
import { useLocation }from 'react-router-dom';

const Title = ({children}) => {

  const location = useLocation();
  const currentPath = location.pathname === '/' ? 'homepage' : location.pathname.split('/')[1]  
  const pageClassName = styles[`style-${currentPath}`]

    return (
      <div>
    <h1 className={styles.title}>{children}</h1>
    <pageClassName>{pageClassName}</pageClassName>
    </div>
    )
  }
  
  export default Title