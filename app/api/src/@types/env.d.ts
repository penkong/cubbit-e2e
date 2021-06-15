/*
 ** Description :
 */

// ---

declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string
    DBURL: string
    DBNAME: string
    NODE_ENV: string
    CORS: string // http://localhost:3000
  }
}
