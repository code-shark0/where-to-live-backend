import { db } from './drizzle.config';
import { cities } from './schema/cities';
import Database from 'better-sqlite3';

// This will create the "cities" table directly in the database
console.log('Creating cities table...');

// Get the SQLite connection from the drizzle config
const sqlite = new Database('dev.db');

// Execute SQL to create the table
sqlite.exec(`
CREATE TABLE IF NOT EXISTS cities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  cost_of_living_index REAL NOT NULL,
  crime_index REAL NOT NULL,
  median_income INTEGER NOT NULL,
  walkability_score INTEGER NOT NULL,
  average_temperature REAL NOT NULL
);
`);

console.log('Table creation complete!');
