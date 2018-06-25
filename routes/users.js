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
    client.query(
      'INSERT INTO usuario(nome, email, senha, mundoid) values($1, $2, $3, $4)',
      [data.nome, data.email, data.senha, data.mundoid],
      (error, result) => {
        if (error) {
          return res.status(500).json(error);
        }
      }
    );
    done();
    client.query(
      'SELECT nome, email FROM usuario WHERE email=$1',
      [data.email],
      (error, result) => {
        if (error) {
          return res.status(500).json(error);
        }
        return res.status(200).json({
          message: 'Usuario criado com sucesso',
          usurio: {
            nome: result.rows[0].nome,
            email: result.rows[0].email,
          },
        });
      }
    );
    done();
  });
  // return res.status(200).json(newUser);
});
/* GET usuarios. */
router.get('/', async (req, res) => {
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
  pool.connect((err, client, done) => {
    if (err) {
      done();
      console.log(err);
    }
    client.query(
      'UPDATE usuario SET nome=$1, email=$2 WHERE usuarioid = $3',
      [data.nome, data.email, data.id],
      (err, response) => {
        if (err) {
          if (err.code == 23505) {
            res.status(500).json({ message: 'Email já está sendo utilizado' });
            done();
          }
          res.status(500).json(err);
          done();
        }
      }
    );
    done();
    client.query(
      'SELECT nome, email FROM usuario WHERE usuarioid = $1',
      [data.id],
      (err, result) => {
        if (err) {
          res.status(500).json(err);
          done();
        }
        res.status(200).json({
          message: 'Usuario atualizado com sucesso',
          usuario: {
            novoNome: result.rows[0].nome,
            novoEmail: result.rows[0].email,
          },
        });
      }
    );
    done();
  });
});

/* DELETE deletando usuario. */
router.delete('/:id', (req, res, next) => {
  const usarioid = req.params.id;
  pool.connect((err, client, done) => {
    if (err) {
      done();
      console.log(err);
    }
    client.query(
      'DELETE FROM usuario WHERE usuarioid = $1',
      [usarioid],
      (error, result) => {
        if (error) {
          res.status(500).json(error);
        }
        res.status(200).json(result);
        done();
      }
    );
  });
});

module.exports = router;
