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

/**
 * Receber os hábitos do banco.
 */
router.get( '/', async ( req, res ) => {
  pool.connect( ( err, client, done ) => {
    if (err) {
      done();
      console.log(err);
    }
    client.query(
      'SELECT * FROM habito',
      (error, result) => {
        if (error) {
          return res.status(500).json(error);
        }
        return res.status(200).json(result.rows);
      }
    );
    done();
  })
});

module.exports = router;
