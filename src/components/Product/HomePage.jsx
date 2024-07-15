import React from "react";
import Sort from "../Sort/Sort";
import Cards from "./Cards";
import arrowUp from "../navigation.gif";
import "./Cards.css"
const HomePage = () => {
    return(
        <>
            <Sort />
            <div className="outer-wrapper">
                <Cards />
            </div>
            <img
                src={arrowUp} // replace with the URL of your GIF
                alt="arrow up"
                className="arrow-up-gif"
              />
        </>
    )
}

export default HomePage;