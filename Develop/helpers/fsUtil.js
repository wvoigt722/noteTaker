const fs = require("fs");
const util = require("util");

const readFromFIle = util.promisify(fs.readFile);

module.exports = { readFromFIle };
