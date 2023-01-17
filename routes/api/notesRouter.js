const router = require("express").Router();
const { v4 } = require("uuid");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../../helpers/fsUtil");

router.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

router.post("/", (req, res) => {
  console.log(req.body);
  const newNote = {
    ...req.body,
    id: v4(),
  };
  readAndAppend(newNote, "./db/db.json");
  res.json(`Note Added`);
});

router.delete("/:note_id", (req, res) => {
  const noteId = req.params.note_id;
  readFromFile("./db/db.json")
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

module.exports = router;
