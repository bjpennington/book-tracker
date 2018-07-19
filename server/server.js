const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('App is listening on port', PORT);
});