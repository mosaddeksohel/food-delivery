import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../Images/pexels-photo-2725744.jpeg'

const Poster = () => {
    return (
        <Container>
            <Row className='mb-3'>
                <Col className='d-flex' style={{ width: '16rem', backgroundColor: '#C0C0C0', padding: '15px', borderRadius: '5px', margin: '5px' }}>
                    <Card.Img style={{ width: '10rem' }} variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Fast Food</Card.Title>
                    </Card.Body>
                </Col>
                <Col className='d-flex' style={{ width: '16rem', borderRadius: '5px', backgroundColor: '#C0C0C0', padding: '15px', margin: '5px' }}>
                    <Card.Img style={{ width: '10rem' }} variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Hot Pizza</Card.Title>
                    </Card.Body>
                </Col>
                <Col className='d-flex' style={{ width: '16rem', borderRadius: '5px', backgroundColor: '#C0C0C0', padding: '15px', margin: '5px' }}>
                    <Card.Img style={{ width: '10rem' }} variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Asian Food</Card.Title>
                    </Card.Body>
                </Col>
                <Col className='d-flex' style={{ width: '16rem', borderRadius: '5px', backgroundColor: '#C0C0C0', padding: '15px', margin: '5px' }}>
                    <Card.Img style={{ width: '10rem' }} variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Raw Meat</Card.Title>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
};

export default Poster;