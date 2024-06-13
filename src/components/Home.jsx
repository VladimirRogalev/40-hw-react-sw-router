import React, {useState} from 'react';
import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import Story from "./Story.jsx";
import mainHero from '../Images/main.jpg';
import {friends} from "../utils/constants.js";


const Home = () => {

    const [heroImage, setHeroImage] = useState(mainHero);
    const [friendImages, setFriendImages] = useState(friends);

    const changeImages = (friendIndex) => {
        const newFriendImages = [...friendImages];
        const temp = newFriendImages[friendIndex];
        newFriendImages[friendIndex] = heroImage;
        setHeroImage(temp);
        setFriendImages(newFriendImages);
    };

    return (
        <main className="clearfix">
            <Hero heroImage={heroImage}/>
            <DreamTeam friends={friendImages} onClick={changeImages}/>
            <Story/>
        </main>
    );
};

export default Home;