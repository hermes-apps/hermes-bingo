import React from 'react';

import './BingoGrid.css';

const BingoGrid = props => {
	// Get the bingoMatrix from props (passed from BingoSheet.js)
	const bingoMatrix = props.bingoMatrix;

	function handleClick(tileIndex) {
		// TODO: Add a API call to toggle the state of the clicked Tile
		alert(`You clicked on tile #${tileIndex}`);
	}

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
