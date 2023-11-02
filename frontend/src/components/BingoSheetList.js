import React from 'react';
// Copying to clipboard is disable as long as we don't have an https connection, which we don't and probably won't have. If we ever do... delete this comment, I guess.
const HandleCopyClick = (id) => (event) =>  {
	try {
		navigator.clipboard.writeText(`http://${process.env.REACT_APP_IP}:3000/${id}`);} catch(err){console.error("unable to copy to clipboard", err);}
};

const BingoSheetList = (props) => {

	return 	<ul>
		{!props.bingoSheets ? <li>List is empty</li> : props.bingoSheets.map(bingo => <li className={`BingoSheetList__BingoSheet--${bingo._id}`} onClick={HandleCopyClick(bingo._id)}>{bingo.title} : http://{process.env.REACT_APP_IP}:3000/bingo/{bingo._id}</li>)}
		</ul>;
}

export default BingoSheetList;
