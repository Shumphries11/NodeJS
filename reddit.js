let request = require('request-promise');
let path = require('path');
let fs = require('fs')

let articlePath = path.join(__dirname, './popular-articles.json');

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if(err) console.log(err);

    JSON.parse(body).data.children.forEach(child => {
        console.log(child.data.title);
    });

    fs.writeFile(articlePath, res.body, err => {
        if(err) console.log(err);
    });
    
});