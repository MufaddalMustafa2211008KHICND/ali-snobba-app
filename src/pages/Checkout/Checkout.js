import React from 'react'
import Button from '../../components/Button/Button'
import Heading from '../../components/Heading/Heading'
import Logo from '../../components/Logo/Logo'
import { useNavigate } from 'react-router-dom';
import styles from './Checkout.module.css'

const Checkout = () => {

  const navigate = useNavigate()

  return (
    <>
      <Heading>Thank you</Heading>
      <div className={styles.thankYou}>Thanks for your order</div>
      <div className={styles.startOver} >
        <Button href="/">Start over</Button>
      </div>

    </>
  )
}

export default Checkout