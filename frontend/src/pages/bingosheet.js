import React from 'react';
import BingoDataService from '../services/bingo.service';

import './bingosheet.css';

const Bingosheet (props) => {
	const bingoSheetId = props.id;
	
	// TODO: Retreive a Bingo Sheet with props.id as id
	// TODO: Turn the list of tiles into a 5x5 grid
	return 	<>
			<div className={bingoSheet}></div>
		</>;
}

export default Bingosheet;
