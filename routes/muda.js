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

// POST criando uma nova muda

  router.post('/', (req, res, next) => {
    let newMuda = [];
    const data = {
      usuarioid: req.body.usuarioid,
      mudaid: req.body.mudaid,
      nome: req.body.nome,
      arquivo: req.body.arquivo,
    };
    pool.connect((err, client, done) => {
        if (err) {
          console.log(err);
        }
        client
          .query(
            'INSERT INTO muda(usuarioid, mudaid, nome, arquivo) values($1, $2, $3, $4)',
            [data.usuarioid, data.mudaid, data.nome, data.arquivo], ( error, result ) => {
              if ( error ) {
                if (error.code == 23503) {
                  return res.status(500).json({ message: 'Coloque um usuaário existente!'})
                }
                console.log(`Deu erro`);
                return res.status( 500 ).json( error )
              }
              console.log( 'Agora será que vai?' + result.rows[0] );
              return res.status( 200 ).json( result.rows[0] );
            }
        );
        done();
      });
    });
    // GET muda 
    router.get('/:usuarioid', function(req, res, next) {
        const data = {
            usuarioid: req.params.usuarioid,
            nome: req.body.nome,
            pontos: req.body.pontos,
            arquivo: req.body.arquivo,
            indicegeral: req.body.indicegeral 
            };
        pool.query('SELECT * FROM muda where usuarioid = $1',[data.usuarioid], (err, response) => {
          if (err) {
            return next(err);
          }
          res.status(200).json(response.rows);
        });
      });

    // GET media mudas 
    router.get('/', function(req, res, next) {
        pool.query('SELECT AVG (pontos) FROM muda', (err, response) => {
          if (err) {
            return next(err);
          }
          res.status(200).json(response.rows);
        });
      });

    // UPDATE muda   
    router.put('/:mudaid', function(req, res, next) {
        const data = {
        usuarioid: req.body.usuarioid,
        mudaid: req.params.mudaid,
        nome: req.body.nome,
        pontos: req.body.pontos,
        arquivo: req.body.arquivo,
        indicegeral: req.body.indicegeral 
        };
        pool.query(
          'UPDATE muda SET pontos=$1 WHERE mudaid = $2',
          [data.pontos, data.mudaid],
          (err, response) => {
            if (err) {
              return next(err);
            }
            res.status(200).json(response.rows);
          }
        );
      });



module.exports = router;



