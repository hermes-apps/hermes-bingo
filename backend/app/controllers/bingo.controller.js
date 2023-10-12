const db = require("../models");

const Bingo = db.bingos;

// Create and Save a new Tutorial
exports.create = (req, res) => {
	// Check if the title is empty
	if(!req.body.title || !req.body.tiles || !req.body.code){
		res.status(400).send({message: 'Missing either Title/Tiles/Code.'});
		return;
	}
	// Create a Bingo
	const bingo = new Bingo({
		title: req.body.title,
		tiles: req.body.tiles,
		code: req.body.code
	});
	// Save the created Bingo to the database
	Bingo
	.save(bingo)
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			err.message || "Error saving the Bingo (No error msg)."
		});
});
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  	const id = req.params.id;

	Bingo.findById(id)
		.then(data => {
			if(!data)
				res.status(404).send({message: "Couldn't find Bingo: " + id})
			else res.send(data);
		})
		.catch(err => {
			res.status(500).send({"Error with Bingo: " + id});
		});
};

// Update a Tutorial by the id in the request
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

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
	const id = res.params.id;

	Bingo.findByIdAndRemove(id)
		.then(data => {
			if (!data) res.status(404).send({message: `Couldn't find Bingo: ${id}`});
			else res.send({message: `Deleted Bingo: ${id}`});
		})
		.catch(err => {res.status(500).send({message: err.message});});
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
	Bingo.deleteMany({})
		.then(data => {
			res.send({message: `${data.deletedCount} amount of Bingos deleted`});
		})
		.catch(err => {res.send({message: err.message});});
};
