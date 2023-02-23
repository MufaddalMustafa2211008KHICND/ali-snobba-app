import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

const Button = ({
    type='primary',
    onClick,
    children,
    className,
    disabled=false,
    href
}) => {

  if(href) {
    return <a className={styles.button} href={href}>{children}</a>
  }

  return (
    <button disabled={disabled} className={`${styles[type]} ${className} ${disabled && styles.disabled}`} onClick={onClick} >{children}</button>
  )
}

export default Button