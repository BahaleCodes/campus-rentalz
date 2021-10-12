import React, { useState, useEffect } from "react";
import {Route} from 'react-router-dom';

import Layout from "./Components/Layout";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
import Join from "./Screens/Join";
import data from './data/data.json';

const App = () => {
	const [ jsonData, setJsonData] = useState({});
	useEffect(() => {
		setJsonData(data);
	}, []);
	return (
		<Layout>
			<Route path='/' exact component={Home} />
			<Route path='/about-us' exact render={() => <About data={jsonData.About} /> } />
			<Route path='/contact-us' exact render={() => <Contact data={jsonData.Contact} /> } />
			<Route path='/join-us' exact component={Join} />
		</Layout>
	)
}

export default App;