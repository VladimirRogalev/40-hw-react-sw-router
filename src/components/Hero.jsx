import React, {Component} from 'react';
import mainHero from '../Images/main.jpg';

const Hero = ({heroImage}) => {
    return (
        <section className="float-start me-3 w-25">
            <img className="w-100" src={heroImage} alt="hero"/>
        </section>
    );
}

export default Hero;