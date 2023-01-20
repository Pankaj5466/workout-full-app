const { Pool } = require('pg')
 
// const pool = new Pool();

const pool = new Pool({
    host: 'localhost',
    port:5432,
    user: 'postgres',
    password: 'Pankaj.9204',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    database: 'app-db'
  })
  

 
module.exports = {
  query: (text, params) => pool.query(text, params),
}