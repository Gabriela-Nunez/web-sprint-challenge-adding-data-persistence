// build your server here and require it from index.js
const express = require('express');
const resourceRouter = require('../api/resource/router')
const projectRouter = require('../api/project/router')
const taskRouter = require('../api/task/router')

const server = express();

server.use(express.json());
server.use('/api/resources', resourceRouter)
server.use('/api/projects', projectRouter)
server.use('/api/task', taskRouter)

server.use('*', (req, res, next) => {
  next({ status: 404, message: 'not found'})
})



module.exports = server;