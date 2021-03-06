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


// POST criando uma novo has_habito

router.post('/', (req, res, next) => {
    const data = {
      usuarioid: req.body.usuarioid,
      habitoid: req.body.habitoid
    };
    pool.connect((err, client, done) => {
        if (err) {
          console.log(err);
        }
        client
          .query(
            'INSERT INTO usuario_has_habito(usuarioid, habitoid) values($1, $2)',
            [data.usuarioid, data.habitoid], ( error, result ) => {
              if ( error ) {
                console.log();
                return res.status( 500 ).json(error)
              }
              return res.status( 200 ).json( result);
            }
        );
      });
    });

    router.get('/', function(req, res, next) {
        pool.query('SELECT * FROM usuario_has_habito', (err, response) => {
          if (err) {
            return next(err);
          }
          res.status(200).json(response.rows);
        });
      });

module.exports = router;