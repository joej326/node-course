console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let user = os.userInfo().username;

fs.appendFileSync('greetings.txt', `Hello ${user}! You are ${notes.age}`);