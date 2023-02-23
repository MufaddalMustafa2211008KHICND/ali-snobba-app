import React from 'react'
import Quantity from '../Quantity/Quantity'
import Button from '../Button/Button';
import styles from './ProductCard.module.css'
import { Link, useNavigate } from 'react-router-dom';
import Thumbnail from '../Thumbnail/Thumbnail';
import CloseIcon from '@mui/icons-material/Close';

const ProductCard = ({
    product,
    handleQuantity,
    canAddToCart = true,
    onAddToCart,
    onDelete
}) => {

    const { id, name, shortDescription, price, image } = product

    const navigate = useNavigate();

    

    return (
        <div className={styles.card}>
            {!canAddToCart && <div onClick={() => onDelete(id)} className={styles.closeBtn}>
                <CloseIcon data-testid='closeBtn'/>
            </div>}
            <div className={styles.leftSide}>
                <div>
                    <Thumbnail src={image} alt={name} type='small' />
                </div>
                <div>
                    <div className={styles.name}><Link to={`/product/${id}`}>{name}</Link></div>
                    {shortDescription && <div className={styles.description}>{shortDescription}</div>}
                    <div className={styles.price}>{`Rs ${price.toLocaleString()}`}</div>
                    {product.quantity && <div className={styles.price}>{`Quantity: ${product.quantity}`}</div>}
                    {product.totalPrice && <div className={styles.price}>{`Total price: ${product.totalPrice.toLocaleString()}`}</div>}
                </div>

            </div>
            {canAddToCart && <div className={styles.rightSide}>
                <Quantity onChange={handleQuantity} />
                <div>
                    <Button className={styles.addToCart} onClick={() => onAddToCart(product)}>Add to Cart</Button>
                </div>

            </div>}

        </div>
    )
}

export default ProductCard