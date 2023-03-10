const express = require("express");
const path = require("path");
const { clog } = require("./middleware/clog");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(clog);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.static("public"));

//homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
//notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.listen(PORT, () => console.log("Now listening"));
