const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models/");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
const IP = process.env.IP;
// TODO: Debug why I get a CORS Failed
var corsOptions = {
	origin: `http://${IP}:3000`
}

app.use(cors(corsOptions));
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
// Add aditional API routes
require("./app/routes/bingo.routes.js")(app);
// CORS pre-flight (for the initial OPTIONS request)
app.options('*', cors());
// listen for requests
app.listen(PORT, () => {
	console.log(`Server listening on ${IP}:${PORT}.`);
});
