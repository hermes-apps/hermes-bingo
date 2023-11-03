import React from 'react';

import './BingoGrid.css';

const BingoGrid = props => {
	// Get the bingoMatrix from props (passed from BingoSheet.js)
	const bingoMatrix = props.bingoMatrix;

	// Return the 5x5 grid
	return <div className="BingoGrid">
		{bingoMatrix.map((row, index) => 
			<div className={`BingoGrid__Row--${index}`}>{bingoMatrix[index].map(tile =>
				<div key={tile.id} className="BingoGrid__Row__Tile">{tile.text}
				</div>
			)}
			</div>
		)}
	</div>
}

export default BingoGrid;
