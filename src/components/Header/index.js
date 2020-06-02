import React from "react";
import { today } from "../../storage";
import "./style.css"



const Header = () => {

    return(
        <header>
            <link href="https://fonts.googleapis.com/css2?family=Rokkitt&display=swap" rel="stylesheet"></link>
            <h1>Covid Tracker</h1>
            <div>{today}</div>
        </header>
    )
}

export default Header;
