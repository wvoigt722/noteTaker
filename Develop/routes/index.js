const router = require("express").Router();
const apiRoutes = require("./api");

const app = express();

router.use("/api", apiRoutes);

module.exports = router;
