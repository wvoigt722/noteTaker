const api = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readFromFile } = require("../helpers/fsUtil");

api.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

module.exports = api;
