const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    console.log("Received-request on: ", req.url);
    res.send('Hey, I am root-API');
});

app.get('/say-hello', (req, res) => {
    console.log("Received-request on: ", req.url);
    res.send('hello!!');
});

app.listen(port, () => {
    console.log('Server is running on port', port);
});