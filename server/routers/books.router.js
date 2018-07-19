// require in express and pool
const router = require('express').Router();
const pool = require('../modules/pool');

// BOOKS GET REQUEST
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "books";`;
    pool.query(queryText)
        .then(results => {  
            res.send(results.rows);
        })
        .catch(errorFromPG => {
            console.log('/books GET error:', errorFromPG);  
            res.sendStatus(500); 
        });
});

// BOOKS POST REQUEST

// BOOKS DELETE REQUEST

// BOOKS PUT REQUEST

// export books router
module.exports = router;