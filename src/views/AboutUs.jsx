import React from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
const AboutUs = () => {
    return (
        <>
            <Header color="#404040" altura="70px" login={true}/>
            <About/>
        </>
    );
}

export default AboutUs;
