#!/usr/bin/env node

const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/get', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    setTimeout(() => {res.end(JSON.stringify(req.query, null, 2)); console.log('send')}, 2000);
});


app.listen(7080);
