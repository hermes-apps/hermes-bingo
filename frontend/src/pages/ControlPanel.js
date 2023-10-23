import React, { useState } from 'react';
import BingoDataService from '../services/bingo.service';

import './ControlPanel.css'
import Button from '../components/ui-elements/Button';

const ControlPanel = (props) => {
	// TODO: Load the current list of Bingo Sheets on a list (create bingolist.js?)
	// TODO: Create a Create Bingo Sheet button that will create a random sheet and update the bingo list
	const [bingoList, setBingoList] = useState();
	const createBingo = () => {
		// Improve this so it accepts a string param for the Bingo Sheet title
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
	const listBingos = () => {
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
		<ul>
			<li><h1>Control Panel placeholder</h1></li>
			<li><Button onClick={createBingo}>Create Bingo</Button></li>
			<li><Button onClick={listBingos}>List Bingos</Button></li>
		</ul>
	</>;
}

export default ControlPanel;
