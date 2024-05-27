const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5433,
  user: 'postgres',
  password: 'admin',
  database: 'auctionbay',
  connectionTimeoutMillis: 10000, // 10 seconds
});

client.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    console.log('Connected to the database');
  }
  client.end();
});
