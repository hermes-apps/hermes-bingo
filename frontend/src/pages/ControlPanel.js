import React, { useState } from 'react';
import BingoDataService from '../services/bingo.service';

import './ControlPanel.css'
import Button from '../components/ui-elements/Button';
import BingoSheetList from '../components/BingoSheetList';

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
				setBingoList(response.data);
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
	
	// Update the Bingo list on page load
	listBingos();
	
	return <>
		<ul>
			<li><h1>Control Panel</h1></li>
			<li><Button onClick={() => {createBingo(); listBingos();}}>Create Bingo</Button></li>
		</ul>
		<div className="BingoSheetList"><BingoSheetList bingoSheets={bingoList}/></div>
	</>;
}

export default ControlPanel;
