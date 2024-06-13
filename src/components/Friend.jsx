import React, {useState} from 'react';
//rsc
const Friend = ({friendPhoto, pos, onClick}) => {
    //friendPhoto and pos
    let styles = 'col-4 p-1';
    if (pos === 7) {
        styles += " bottom-left";
    }
    if (pos === 9) {
        styles += " bottom-right";
    }

    return (
        <img className={styles} src={friendPhoto} onClick={onClick} alt="friend"/>
    );
};

export default Friend;