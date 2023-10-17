import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//Temporal for testing purposes
import BingoDataService from './services/bingo.service';

const App = () => {
	//Temporal for testing purposes
	function createBingo(){
		BingoDataService.create({title: "test bingo"})
			.then(response => {
				console.log(response.data);
			})
			.catch(err => {
				if (err.response) {
					console.log(err.response.data);
					console.log(err.response.header);
				} else if (err.request) {
					console.log(err.request);
				} else {
					console.log(err.message);
				}
				console.log(err.config);
			});
	}
	// TODO: Function to retreive a list of all Bingo Sheets (title & id)
	function listBingos(){
		BingoDataService.getAll()
			.then(response => {
				console.log(response.data);
			})
			.catch(err => {
				if (err.response) {
					console.log(err.response.data);
					console.log(err.response.header);
				} else if (err.request) {
					console.log(err.request);
				} else {
					console.log(err.message);
				}
				console.log(err.config);
			});
	}
	return 	<>
			<button onClick={createBingo}>Create Bingo</button>
			<button onClick={listBingos}>List Bingo Sheets</button>
		</>;
}

export default App;
