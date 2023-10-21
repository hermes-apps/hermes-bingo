import React, { useState } from 'react';
import BingoDataService from '../services/bingo.service';

import './ControlPanel.css'

const ControlPanel = (props) => {
	// TODO: Load the current list of Bingo Sheets on a list (create bingolist.js?)
	// TODO: Create a Create Bingo Sheet button that will create a random sheet and update the bingo list
	const [bingoList, setBingoList] = useState();
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

	return <>
		<h1>Control Panel placeholder</h1>
	</>;
}

export default ControlPanel;
