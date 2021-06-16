import mysql from 'mysql2'

import { config } from '../config/'

// ---

const { DBURL, DBUSER, DBNAME, DBPASS } = config

export const pool = mysql.createPool({
  connectionLimit: 5,
  host: process.env.DBSERVICE || DBURL || 'localhost',
  user: DBUSER || 'user',
  password: DBPASS || 'password',
  database: DBNAME || 'e2ecubbit'
})

// export const pool = mysql.createPool({
//   connectionLimit: 5,
//   host: 'localhost',
//   user: 'user',
//   password: 'password',
//   database: 'e2ecubbit'
// })
