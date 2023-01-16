const router = require("express").Router();
const notesRoute = require("./notesRouter");

router.use("/notes", notesRoute);

module.exports = router;
