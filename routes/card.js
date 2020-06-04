const express = require("express");
const router = express.Router();
const Card = require("../db/models").Card;
const cardController = require('../controllers/cardController');

router.post("/cards/search", cardController.search);
module.exports = router;