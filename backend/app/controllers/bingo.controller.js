const db = require("../models");
const fs = require("fs");

const Bingo = db.bingos;

// TODO: Save into a sentenceArray the sentences within the sentenceList.txt (sentence: String)
var sentenceArray; 
fs.readFile('../config/sentenceList.txt', 'utf8', (err, data) => {
	if (err) console.log(err);
	sentenceArray = data.split('\n');
});

// Create and Save a new Tutorial
exports.create = (req, res) => {
	// Check if the title is empty
	if(!req.body.title){
		res.status(500).send({message: 'Missing title.'});
		return;
	}
	// TODO: Take sentenceArray and generate an array of 25 tile objects (sentence: String, status: Boolean) and save it to the tiles property of the new Bingo
	function randomNoRepeats(array) {
		var copy = array.split(0);
		return function() {
			if (copy.length < 1) { copy = array.slice(0); }
			var index = Math.floor(Math.random() * copy.length);
			var item = copy[index];
			copy.splice(index, 1);
			return item;
		};
	}
	var getRandomSentence = randomNoRepeats(sentenceArray);
	var tiles;
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
	Bingo
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
			res.status(500).send("Error with Bingo: " + id);
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

	Bingo.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
		.then(data => {
			if (!data) res.status(404).send({message: `Couldn't find Bingo: ${id}`});
			else res.send({nmessage: `Succesfully updated Bingo: ${id}`});
		})
		.catch(err => {res.status(500).send({message: err.message});});
};

// Delete  with the specified id in the request
exports.delete = (req, res) => {
	const id = res.params.id;

	Bingo.findByIdAndRemove(id)
		.then(data => {
			if (!data) res.status(404).send({message: `Couldn't find Bingo: ${id}`});
			else res.send({message: `Deleted Bingo: ${id}`});
		})
		.catch(err => {res.status(500).send({message: err.message});});
};

// Delete all  from the Bingo database.
exports.deleteAll = (req, res) => {
	Bingo.deleteMany({})
		.then(data => {
			res.send({message: `${data.deletedCount} amount of Bingos deleted`});
		})
		.catch(err => {res.send({message: err.message});});
};
