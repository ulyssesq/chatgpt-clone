const express = require("express");
const promptController = require("../controllers/prompt-controller");
const routes = express.Router();

routes.post("/prompt", promptController.sendText);

module.exports = routes;