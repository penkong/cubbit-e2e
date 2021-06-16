/*
 ** Description :
 */

// ---

declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string
    DBURL: string
    DBNAME: string
    DBSERVICE: string
    NODE_ENV: string
    DBUSER: string
    DBPASS: string
    CORS: string // http://localhost:3000
  }
}
