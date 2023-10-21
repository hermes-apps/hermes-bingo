import logo from './logo.svg';
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ControlPanel from './pages/ControlPanel';

import BingoDataService from './services/bingo.service';

const App = () => {
	return <ControlPanel/>; 
}

export default App;
