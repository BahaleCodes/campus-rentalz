import React from "react";
import HomeSlider from "../Components/HomeSlider/HomeSlider";

const Header = (props) => {
    return (
        <div id='header'>
            <HomeSlider />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 col-md-offset-2 intro-text'>
                        <h2>
                            <span></span>
                        </h2>
                        <div className="learn-more">
                            <a className="btn btn-custom btn-lg" href="/join-us">Join the family</a>
                            <br />
                        </div>{' '}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;