import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()
const Pool = pg.Pool

const devConfig = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database : process.env.PGDATABASE,
    host : process.env.PGHOST,
    port: process.env.PGPORT
}


const proConfig = {
    connectionString : process.env.DATABASE_URL
}

export const myPool = new Pool(process.env.NODE_ENV === 'production' ? proConfig : devConfig);

