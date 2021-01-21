import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Blogu from "./components/pages/Blogu";
import Contact from "./components/pages/Contact";
import Katalogu from "./components/pages/Katalogu";

function App() {
	return (
		<>
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/blogu" component={Blogu} />
				<Route path="/contact" component={Contact} />
				<Route path="/katalogu" component={Katalogu} />
			</Switch>
		</Router>
		</>
	);
}

export default App;
