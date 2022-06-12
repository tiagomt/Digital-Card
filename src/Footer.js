import React from "react";
import facebook from "./images/facebook-icon.png";
import github from "./images/github-icon.png";
import instagram from "./images/instagram-icon.png";
import twitter from "./images/twitter-icon.png";


function Footer() {

    return (

        <footer className="footer">

            <img src={twitter} alt="twitter-logo" />
            <img src={facebook} alt="facebook-logo" />
            <img src={instagram} alt="instagram-logo" />
            <img src={github} alt="github-logo" />

        </footer>

    )

}

export default Footer