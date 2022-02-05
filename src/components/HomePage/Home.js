import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Carusel from './Carusel/Carusel';
import Poster from './Poster/Poster';

const Home = () => {
    return (
        <div>
            <Carusel></Carusel>
            <Poster></Poster>
            <Footer></Footer>
        </div>
    );
};

export default Home;