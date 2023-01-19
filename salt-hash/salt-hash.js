const bcrypt = require('bcryptjs');

// Password variable
// Need to grab the user's password before salting
let password;

// Salt
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    })
});

// Hash
let hash = bcrypt.hash(password);

//All this does is print whats in the file
const fs = require('fs')
const csv = require('fast-csv');
const data = []

fs.createReadStream('users1.csv')
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', row => data.push(row))
    .on('end', () => console.log(data));