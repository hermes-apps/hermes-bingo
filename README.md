# hermes-bingo
Basic Bingo web app originally created for LAN parties.

v1.0.0 features:

- [ ] Have one admin page (with an admin password) to generate Bingo sheets with an assigned title (id and sentences in the tiles are generated in the back-end)

- [ ] Have the backend read a .txt file and convert it into a MongoDB Document for the possible sentences to appear in a Bingo sheet.

- [ ] Generated sheets get a unique URL(probably the MongoDB id) that are shared to the participants of the Bingo game.

- [ ] Have a MongoDB Document to store every session of a Bingo Sheet.

- [ ] Have a basic UI for Bingo sheets where you can click on a Bingo tile to change its state (visually and in the DB).
