import React from 'react'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <img
        src='https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/Logo.png'
        alt='Ali Snobba'
        className={styles.logo}
    />
  )
}

export default Logo