const Card = require("../db/models").Card;
module.exports = {
    home(req, res, next) {
            res.render("static/home");
    },
    index(req, res, next) {
        Card.findAll().then((cards) => {
            res.render("static/index", { err:null,cards });
        })
    }
}