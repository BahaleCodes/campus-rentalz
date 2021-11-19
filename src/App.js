import React from "react";
import {Route} from 'react-router-dom';

import Layout from "./Components/Layout";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
import Join from "./Screens/Join";

const App = () => {
	return (
		<Layout>
			<Route path='/' exact component={Home} />
			<Route path='/about-us' exact component={About} />
			<Route path='/contact-us' exact component={Contact} />
			<Route path='/join-us' exact component={Join} />
		</Layout>
	)
}

export default App;