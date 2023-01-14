const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

router.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
