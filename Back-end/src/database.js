const { Pool } = require('pg');

const pool = new Pool({
  connectionString: "postgresql://postgres:123@localhost:5432/nicholaspescados"
});

module.exports = pool;


