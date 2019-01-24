const express = require('express');
const path = require('path');

const app = new express();

const options = {
    dotfiles: 'ignore',
    etag: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    }
}

app.use(express.static(path.resolve(__dirname, 'public'), options));

app.use('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

app.listen("8080");
