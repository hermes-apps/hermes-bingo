import React, { useEffect, useState } from 'react';
import BingoDataService from '../services/bingo.service';
import { useParams } from 'react-router-dom';

import './BingoSheet.css';

const BingoSheet = (props) => {
	const [bingoMatrix, setBingoMatrix] = useState();
	const { id } = useParams();
	const [bingo, setBingo] = useState({title: 'loading'});
	const createBingoMatrix = array => {
		const iterator = array.values();
		// Put the values of the array in the matrix through iterator.next()
		for (var i = 0;i < 5;i++){
			for (var j = 0;i < 5;i++){
				bingoMatrix[][] = array.
			}
		}
	}

	const loadBingo = (id) => {
		BingoDataService.get(id)
			.then(response => {
				setBingo(response.data);
				// TODO: call setBingoMatrix(createBingoMatrix(bingo.tiles) once the function is done	
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
	
	// TODO: map bingoMatrix into jsx
	// TODO: Put a listener on each tile to toggle that tile value in the db and set use state
	return <h1>{bingo.title}</h1>;	

}

export default BingoSheet;
