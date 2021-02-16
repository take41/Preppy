// File to connect Postgres ////////////
const { Pool } = require('pg');

/////// ElephantSQL url /////////
const PG_URI = 'postgres://uitvjbtp:Ki6YsYlblW-5vFkjfbjPCPaMU3Tv0IbI@ziggy.db.elephantsql.com:5432/uitvjbtp';

// Creates a new pool using the connection string
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};
