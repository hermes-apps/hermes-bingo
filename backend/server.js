const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models/");

const app = express();
const PORT = process.env.PORT || 8080;
// TODO: Debug why I get a CORS Failed
var corsOptions = {
	origin: "http://localhost:8081/"
}

// Temporarily using no corsOptions for troubleshooting
app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
db.mongoose
	.connect(db.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log("Connected to the database.");
	})
	.catch(err => {
		console.log(`Connection error: ${err}`);
		process.exit();
	});
// simple route
app.get("/", (req,res) => {
	res.json({message: "Welcome to the Hermes Bingo application."});
})
// Add aditional API routes
require("./app/routes/bingo.routes.js")(app);
// listen for requests
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});
