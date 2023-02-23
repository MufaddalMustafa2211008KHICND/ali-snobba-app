import React from 'react'
import styles from './Thumbnail.module.css'

const Thumbnail = ({
    src,
    type,
    alt
}) => {
  return (
    <img src={src} className={styles[type]} alt={alt} />
  )
}

export default Thumbnail