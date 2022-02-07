import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = ({ product }) => {
    const { name, img, price, description } = product;
    return (
        <div>
            <Card xs={6} md={4} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Title>Price ${price}</Card.Title>
                    <Button variant="primary">Order Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;