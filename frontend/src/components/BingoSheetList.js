import React from 'react';

const BingoSheetList = (props) => {
	return 	<ul>
			{!props.bingoSheets ? <li>List is empty</li> : props.bingoSheets.map(bingo => <li className={`BingoSheetList__BingoSheet--${bingo._id}`}>{bingo.title} : {bingo._id}</li>)}
		</ul>;
}

export default BingoSheetList;
