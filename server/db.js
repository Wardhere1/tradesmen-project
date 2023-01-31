import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  host: 'localhost',
  database: 'tradematch',
  user: 'postgres',
  password: 'password',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 60000,
  connectionTimeoutMillis: 10000,
});

export default pool;
