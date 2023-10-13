import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//Temporal for testing purposes
import BingoDataService from './services/bingo.service';

const App = () => {
	//Temporal for testing purposes
	function createBingo(){
		BingoDataService.create("Test Bingo")
			.then(response => {
				console.log(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}
	return <button onClick={createBingo}>Create Bingo</button>;
}

export default App;
