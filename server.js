const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 9000;

const server = express();

server.use(cors());

server.use( express.static( path.resolve(__dirname, 'client', 'dist') ));

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
    res.send(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});


server.listen(PORT, () => {
    console.log('y\'all are listening on port '+PORT+' for garbage');
});

