import React, { useEffect, useState, } from 'react';
import { Container } from 'react-bootstrap';
import './Products.css'
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    },
        [])
    return (
        <div >
            <h1>Our Products</h1>
            <Container>
                <div className='productsItem mx-auto'  >
                    {
                        products.map(product => <Product
                            key={product.Id}
                            product={product}

                        ></Product>)

                    }
                </div>
            </Container>

        </div>
    );
};

export default Products;