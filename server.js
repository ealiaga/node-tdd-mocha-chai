const express = require('express');
const got = require('got');

const { SbifService } = require('./services');

const app = express();
const sbifService = new SbifService({ got });

app.get('/', sbifService.getBanks);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});