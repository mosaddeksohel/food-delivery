import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../Images/slider-courier-mask.png'

const Carusel = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100, h-70%"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="">
                        <h3>Express Home Delivery</h3>
                        <p>Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Carusel;