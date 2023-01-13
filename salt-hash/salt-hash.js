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
let hash = bcrypt.hash(password)