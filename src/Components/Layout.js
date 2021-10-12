import React, { useEffect, useState } from 'react';

import Footer from './Footer';
import Navigation from './Navigation';
import data from '../data/data.json';

const Layout = (props) => {
	const [ jsonData, setJsonData] = useState({});
	useEffect(() => {
		setJsonData(data);
	}, []);

    return (
        <div>
            <Navigation data={jsonData.Social} />
            <main>
                {props.children}
            </main>
            <Footer data={jsonData.Social} />
        </div>
    )
}

export default Layout;