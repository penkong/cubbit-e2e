/*
 ** Description :
 */

require('dotenv').config()

// ---

export const config = {
  PORT: process.env.PORT,
  DBURL: process.env.DBURL,
  DBNAME: process.env.DBNAME,
  __prod__: process.env.NODE_ENV === 'production',
  CORS: process.env.CORS
}
