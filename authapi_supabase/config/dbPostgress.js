import {Pool} from 'pg'
require('dotenv/config');

console.log(process.env.DB_USER)

//Configurar as variaveis de ambiente na vercel e utilizar os secrets 
const pool = new Pool({
    
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})


export default pool;