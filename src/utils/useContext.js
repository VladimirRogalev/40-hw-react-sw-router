// import React, {createContext, useState, useEffect} from 'react';
// import {BASE_URL, period_month} from './constants.js';
//
// export const CharacterContext = createContext("");
//
// export const CharacterProvider = ({children}) => {
//     const [character, setCharacter] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
//
//     useEffect(() => {
//         const storedCharacter = JSON.parse(localStorage.getItem("character"));
//         if (storedCharacter && (Date.now() - storedCharacter.time) < period_month) {
//             setCharacter(storedCharacter.payload);
//             setIsLoading(false);
//         } else {
//             fetch(`${BASE_URL}/v1/peoples/1`)
//                 .then(response => response.json())
//                 .then(data => {
//                     const hero = {
//                         name: data.name,
//                         eye_color: data.eye_color,
//                         gender: data.gender,
//                         birth_year: data.birth_year,
//                         image: `${BASE_URL}/${data.image}`
//                     };
//                     setCharacter(hero);
//                     setIsLoading(false);
//                     const info = {
//                         payload: hero,
//                         time: Date.now()
//                     };
//                     localStorage.setItem("character", JSON.stringify(info));
//                 });
//         }
//     }, []);
//
//     return (
//         <CharacterContext.Provider value={{
//             character,
//             isLoading
//         }}>
//             {children}
//         </CharacterContext.Provider>
//     );
// };