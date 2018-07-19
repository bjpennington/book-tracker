// require in express and pool
const router = require('express').Router();
const pool = require('../modules/pool');

// BOOKS GET REQUEST
router.get('/', (req, res) => {
    let queryText = `SELECT "books"."id", "books"."title", "books"."author", "books"."image_url", "books"."publication_date", "books"."number_of_pages", "books"."favorite", "genres"."genre_name"
                    FROM "books"
                    JOIN "genres" ON "books"."genre_id" = "genres"."id";`;
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
router.post('/', (req, res) => {
    let bookToAdd = req.body;   
    let queryText = `INSERT INTO "books"
                    ("title", "author", "image_url", "publication_date", "number_of_pages", "genre_id")
                    VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(queryText, [bookToAdd.title, bookToAdd.author, bookToAdd.image_url, bookToAdd.publication_date, bookToAdd.number_of_pages, bookToAdd.genre_id])
        .then(results => {
            res.sendStatus(201);
        })
        .catch(errorFromPG => {
            console.log('/books POST error', errorFromPG);
            res.sendStatus(500);
        });
});

// BOOKS DELETE REQUEST
router.delete('/:id', (req, res) => {
    let bookToDelete = req.params.id; 
    let queryText = `DELETE FROM "books" WHERE "id" = $1;`;
    pool.query(queryText, [bookToDelete])
        .then(results => {
            res.sendStatus(200);
        })
        .catch(errorFromPG => {
            console.log('/genres DELETE error:', errorFromPG);
            res.sendStatus(500);
        });
});

// BOOKS PUT REQUEST

// export books router
module.exports = router;