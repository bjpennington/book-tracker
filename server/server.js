// require in express and bodyParser
const express = require('express');
const bodyParser = require('body-parser');

// require in routers
const booksRouter = require('./routers/books.router');
const genresRouter = require('./routers/genres.router');

// basic app setup
const app = express();
const PORT = process.env.PORT || 4000;

// allow for use of body parser
app.use(bodyParser.json());

// serve up static files
app.use(express.static('server/public'));

// send route requests to appropriate routers
app.use('/books', booksRouter);
app.use('/genres', genresRouter);

// set app to listen for requests
app.listen(PORT, () => {
    console.log('App is listening on port', PORT);
});