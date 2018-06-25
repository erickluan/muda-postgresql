const express = require('express');
const router = express.Router();
const pg = require('pg');

const config = {
    user: 'postgres',
    password: 'postgres',
    host: '127.0.0.1',
    port: '5432',
    database: 'muda',
  };

const pool = new pg.Pool(config);


// POST criando uma novo desafio

router.post('/', (req, res, next) => {
    const data = {
      desafioid: req.body.desafioid,
      titulo: req.body.titulo,
      habitoid: req.body.habitoid,
      emblemaid: req.body.emblemaid 
    };
    pool.connect((err, client, done) => {
        if (err) {
          console.log(err);
        }
        client
          .query(
            'INSERT INTO desafio(desafioid, titulo, habitoid, emblemaid) values($1, $2, $3, $4)',
            [data.desafioid, data.titulo, data.habitoid, data.emblemaid], ( error, result ) => {
              if ( error ) {
                console.log();
                return res.status( 500 ).json(error)
              }
              return res.status( 200 ).json( result);
            }
        );
      });
    });

    router.get('/:desafioid', function(req, res, next) {
        const data = {
            desafioid: req.params.desafioid,
            titulo: req.body.titulo,
            habitoid: req.body.habitoid,
            emblemaid: req.body.emblemaid 
          };
        pool.query('SELECT * FROM desafio where desafioid = $1',[data.desafioid], (err, response) => {
          if (err) {
            return next(err);
          }
          res.status(200).json(response.rows);
        });
      });

      router.get('/', function(req, res, next) {
        pool.query('SELECT * FROM desafio', (err, response) => {
          if (err) {
            return next(err);
          }
          res.status(200).json(response.rows);
        });
      });

module.exports = router;