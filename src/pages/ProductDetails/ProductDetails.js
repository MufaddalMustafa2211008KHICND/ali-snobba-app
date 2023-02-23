import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import styles from './ProductDetails.module.css'
import Quantity from '../../components/Quantity/Quantity';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import { useFetch } from '../../hooks/useFetch';

const ProductDetails = () => {

  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  const [data] = useFetch(`http://localhost:8080/api/products/${productId}`)
  const productData = data

  const { id, name, shortDescription, longDescription, price, image } = productData

  const handleQuantity = (value) => {
    setQuantity(value);
  }

  const postData = async () => {
    if (quantity != 0) {
      const data = {
        name,
        image,
        quantity,
        price,
        totalPrice: quantity * price
      }

      try {
        const response = await fetch('http://localhost:8081/api/shopping-cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();
        return result
      }
      catch (e) {
        console.log(e, 'I caught this')
      }
    }
  }

  const handleOnClick = async () => {
    const data = await postData()
    console.log(data)
    navigate(`/shopping-cart`)
  }

  return (
    <>
      {console.log(quantity)}
      <Heading>Product Details</Heading>
      <div className={styles.main}>
        <div>
          <Thumbnail src={image} alt={name} type='large' />
        </div>
        <div>
          <div className={styles.title}>
            <div className={styles.name}>{name}</div>
            <div className={styles.price}>{`Rs ${price && price.toLocaleString()}`}</div>
          </div>
          <div className={styles.description}>{longDescription}</div>
          <div className={styles.quantity}>
            <Quantity onChange={handleQuantity} />
          </div>
          <div className={styles.btnContainer}>
            <Button onClick={handleOnClick}>Add to Cart</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails