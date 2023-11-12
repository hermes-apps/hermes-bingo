import React, { useEffect, useState } from 'react';
import BingoDataService from '../services/bingo.service';

import './BingoGrid.css';

const BingoGrid = props => {
	const [bingoMatrix, setBingoMatrix] = useState([]); // This is a two dimensional array holding the sheet, representing a 5x5 grid, the first array contains the row (0 to 4), the arrays inside contain each tile object (id, text)
	const [bingo, setBingo] = useState();

	function handleClick(tileIndex) {
		// TODO: Add a API call to toggle the state of the clicked Tile
		// TODO: Fix this no updating properly. The request gets sent to the backend, gets processed and even returns a message saying that it's updated. However I still get an http 404 response, so the then part of the code here doesn't process. Additionally, I console.log(data) in the back end and for some reason it showed for a moment before, but I can't get it to show now.
		// day 2 of debugging: I found out that if you send the package through the network tab (by double clicking the failed package you get 404 on) it works.
		let newBingo = bingo;
		// Toggle the status
		newBingo.tiles[tileIndex].status = !newBingo.tiles[tileIndex].status;
		setBingo(bingo);
		BingoDataService.update(props.id, bingo)
			.then(res => { 
				createBingoMatrix(bingo.tiles);
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

	// Function that turns the tiles attribute of the Bingo object into the bingoMatrix 2d array
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

	// Run this on load
	useEffect(() => {
		setBingo(props.bingo);
		createBingoMatrix(props.bingo.tiles);
	}, []); // empty dependencies array

	// Return the 5x5 grid
	return <div className="BingoGrid">
		{bingoMatrix.map((row, index) => 
			<div key={index} className={`BingoGrid__Row--${index}`}>{bingoMatrix[index].map(tile =>
			<div key={tile.id} className="BingoGrid__Row__Tile" onClick={() => handleClick(tile.id)} style={{backgroundColor: props.bingo.tiles[tile.id].status ? '#636363' : '#141414'}}><span className="Tile__Text">{tile.text}</span>
				</div>
			)}
			</div>
		)}
	</div>
}

export default BingoGrid;
