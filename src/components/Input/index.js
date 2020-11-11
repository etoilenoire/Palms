
import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'


const Input = (props) => {
    const { type } = props
    
    return (
      <div>
        <input className={styles.auth} 
          // placeholder='Entrez votre mail'
          type={type}
        />
        
      </div>
    )
  }
  
  Input.propTypes = {
    type: PropTypes.oneOf(['password', 'email', 'text'])
  }


export default Input
