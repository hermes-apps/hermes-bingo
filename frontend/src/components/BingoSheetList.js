import React from 'react';

// TODO: Fix the fact that it won't let this function be used in the onClick property: Expected `onClick` listener to be a function, instead got a value of `object` type.
const HandleCopyClick = async (id) =>  {
	try {
		await navigator.clipboard.writeText(`http://${process.env.REACT_APP_IP}:3000/${id}`);} catch(err){console.error("unable to copy to clipboard", err);}
};

const BingoSheetList = (props) => {

	return 	<ul>
		{!props.bingoSheets ? <li>List is empty</li> : props.bingoSheets.map(bingo => <li className={`BingoSheetList__BingoSheet--${bingo._id}`} onClick={HandleCopyClick(bingo._id)}>{bingo.title} : {bingo._id}</li>)}
		</ul>;
}

export default BingoSheetList;
