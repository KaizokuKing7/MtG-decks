const Card = require("../db/models").Card;
const cardqueries = require("../db/queries/queries.cards");
module.exports = {
    search(req,res,next){
        cardqueries.search(req.body,(err,cards)=>{
            if(err){
                res.render("static/home",{err})
            } else{
                res.render("static/home",{err, cards})
            }
        })
    }
}