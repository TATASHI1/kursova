import React from 'react';
import './style.css';

function Menu() {
    return(
        <>
            <div className="header__nav">
                <a href="/">
                    <img src="img/logo.png" alt="" />
                </a>
                <div className="header__navigation">
                    <a href="#shop">Menu</a>
                    <a href="#contacts">Contacts</a>
                </div>
                <a href="/bin"><img src="img/bin.png" alt="" /></a>
            </div>
        </>
    )
}
export default Menu