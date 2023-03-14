import config from './config.js'
import db from 'knex'

let DEFAULT = {
  client: 'mysql',
  connection: config.dbConection,  
}

const dbInstance = db({...DEFAULT})


export default dbInstance




