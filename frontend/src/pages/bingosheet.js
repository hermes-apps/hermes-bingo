import  React, { useState } from 'react';
import BingoDataService from '../services/bingo.service';

import './bingosheet.css';

const BingoSheet = (props) => {
	const [bingoMatrix, setBingoMatrix] = useState();
	
	// TODO: find a bingo by ID (props.id) and set it to bingoMatrix
	// TODO: Turn the list of tiles into a 5x5 grid
	// TODO: Put a listener on each tile to toggle that tile value in the db and set use state
	return 	<>
		<div className="bingoSheet"><h1>Test</h1></div>
		</>;
}

export default BingoSheet;
