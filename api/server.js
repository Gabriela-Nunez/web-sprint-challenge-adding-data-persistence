// build your server here and require it from index.js
const express = require('express');
const resourceRouter = require('../api/resource/router')
const projectRouter = require('../api/project/router')
const taskRouter = require('../api/task/router')

const server = express();

server.use(express.json());
server.use('/api/resources', resourceRouter)
server.use('/api/projects', projectRouter)
server.use('/api/tasks', taskRouter)

server.use('*', (req, res) => {
  res.status(404).json({
    message: 'Sorry, not found'
  })
})



module.exports = server;