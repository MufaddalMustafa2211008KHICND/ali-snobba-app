import React, { useEffect, useState } from 'react'
import Heading from '../../components/Heading/Heading'
import Logo from '../../components/Logo/Logo'
import ProductCard from '../../components/ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';
import {useFetch} from '../../hooks/useFetch';

const Products = () => {

    const [quantity, setQuantity] = useState(1);

    const navigate = useNavigate();

    const [data] = useFetch('http://localhost:8080/api/products/all')
    const productsData = data


    const handleQuantity = (value) => {
        setQuantity(value);
    }

    const postData = async (product) => {
        if (quantity != 0) {

            const data = {
                name: product.name,
                image: product.image,
                quantity: quantity,
                price: product.price,
                totalPrice: quantity * product.price
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

    const onAddToCart = async (product) => {
        const data = await postData(product)
        console.log(data)
        navigate(`/shopping-cart`)
    }

    return (
        <>
            <Heading>Products</Heading>
            {productsData.length === 0 ?
                <div>
                    No products to display
                </div> :
                <div>
                    {productsData.map(item => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} handleQuantity={handleQuantity} />)}
                </div>
            }
        </>
    )
}

export default Products