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
router.post('/', (req, res) => {
    let newGenre = req.body;   
    let queryText = `INSERT INTO "genres" ("genre_name") VALUES ($1);`
    pool.query(queryText, [newGenre.genre_name])
        .then(results => {
            res.sendStatus(201);
        })
        .catch(errorFromPG => {
            console.log('/genres POST error', errorFromPG);
            res.sendStatus(500);
        });
});



// GENRES DELETE REQUEST

// GENRES PUT REQUEST

// export genres router
module.exports = router;