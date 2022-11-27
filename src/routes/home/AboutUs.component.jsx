import React from 'react';
import'../../App.css';

import Footer from '../../components/Footer';
import Team from '../../components/Team';
import Faq from '../../components/Faq';
import nasa from '../../images/nasa.jpg';
import { Parallax } from 'react-parallax';

const AboutUs = () => {
    return(
        <>
            <Parallax
        bgImage={nasa}
        strength={500}
    >
            <Faq />
            <Team />
            </ Parallax>
            <Footer />
        </>
    );
};
export default AboutUs;