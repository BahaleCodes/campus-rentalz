import React from "react";

import NavigationItem from "./Navigation-Item"

const NavigationItems = () => {
    return (
        <ul className="nav navbar-nav navbar-right">
            <NavigationItem link={"/about-us"} name="About Us" />
            <NavigationItem link={"/contact-us"} name="Contact Us" />
            <NavigationItem link={"/join-us"} name="Join The Family" />
        </ul>
    )
}

export default NavigationItems;
