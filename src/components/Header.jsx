import React, {Component, useContext} from 'react';
import Navigation from "./Navigation.jsx";
// import {CharacterContext} from "../utils/useContext.js";
// TODO Class -> func
const Header = () => {
    // console.log(character.name);
    // const {character} = useContext(CharacterContext);


    return (
        <header>
            <Navigation/>
            <h1 className="text-center py-4">Luke Skywalker</h1>
        </header>
    );

};

export default Header;