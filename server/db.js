import pg from 'pg';

const { pool } = pg;

// let pool = new poll({
//   host: 'localhost',
//   database: 'test',
//   user: 'postgres',
//   password: 'password',
//   port: 5432,
//   max: 10,
//   idleTimeoutMillis: 60000,
//   connectionTimeoutMillis: 10000,
// });

export default Pool;
