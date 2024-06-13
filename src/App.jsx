import React, {Component, useEffect, useState} from 'react';
import "./App.css";
import Header from "./components/Header.jsx";
import Switcher from "./components/Switcher.jsx";
import Footer from "./components/Footer.jsx";
import {BrowserRouter as Router} from "react-router-dom";
// import {CharacterProvider} from "./utils/useContext.js";

const App = () => {


    return (
        <div>
            {/*<Router>*/}
            {/*    <CharacterProvider>*/}
                    <Header/>
                    <Switcher/>
                    <Footer/>
            {/*    </CharacterProvider>*/}
            {/*</Router>*/}
        </div>
    );

};

export default App;