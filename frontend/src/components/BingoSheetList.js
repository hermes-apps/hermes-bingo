import React from 'react';

const BingoSheetList = (props) => {
	return 	<ul>
			{!props.bingoSheets ? <li>List is empty</li> : props.bingoSheets.map(bingo => <li>{bingo.title} : {bingo._id}</li>)}
		</ul>;
}

export default BingoSheetList;
