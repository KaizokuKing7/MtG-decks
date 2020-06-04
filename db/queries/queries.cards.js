const Card = require("../models").Card;
const request = require("request");

module.exports = {
    search(reqbody, callback) {
        let searchfilters = [
            {
                "name": "SetName",
                "values": ["War of the Spark"]
            }
        ]
        if (!!reqbody.name) {
            searchfilters.push({
                "name": "ProductName",
                "values": [reqbody.name]
            })
        }if (!!reqbody.rules) {
            searchfilters.push({
                "name": "OracleText",
                "values": [reqbody.rules]
            })
            
        }
        if (reqbody.rarity && reqbody.rarity.constructor === Array) {
            searchfilters.push({
                "name": "Rarity",
                "values": reqbody.rarity
            })
        }else if (reqbody.rarity && reqbody.rarity.constructor !== Array){
            searchfilters.push({
                "name": "Rarity",
                "values": [reqbody.rarity]
            })
        }if (reqbody.type && reqbody.type.constructor === Array) {
            searchfilters.push({
                "name": "RequiredTypeCb",
                "values": reqbody.type
            })
        }else if (reqbody.type && reqbody.type.constructor !== Array){
            searchfilters.push({
                "name": "RequiredTypeCb",
                "values": [reqbody.type]
            })
        }if (!!reqbody.Subtype) {
            searchfilters.push({
                "name": "SubType",
                "values": [reqbody.Subtype]
            })
        }
        if (reqbody.color && reqbody.color.constructor === Array) {
            searchfilters.push({
                "name": "Color",
                "values": reqbody.color
            })
        } else if (reqbody.color && reqbody.color.constructor !== Array){
            searchfilters.push({
                "name": "Color",
                "values": [reqbody.color]
            })
        }
        var options = {
            method: 'POST',
            url: 'http://api.tcgplayer.com/v1.9.0/catalog/categories/1/search',
            headers:
            {
                'Postman-Token': 'd3339a6b-708f-4148-8348-09a65ae1beb9',
                'cache-control': 'no-cache',
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer eGeCYIKDHzTArvyc7UJvTU9fy0eRDxUgJupSmkusKWUjNj4bRh7XKSfCneg3EWOxlzXqyChV0BYsEIi5CShqgKgD6RrF2_BAW9zMCSI-6I8PaJ6K9647T76_2a7GPfQx5ccdcUnLvT-0MdqKiTOWZEsJwBBzLKGEwAg4MQtL55YMhS0HAkl6yJhN2weKYmU87luG511ZlsAQLXPYlcWgFmHyrYkTrQcXXG1CC8jrVRkXLlEZqASvS3m9-8Sbz49Do7I8jq0Nglw6eSdITVLcST40m-qq4zsN_4AputAR4S6MFYAIw5BpuqLp4OsCma___DgkDw'
            },
            body:
            {
                sort: 'name',
                limit: 100,
                offset: 0,
                filters: searchfilters
            },
            json: true
        };

        console.log(options.body.filters)
        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            let cards = [];
            if(body.totalItems == 0){
                callback("No cards found");
            }
            for (let i = 0; i < body.totalItems; i++) {
                console.log("ayy")
                Card.findOne({
                    where: {
                        cardId: body.results[i]
                    }
                }).then((card) => {
                    cards.push(card);
                    if (cards.length == body.totalItems) {
                        callback(null, cards);
                    }
                })

            }
        });
    }
}