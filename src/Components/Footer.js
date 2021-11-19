import React from 'react';

const Footer = () => {
    return (
        <div id="footer" className="text-center">
            <div className="container">
                <div className="footer">
                    <div className="footer-items">
                        <div className="footer-img">
                            <img src={'img/logo.png'} alt={"Footer logo"} loading="lazy" />
                        </div>
                        <div className="footer-text">
                            <p>© Campus Rentals. All Rights Reserved.</p>
                            <a href="https://bahalecodes.co.za/">Website designed and Developed by Bahale Codes</a>
                        </div>
                    </div>
                    <div className='social'>
                        <ul>
                            <li>
                                <a href={"https://www.linkedin.com/"} >
                                    <i className='fa fa-linkedin'></i>
                                </a>
                            </li>
                            <li>
                                <a href={"https://www.facebook.com/"}>
                                    <i className='fa fa-facebook'></i>
                                </a>
                            </li>
                            <li>
                                <a href={"https://www.instagram.com/"}>
                                    <i className='fa fa-instagram'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;