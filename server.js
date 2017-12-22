const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const server = express();

server.use(cors());


server.get('/api/get-stuff', (req, res) => {
    const stuff = {
        name: 'Stuffins',
        message: 'Here is some stuff'
    };

    res.send(stuff);
});

server.get('/api/better-stuff', (req, res) => {
    const betterStuff = {
        name: 'Better Stuff',
        message: 'This is the real deal'
    };

    res.send(betterStuff);
});


server.get('*', (req, res) => {
    res.send('<h1>Ya made it here!</h1>');
});


server.listen(PORT, () => {
    console.log('y\'all are listening on port '+PORT+' for garbage');
});

