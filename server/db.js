import pg from 'pg'

const Pool = pg.Pool

export const myPool = new Pool()

// {
//     user: process.env.PGUSER,
//     password: process.env.PGPASSWORD,
//     database : process.env.PGDATABASE,
//     host : process.env.PGHOST,
//     port: process.env.PGPORT
// }