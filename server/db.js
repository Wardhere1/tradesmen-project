import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  host: 'Server-containerNew',
  database: 'test',
  user: 'postgres',
  password: 'postgres',
  port: 5432,
});

export default pool;
