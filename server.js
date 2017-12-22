const express = require('express');
const PORT = process.env.PORT || 9000;

const server = express();


server.get('*', (req, res) => {
    res.send('<h1>Ya made it here!</h1>');
});


server.listen(PORT, () => {
    console.log('y\'all are listening on port '+PORT+' for garbage');
});

