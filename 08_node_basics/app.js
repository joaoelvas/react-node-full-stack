const os = require('os');
const fs = require('fs');

const userdata = require('./user.js')

console.log(userdata)

let user = os.userInfo();
let date = new Date();

let message = `User "${user.username}" started APP at ${date}`;

fs.appendFile("hello.txt",message, (err) => {
    if(err) {
        console.log('error');
    }
})
