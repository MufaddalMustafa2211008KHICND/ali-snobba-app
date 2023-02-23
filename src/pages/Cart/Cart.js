import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import Heading from '../../components/Heading/Heading'
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useFetch } from '../../hooks/useFetch';
import styles from './Cart.module.css'

const Cart = () => {
  const navigate = useNavigate()

  const [data, setData] = useFetch('http://localhost:8081/api/shopping-cart')
  const cartData = data
  const setCartData = setData

  const onDelete = (id) => {
    fetch(`http://localhost:8081/api/shopping-cart/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        console.log(res)
        const newData = cartData.filter(item => item.id !== id)
        setCartData(newData)
      })
      .catch(e => console.log(e))
  }

  const deleteAll = () => {
    fetch(`http://localhost:8081/api/shopping-cart`, {
      method: 'DELETE'
    })
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }

  const onCheckout = () => {
    deleteAll();
    navigate('/checkout')
  }

  return (
    <>
      <Heading>Shopping Cart</Heading>

      {cartData.length === 0 ?
        <div className={styles.displayText}>Cart is empty</div> :
        cartData.map(item => <ProductCard key={item.id} product={item} canAddToCart={false} onDelete={onDelete} />)}

      {cartData.length !== 0 && <div className={styles.orderTotal}>
        <div>Order Total: {cartData.map(item => item.totalPrice).reduce((a, b) => a + b, 0).toLocaleString()}</div>
      </div>}

      <div className={styles.btnContainer}>
        <Button className={styles.btn} onClick={() => navigate('/')}>Return to shopping</Button>
        <Button disabled={cartData.length === 0 && true} className={styles.btn} onClick={onCheckout}>Checkout</Button>
      </div>
    </>
  )
}

export default Cart