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


// POST criando uma novo emblema

router.post('/', (req, res, next) => {
    const data = {
      emblemaid: req.body.emblemaid,
      arquivo: req.body.arquivo,
      nivel: req.body.nivel,
      pontuacao: req.body.pontuacao,
      categoria: req.body.categoria 
    };
    pool.connect((err, client, done) => {
        if (err) {
          console.log(err);
        }
        client
          .query(
            'INSERT INTO emblema(emblemaid, arquivo, nivel, pontuacao, categoria) values($1, $2, $3, $4, $5)',
            [data.emblemaid, data.arquivo, data.nivel, data.pontuacao, data.categoria], ( error, result ) => {
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
        pool.query('SELECT * FROM emblema', (err, response) => {
          if (err) {
            return next(err);
          }
          res.status(200).json(response.rows);
        });
      });

module.exports = router;