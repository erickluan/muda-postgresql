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

/* POST criando novo usuario. */
router.post('/', (req, res, next) => {
  let newUser = [];
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
    }
    // SQL Query > Insert Data
    client
      .query(
        'INSERT INTO usuario(nome, email, senha, mundoid) values($1, $2, $3, $4)',
        [data.nome, data.email, data.senha, data.mundoid], ( error, result ) => {
          if ( error ) {
            console.log(`Deu erro`);
            return res.status( 500 ).json( { message: error.message, detail: error.detail } )
          }
          console.log( 'Agora será que vai?' + result.rows[0] );
          return res.status( 200 ).json( result.rows[0] );
        }
    );
    done();
      // .then(user => {
      //   console.log(user.rows);
      //   newUser.push(user.rows[0]);
      //   done();
      // })
      // .catch(err => {
      //   done();
      //   console.log(err);
      // });
    // done();
    // client
    //   .query('SELECT usuarioid, nome, email FROM usuario;')
    //   .then(res => {
    //     res;
    //   })
    //   .catch();
  });
  // return res.status(200).json(newUser);
});
/* GET usuarios. */
router.get('/', function(req, res, next) {
  pool.query('SELECT usuarioid, nome, email FROM usuario', (err, response) => {
    if (err) {
      return next(err);
    }
    res.status(200).json(response.rows);
  });
});

/* PUT atualizando usuario. */
router.put('/:id', function(req, res, next) {
  const data = {
    nome: req.body.nome,
    email: req.body.email,
    id: req.params.id,
  };
  pool.query(
    'UPDATE usuario SET nome=$1, email=$2 WHERE usuarioid = $3',
    [data.nome, data.email, data.id],
    (err, response) => {
      if (err) {
        return next(err);
      }
      res.status(200).json(response.rows);
    }
  );
});

/* DELETE deletando usuario. */
router.delete('/:id', function(req, res, next) {
  const usarioid = req.params.id;
  pool.query(
    'DELETE FROM usuario WHERE usuarioid = $1',
    [usarioid],
    (err, response) => {
      if (err) {
        return next(err);
      }
      res.status(200).json(response.rows);
    }
  );
});

module.exports = router;
