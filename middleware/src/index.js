import server from "./server.js";
import config from "./config.js";
import dbInstance from "./database.js";

const port = config.port

server.listen(port|| 9002, ()=> {
    
    console.log(`server start on ${port}`)
    dbInstance.raw('SELECT 1').then(() => {
      console.log('Conexión exitosa a la base de datos.')
    }).catch((error) => {
      console.error('Error al conectar a la base de datos:', error)
    })
})

const src = server

export default src