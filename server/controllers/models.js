const tokens = require('../tokens')
const {pool} = require('pg');

const PG_URI = tokens.elephantSQL;

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, cb) => {
    console.log('executed query', text);
    return pool.query(text, params, cb);
  }
};