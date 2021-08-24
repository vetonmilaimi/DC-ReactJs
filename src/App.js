import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from "./components/pages/Contact";
import Katalogu from "./components/pages/Katalogu";
import DyerKatalog from "./components/DyerKatalog";
import GilinderaKatalog from "./components/GilinderaKatalog";
import TerasaKatalog from "./components/TerasaKatalog";

function App() {
	return (
		<>
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path="/katalogu" component={Katalogu} />
				<Route path="/dyer" component={DyerKatalog} />
				<Route path="/gilindera" component={GilinderaKatalog} />
				<Route path="/terasa"component={TerasaKatalog} />

			</Switch>
		</Router>
		</>
	);
}

export default App;
