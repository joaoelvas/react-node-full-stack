const bcrypt = require('bcrypt');
const { MD5 } = require('crypto-js');
const jwt = require('jsonwebtoken');

// bcrypt.genSalt(10, (err,salt) => {
//     if(err) return next(err);

//     bcrypt.hash('password123', salt, (err,hash) => {
//         if(err) return next();
//         console.log(hash)
//     })
// });

// const secret = 'mysecretpass';
// const secretSalt = 'sdfsfdssfsfdsfdsfsdsdf'

// const user = {
//     id: 1,
//     token: MD5('SDFSFSDFSDF').toString() + secretSalt
// }

// const receivedToken = 'bc18c7df1f4df074829b453f0db4757dsdfsfdssfsfdsfdsfsdsdf'

// if(receivedToken === user.token) {
//     console.log('move')
// }

// console.log(user);

const id = '1001';
const secret = 'supersecret';

const receivedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMQ.L4EkyLYRVhLrsvm8tHazWur40dYbGBgzCkBXG7DRDSQ';

const token = jwt.sign(id,secret);
const decodingToken = jwt.verify(receivedToken,secret)

console.log(token)
console.log(decodingToken)