import React, { useEffect, useState } from 'react';

import './BingoGrid.css';

const BingoGrid = props => {
	const [bingoMatrix, setBingoMatrix] = useState([]); // This is a two dimensional array holding the sheet, representing a 5x5 grid, the first array contains the row (0 to 4), the arrays inside contain each tile object (id, text)

	function handleClick(tileIndex) {
		// TODO: Add a API call to toggle the state of the clicked Tile
		alert(`You clicked on tile #${tileIndex}`);
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
		createBingoMatrix(props.bingo.tiles); 
	}, []); // empty dependencies array

	// Return the 5x5 grid
	return <div className="BingoGrid">
		{bingoMatrix.map((row, index) => 
			<div key={index} className={`BingoGrid__Row--${index}`}>{bingoMatrix[index].map(tile =>
			<div key={tile.id} className="BingoGrid__Row__Tile" onClick={() => handleClick(tile.id)}>{tile.text}
				</div>
			)}
			</div>
		)}
	</div>
}

export default BingoGrid;
