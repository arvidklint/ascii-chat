const express = require('express');
const path = require('path');

const app = new express();

const root = path.resolve(__dirname, '../public');

app.use(express.static(root));

app.use('*', function(req, res) {
    res.sendFile(
        'index.html',
        { root }
    );
});

app.listen("8080");
