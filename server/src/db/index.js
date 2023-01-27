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
    database: 'app-db-2'
  })

  const getClient = async ()=> {
    const client = await pool.connect();
    const query = client.query;
    const release = client.release;
    // set a timeout of 5 seconds, after which we will log this client's last query
    const timeout = setTimeout(() => {
      console.error('A client has been checked out for more than 5 seconds!')
      console.error(`The last executed query on this client was: ${client.lastQuery}`)
    }, 5000)
    // monkey patch the query method to keep track of the last query executed
    client.query = (...args) => {
      client.lastQuery = args
      return query.apply(client, args)
    }
    client.release = () => {
      // clear our timeout
      clearTimeout(timeout)
      // set the methods back to their old un-monkey-patched version
      client.query = query
      client.release = release
      return release.apply(client)
    }
    return client
  }
  

 
module.exports = {
  query: (text, params) => pool.query(text, params),
  getClient:getClient,
}