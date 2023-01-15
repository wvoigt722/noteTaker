const express = require("express");
const apiRouter = require("./api");
const notesRouter = require("./htmlRoutes");

const app = express.Router();

app.use("/api", apiRouter);
app.use("/notes", notesRouter);

module.exports = app;
