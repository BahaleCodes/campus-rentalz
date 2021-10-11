import React from "react";

import NavigationItems from "./Navigation/Navigation-Items";

const Navigation = () => {
    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                    >
                        {" "}
                        <span className="sr-only">Toggle navigation</span>{" "}
                        <span className="icon-bar"></span>{" "}
                        <span className="icon-bar"></span>{" "}
                        <span className="icon-bar"></span>{" "}
                    </button>

                    <a className="navbar-brand page-scroll" href="/tma">
                        <div className="nav-pic">
                            <img alt="Company Logo" className="img" src="img/logo.png" loading='lazy' />
                        </div>
                    </a>{" "}
                </div>

                <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                >
                    <NavigationItems />
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
