import bodyParser from 'body-parser';
import express from 'express';
import routes from './api/infraestructure/external/routes/index.js'


const server = express();

// parse body params and attache them to req.body)
server.use(bodyParser.json({ limit: '64mb' }))
server.use(bodyParser.urlencoded({ extended: true, limit: '64mb' }))

server.use('/api', routes)

export default server