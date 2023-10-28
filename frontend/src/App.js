import React from 'react';
import Router from 'react-router-dom';

import './App.css';
import BingoDataService from './services/bingo.service';
import ControlPanel from './pages/ControlPanel';

const App = () => {
	return <ControlPanel/>; 
}

export default App;
