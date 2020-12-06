import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Katalogu from "./components/pages/Katalogu";

function App() {
	return (
		<>
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/services" component={Services} />
				<Route path="/contact" component={Contact} />
				<Route path="/katalogu" component={Katalogu} />
			</Switch>
		</Router>
		</>
	);
}

export default App;
