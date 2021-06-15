import mysql from 'mysql2'

import { config } from '../config/'

// ---

const { DBURL, DBUSER, DBNAME, DBPASS } = config

export const pool = mysql.createPool({
  connectionLimit: 5,
  host: DBURL || 'localhost',
  user: DBUSER || 'user',
  password: DBPASS || 'password',
  database: DBNAME || 'e2ecubbit'
})
