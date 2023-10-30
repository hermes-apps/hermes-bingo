import React, { useState } from 'react';
import BingoDataService from '../services/bingo.service';
import { useParams } from 'react-router-dom';

import './BingoSheet.css';

const BingoSheet = (props) => {
	const [bingoMatrix, setBingoMatrix] = useState();
	const { id } = useParams();
	
	// TODO: find a bingo by ID (props.id) and set it to bingoMatrix
	// TODO: Turn the list of tiles into a 5x5 grid
	// TODO: Put a listener on each tile to toggle that tile value in the db and set use state
	return 	<>
		<div className="bingoSheet"><h1>{id}</h1></div>
		</>;
}

export default BingoSheet;
