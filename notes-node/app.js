console.log('starting app.js');

// to debug in chrome: 
// in CLI type nodemon --inspect-brk {filename}.
// then in chrome go to chrome://inspect
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let user = os.userInfo().username;

fs.appendFileSync('greetings.txt', `Hello ${user}! You are ${notes.age}`);