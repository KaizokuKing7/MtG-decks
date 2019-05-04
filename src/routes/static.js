const express = require("express");
const router = express.Router();
const Card = require("../db/models").Card;
const staticController = require('../controllers/staticController');


router.get("/", staticController.home );
router.get("/index", staticController.index);
//router.get("/signOut", staticController.signOut)
//router.get("/signIn", staticController.signIn);
//router.get("/signUp", staticController.signUp);
module.exports = router;