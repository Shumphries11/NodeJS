let path = require('path');
let fs = require('fs');

let chirpPath = path.join(__dirname, '../chirps.json');

fs.readFile(chirpPath, {
    encoding: "utf-8"
}, (err, data) => {

    let chirp = JSON.parse(data);
    
    chirp.forEach(chirp => {
        console.log(chirp.username);
        console.log(chirp.message);
    });

})