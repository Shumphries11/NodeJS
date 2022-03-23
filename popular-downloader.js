let request = require('request-promise');
let path = require('path');
let fs = require('fs')

let downloadPath = path.join(__dirname, './downloads');

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if(err) console.log(err);
    
    

    JSON.parse(body).data.children.map(article => {
        if(path.extname(article.data.url) === '.jpg' || path.extname(article.data.url) === '.gif' || path.extname(article.data.url) === '.png' ) {
            request(article.data.url).pipe(fs.createWriteStream(`./downloads/${article.data.id}${path.extname(article.data.url)}`));
        }
    })
    
});