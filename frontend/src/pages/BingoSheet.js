import React, { useEffect, useState } from 'react';
import BingoDataService from '../services/bingo.service';
import { useParams } from 'react-router-dom';

import './BingoSheet.css';
import BingoGrid from '../components/BingoGrid';

const BingoSheet = (props) => {
	const { id } = useParams(); // id taken from the route
	const [bingo, setBingo] = useState({title: 'loading'}); // Raw bingo object from the backend, containing an object with a title and a tiles array inside, each containing attributes sentence and status (which can be 0 and 1). This can obviously be optimised, but I can't be arsed
	
	// Function ran on load to get the Bingo object from backend with this page's assigned id
	const loadBingo = (id) => {
		BingoDataService.get(id)
			.then(response => {
				setBingo(response.data);
				console.log(response.data);
			})
			.catch(err => {
				if (err.response) {
					console.log(err.response.data);
					console.log(err.response.header);
				} else if (err.request) {
					console.log(err.request);
				} else {
					console.log(err.message);
				}
				console.log(err.config);
			});
	}

	// Run this on load
	useEffect(() => {
		loadBingo(id);	
	}, []); // empty dependencies array

	// TODO: Create proper React element for Tile
	// TODO: Put a listener on each tile to toggle that tile value in the db and set use state
	return 	<div style={{height: '100%'}}>
		<div style={{height: '5%', textAlign: 'center', vertiicalAlign: 'middle', margin: '0px', minHeight: '30px'}}><h1 style={{margin: '0px'}}>{bingo.title && bingo.title}</h1></div>
		{bingo.tiles && <BingoGrid id={id} bingo={bingo} />}
		</div>;	

}

export default BingoSheet;
