import { useEffect, useState } from 'react';
import BingoDataService from '../services/bingo.service';

import './ControlPanel.css'
import Button from '../components/ui-elements/Button';
import BingoSheetList from '../components/BingoSheetList';

const ControlPanel = (props) => {
	const [bingoList, setBingoList] = useState();
	const [keyword, setKeyword] = useState();
	const [newBingoName, setNewBingoName] = useState();

	// Run this on load
	useEffect(() => {
		listBingos();
	}, []); // empty dependencies array
	const createBingo = () => {
		BingoDataService.create({title: newBingoName})
			.then(response => {
				console.log(response.data);
				listBingos();
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
	const listBingos = () => {
		BingoDataService.getAll()
			.then(response => {
				console.log(response.data);
				setBingoList(response.data);
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

	const deleteBingos = ()  => {
		BingoDataService.deleteAll(keyword)
			.then(response => {
				console.log(response.data);
				listBingos();
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
	
	return <div style={{height: '100%', textAlign: 'center'}}>
		<br /><div style={{fontWeight: 'bold', fontSize: '24px'}}> Control Panel </div><br />
		<input value={newBingoName} onChange={e => setNewBingoName(e.target.value)}/> <Button onClick={createBingo}>Create Bingo</Button><br />
		<input value={keyword} onChange={e => setKeyword(e.target.value)}/> <Button onClick={deleteBingos}>Delete Bingos</Button><br />
		<br />
			<div className="BingoSheetList"><BingoSheetList bingoSheets={bingoList}/></div>
	</div>;
}

export default ControlPanel;
