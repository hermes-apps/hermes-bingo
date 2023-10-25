module.exports = app => {
	const bingosheets = require("../controllers/bingo.controller.js");
	var router = require("express").Router(); 

	// Create a new Bingo
	router.post("/", bingosheets.create);
	// Retreive all
	router.get("/", bingosheets.findAll);
	// Retrieve by id
	router.get("/:id", bingosheets.findOne);
	// Update by id
	router.get("/:id", bingosheets.update);
	// Delete by id
	router.delete("/:id", bingosheets.delete);
	// Delete all
	router.delete("/all/:keyword", bingosheets.deleteAll);

	app.use('/api/bingosheets', router);
}
