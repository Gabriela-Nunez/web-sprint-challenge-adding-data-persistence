// build your `/api/projects` router here
const express = require('express')
const router = express.Router()

router.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    message: 'Sorry, something went wrong in project router.',
    err: err.message,
    stack: err.stack,
  })
})

module.exports = router