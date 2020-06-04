const request = require("request");
let cards = [];
const Card = require("../db/models").Card;
var options = {
    method: 'GET',
    url: 'http://api.tcgplayer.com/v1.9.0/catalog/products',
    qs: { categoryId: '1', groupId: '2418', productTypes: 'Cards',offset: "293",limit: "50",},
    headers:
    {
        'cache-control': 'no-cache',
        Connection: 'keep-alive',
        'accept-encoding': 'gzip, deflate',
        Host: 'api.tcgplayer.com',
        'Postman-Token': 'e771315b-abd8-4e67-899e-c0a11a825b83,88c2c55b-ed10-4150-a831-b7b015cdc927',
        'Cache-Control': 'no-cache',
        'User-Agent': 'PostmanRuntime/7.11.0',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer eGeCYIKDHzTArvyc7UJvTU9fy0eRDxUgJupSmkusKWUjNj4bRh7XKSfCneg3EWOxlzXqyChV0BYsEIi5CShqgKgD6RrF2_BAW9zMCSI-6I8PaJ6K9647T76_2a7GPfQx5ccdcUnLvT-0MdqKiTOWZEsJwBBzLKGEwAg4MQtL55YMhS0HAkl6yJhN2weKYmU87luG511ZlsAQLXPYlcWgFmHyrYkTrQcXXG1CC8jrVRkXLlEZqASvS3m9-8Sbz49Do7I8jq0Nglw6eSdITVLcST40m-qq4zsN_4AputAR4S6MFYAIw5BpuqLp4OsCma___DgkDw'
    }
};
    request(options,  (error, response, body) => {
        
    if (error) throw new Error(error);
        JSON.parse(body).results.forEach((card) => {
            Card.create({
                name: card.productName,
                cardId: card.productId,
                image: card.image
            })

        })
console.log(JSON.parse(body).totalItems);
});
