// require in express and pool
const router = require('express').Router();
const pool = require('../modules/pool');

// GENRES GET REQUEST
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "genres";`;
    pool.query(queryText)
        .then(results => {  
            res.send(results.rows);
        })
        .catch(errorFromPG => {
            console.log('/genres GET error:', errorFromPG);  
            res.sendStatus(500); 
        });
});

// GENRES POST REQUEST

// GENRES DELETE REQUEST

// GENRES PUT REQUEST

// export genres router
module.exports = router;