const express = require('express')
const router = express.Router()

// only routes without controllers

router.post('/api/countries', (req, res) => {
  res.send('Here we add a country')
})

router.get('/api/countries', (req, res) => {
  res.send('Here we show all countries')
})

module.exports = router
