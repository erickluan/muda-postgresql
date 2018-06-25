const express = require('express');
const router = express.Router();
const pg = require('pg');

const connectionstring = 'postgres://postgres:postgres@localhost:5432/muda';

const config = {
    user: 'postgres',
    password: 'pinkfloyd5',
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
      pontos: req.body.pontos,
      arquivo: req.body.arquivo,
      indicegeral: req.body.indicegeral 
    };
    pool.connect((err, client, done) => {
        if (err) {
          console.log(err);
        }
        client
          .query(
            'INSERT INTO muda(usuarioid, mudaid,nome, pontos, arquivo, indicegeral) values($1, $2, $3, $4, $5,$6)',
            [data.usuarioid,data.mudaid, data.nome, data.pontos, data.arquivo, data.indicegeral], ( error, result ) => {
              if ( error ) {
                console.log(`Deu erro`);
                return res.status( 500 ).json( { message: error.message, detail: error.detail } )
              }
              console.log( 'Agora será que vai?' + result.rows[0] );
              return res.status( 200 ).json( result.rows[0] );
            }
        );
        done();
      });
    });
    // GET muda 
    router.get('/:mudaid', function(req, res, next) {
        const data = {
            usuarioid: req.body.usuarioid,
            mudaid: req.params.mudaid,
            nome: req.body.nome,
            pontos: req.body.pontos,
            arquivo: req.body.arquivo,
            indicegeral: req.body.indicegeral 
            };
        pool.query('SELECT * FROM muda where mudaid = $1',[data.mudaid], (err, response) => {
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



