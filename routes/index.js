const express = require('express');
const router = express.Router();
const pg = require('pg');
const connectionstring = 'postgres://postgres:postgres@localhost:5432/muda';
const config = {
  user: 'postgres',
  password: 'postgres',
  host: '127.0.0.1',
  port: '5432',
  database: 'muda',
};
const pool = new pg.Pool(config);
const client = new pg.Client(config);

router.post('/', (req, res, next) => {
  const data = {
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    mundoid: 1,
  };
  // Get a Postgres client from the connection pool
  pool.connect((err, client, done) => {
    // Handle connection errors
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err });
    }
    // SQL Query > Insert Data
    client
      .query(
        'INSERT INTO usuario(nome, email, senha, mundoid) values($1, $2, $3, $4)',
        [data.nome, data.email, data.senha, data.mundoid]
      )
      .then(user => {
        console.log(user.rows);
        done();
        return res.status(200).json(user.rows[0]);
      })
      .catch(err => {
        done();
        console.log(err);
      });
    // done();
    // client
    //   .query('SELECT usuarioid, nome, email FROM usuario;')
    //   .then(res => {
    //     res;
    //   })
    //   .catch();
  });
});
/* GET home page. */
router.get( '/', function ( req, res, next ) {
  pool.query('SELECT usuarioid, nome, email FROM usuario', (err, response) => {
    if (err) {
      return next(err);
    }
    res.status(200).json(response.rows);
  });
});

router.put( '/:id', function ( req, res, next ) {
  const data = {
    nome: req.body.nome,
    email: req.body.email,
    id: req.params.id
  }
  pool.query('UPDATE usuario SET nome=$1, email=$2 WHERE usuarioid = $3', [data.nome, data.email, data.id], (err, response) => {
    if (err) {
      return next(err);
    }
    res.status(200).json(response.rows);
  });
} );

router.delete( '/:id', function ( req, res, next ) {
  const usarioid = req.params.id;
  pool.query('DELETE FROM usuario WHERE usuarioid = $1', [usarioid], (err, response) => {
    if (err) {
      return next(err);
    }
    res.status(200).json(response.rows);
  });
});
module.exports = router;
