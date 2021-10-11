import React from 'react';

import Footer from './Footer';
import Navigation from './Navigation';

const Layout = (props) => {
    return (
        <div>
            <Navigation />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;