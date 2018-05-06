import React, { Component } from 'react';
import Header from './Components/Header';
import Topbar from './Components/Topbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="Container">
					<Topbar/>
					<Header/>
					<Main/>
					<Footer/>
				</div>
			</div>
		);
	}
}

export default App;
