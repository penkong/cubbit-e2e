/*
 ** Description :
 */

require('dotenv').config()

// ---

export const config = {
  PORT: process.env.PORT,
  DBURL: process.env.DBURL,
  DBNAME: process.env.DBNAME.replace('<DBSERVICE>', process.env.DBSERVICE),
  DBPASS: process.env.DBPASS,
  DBUSER: process.env.DBUSER,
  __prod__: process.env.NODE_ENV === 'production',
  CORS: process.env.CORS
}
