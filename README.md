# hermes-bingo
Basic Bingo web app originally created for LAN parties.

Set up steps:
- Clone repository
- Run `npm install` in the root folder
- Crate a `.env` file in the root folder of both frontend and backend folders, with the values `REACT_APP_IP=yourip` and `IP=yourip` respectively
- Install MongoDB
- Create a sentenceList.txt file with the sentences that might appear in your bingo sheet at `/backend/config/sentenceList.txt`
- Go to `/backend/` and run `node server.js`
- Go to `/frontend/` and run `npm start`
- The server is up! Access the web app through: `http://yourip:3000/controlpanel` and create your first sheets


v1.0 features:

- Have one admin page to generate Bingo sheets with an assigned title (id and sentences in the tiles are generated in the back-end)

- Have the backend read a .txt file and convert it into an array for the possible sentences to appear in a Bingo sheet.

- Generated sheets get a unique URL(probably the MongoDB id) that are shared to the participants of the Bingo game.

- Have a MongoDB Document to store every session of a Bingo Sheet.

- Have a basic UI for Bingo sheets where you can click on a Bingo tile to change its state (visually and in the DB).
