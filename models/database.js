const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/muda';

const client = new pg.Client(connectionString);
client.connect();
