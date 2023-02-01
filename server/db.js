import pg from 'pg';

const { Pool } = pg;

const myHost = process.env.POSTGRES_SERVER;
const myDBUser = process.env.POSTGRES_USERNAME;
const myPassword = process.env.POSTGRES_PASSWORD;
const myDBName = process.env.POSTGRES_DB;
console.log(`Pool about to be created with host: ${myHost}, database name: ${myDBName}, username: ${myDBUser}`);

const pool = new Pool({
  host: myHost,
  database: myDBName,
  user: myDBUser,
  password: myPassword,
  port: 5432,
  max: 10,
  idleTimeoutMillis: 60000,
  connectionTimeoutMillis: 10000,
});

console.log('Pool created');

export default pool;
