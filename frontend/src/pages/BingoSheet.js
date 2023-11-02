import React, { useEffect, useState } from 'react';
import BingoDataService from '../services/bingo.service';
import { useParams } from 'react-router-dom';

import './BingoSheet.css';

const BingoSheet = (props) => {
	const [bingoMatrix, setBingoMatrix] = useState([]); // This is a two dimensional array holding the sheet, representing a 5x5 grid, the first array contains the row (0 to 4), the arrays inside contain each tile object (id, text)
	const { id } = useParams(); // id taken from the route
	const [bingo, setBingo] = useState({title: 'loading'}); // Raw bingo object from the backend, containing an object with a title and a tiles array inside, each containing attributes sentence and status (which can be 0 and 1). This can obviously be optimised, but I can't be arsed
	// Function that turns the tiles attribute of the Bingo object and turns it the bingoMatrix 2d array
	const createBingoMatrix = array => {
		let returnMatrix = []; // matrix to be assigned finally to bingoMatrix
		let tileRow = []; // each element inside returnMatrix contains a row with 5 elements in it
		let actualIndex = 0; // used to assign an id (and ultimately key) to each Tile
		for (var i = 0;i < 5;i++){
			for (var j = 0;j < 5;j++){
				tileRow.push({id: actualIndex, text: array[actualIndex].sentence});
				actualIndex++;
			}
			returnMatrix.push(tileRow);
			tileRow = [];
		}

		setBingoMatrix(returnMatrix);	
	}
	// Function ran on load to get the Bingo object from backend with this page's assigned id
	const loadBingo = (id) => {
		BingoDataService.get(id)
			.then(response => {
				setBingo(response.data);
				createBingoMatrix(response.data.tiles);
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

	//// Run this on load
	useEffect(() => {
		loadBingo(id);	
	}, []); // empty dependencies array

	// TODO: Create proper React element for Tile
	// TODO: Put a listener on each tile to toggle that tile value in the db and set use state
	return 	<div>
			<h1>{bingo.title}</h1>
			<div>
				{bingoMatrix.map(row => <div className="row">{row.map(tile => <div key={tile.id} className="tile">{tile.text}</div>)}</div>)}
			</div>
		</div>;	

}

export default BingoSheet;
