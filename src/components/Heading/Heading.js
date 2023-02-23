import React from 'react'
import styles from './Heading.module.css'

const Heading = ({
    children
}) => {
  return (
    <div className={styles.align}>
      <h1 className={styles.heading} >{children}</h1>
    </div>
    
  )
}

export default Heading