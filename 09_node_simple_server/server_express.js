const express = require('express');
const app = express();
const querystring = require('querystring');
const bodyParser = require('body-parser');
const fs = require('fs');

const urlencodeParser = bodyParser.urlencoded({extended: false});
const jsonParser = bodyParser.json();

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/', (req, res, next) => {
    console.log('Request on ' + req.url);
    res.cookie('cookiename', 'cookievalue');
    next();
})

app.get('/', (req,res) => {
    res.send(
        `<html>
            <head>
                <link type="text/css" rel="stylesheet" href="/css/styles.css" />
            </head>
            <body>
                <h1>Hello dude</h1>
            </body>
        </html>`
    );
})

app.get('/user', (req, res) => {
    let HTML = fs.readFileSync(`${__dirname}/querystring.html`);

    res.send(`${HTML}`);
})

app.post('/enteruser', urlencodeParser, (req,res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    console.log(firstname + " " + lastname);
    res.sendStatus(200);
})

app.get('/user_post', (req, res) => {
    let HTML = fs.readFileSync(`${__dirname}/json_post.html`);

    res.send(`${HTML}`);
})

app.post('/enteruser_post', jsonParser, (req,res) => {
    console.log(req.body);
    res.sendStatus(200);
})

app.get('/api/user', (req, res) => {
    res.send({
        name: 'Francis',
        cars: ['Ford', 'Nissan']
    })
})

app.get('/api/:user/:id', (req, res) => {
    let username = req.params.user;
    let id = req.params.id;
    res.send(`
        <html>
            <body>
                The user id is ${id} and username is ${username}
            </body>
        </html>
    `
    )
})

app.get('/api/car', (req, res) => {

    let brand = req.query.brand;
    let year = req.query.year;

    res.send({
        brand,
        year
    })
})

const port = process.env.PORT || 8080;

app.listen(port);