const { Client } = require('pg');
require('dotenv').config();

//place your postgres config and uncomment it 
// const client = new Client({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// });

const createTables = async () => {
  try {
    await client.connect();

    await client.query(`
      CREATE TABLE IF NOT EXISTS Users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        age INTEGER
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS WalletAddress (
        userid INTEGER NOT NULL,
        address VARCHAR(255) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (userid) REFERENCES Users(id)
      );
    `);

    console.log('Tables created successfully');
  } catch (err) {
    console.error('Error creating tables:', err);
  } finally {
    await client.end();
  }
};

createTables();
