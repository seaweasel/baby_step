const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, resp) => {
    resp.send('HAVE BIRTHDAY CAKE!');
});

app.get('/another_one', (req, resp) =>{
    resp.send('YOU LOYAL! YOU A GENIUS!');
});

module.exports = app;