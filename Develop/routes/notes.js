const api = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../helpers/fsUtil");

api.get("/", (req, res) => {
  readFromFile("./db/noteDb.json").then((data) => res.json(JSON.parse(data)));
});

api.post("/", (req, res) => {
  console.log(req.body);
  readAndAppend(req.body, "./db/noteDB.json");
  res.json(`Diagnostic information added 🔧`);
});

api.delete("/:note_id", (req, res) => {
  const noteId = req.params.note_id;
  readFromFile("./db/noteDb.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all tips except the one with the ID provided in the URL
      const result = json.filter((note) => note.note_id !== noteId);

      // Save that array to the filesystem
      writeToFile("./db/db.json", result);

      // Respond to the DELETE request
      res.json(`Item ${noteId} has been deleted 🗑️`);
    });
});

module.exports = api;
