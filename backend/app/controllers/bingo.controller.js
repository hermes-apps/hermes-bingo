const db = require("../models");
const fs = require("fs");

const Bingo = db.bingos;

var sentenceArray; 
fs.readFile('./app/config/sentenceList.txt', 'utf8', (err, data) => {
	if (err) console.log(err);
	//split the .txt by newlines and remove any empty items
	sentenceArray = data.split('\n').filter(e=>e);
});

// Create and Save a new Tutorial
exports.create = (req, res) => {
	// Check if the title is empty
	if(!req.body.title){
		res.status(500).send({message: 'Missing title.'});
		return;
	}
	function randomNoRepeats(array) {
		var copy = array.slice(0);
		return function() {
			if (copy.length < 1) { copy = array.slice(0); }
			var index = Math.floor(Math.random() * copy.length);
			var item = copy[index];
			copy.splice(index, 1);
			return item;
		};
	}
	var getRandomSentence = randomNoRepeats(sentenceArray);
	var tiles = new Array();
	for (let i = 0;i < 25;i++){
		tiles[i] = {
			sentence: getRandomSentence(),
			status: 0
	}}
	// Create a Bingo
	const bingo = new Bingo({
		title: req.body.title,
		tiles: tiles
	});
	// Save the created Bingo to the database
	bingo
	.save(bingo)
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message: err.message || "Error saving the Bingo (No error msg)."
		});
});
};

// Retrieve all  from the database.
exports.findAll = (req, res) => {
	Bingo.find()
		.then(data => {
			if(!data)
				res.status(404).send({message: "Couldn't find any Bingo Sheets"});
			else res.send(data);
		})
		.catch(err => {
			res.status(500).send({message: err.message});
		});
};

// Find a single  with an id
exports.findOne = (req, res) => {
  	const id = req.params.id;

	Bingo.findById(id)
		.then(data => {
			if(!data)
				res.status(404).send({message: "Couldn't find Bingo: " + id})
			else res.send(data);
		})
		.catch(err => {
			res.status(500).send(err);
		});
};

// Update a  by the id in the request
exports.update = (req, res) => {
	if (!req.body){
		 res.status(400).send({
			message: "Cannot update with an empty object."
		});
		return;
	}

	const id = req.params.id;

	Bingo.findByIdAndUpdate(id, req.body)
		.then(data => {
			console.log(`Updated status of ${req.body.title}.`);
			if (!data) res.status(404).send({message: `Couldn't find Bingo: ${id}`});
			else res.send({message: `Succesfully updated Bingo: ${id}`});
		})
		.catch(err => {
			console.log(err.message);
			res.status(500).send({message: err.message});});
};

// Delete  with the specified id in the request
exports.delete = (req, res) => {
	if (req.body.keyword === "ok"){
	const id = res.params.id;

	Bingo.findByIdAndRemove(id)
		.then(data => {
			if (!data) res.status(404).send({message: `Couldn't find Bingo: ${id}`});
			else res.send({message: `Deleted Bingo: ${id}`});
		})
		.catch(err => {res.status(500).send({message: err.message});});
	}
};

// Delete all  from the Bingo database.
exports.deleteAll = (req, res) => {
	if (req.params.keyword === "ok"){
	Bingo.deleteMany({})
		.then(data => {
			res.send({message: `${data.deletedCount} amount of Bingos deleted`});
		})
		.catch(err => {res.send({message: err.message});});
	}
};
