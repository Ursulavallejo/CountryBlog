const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')

router.get('/api/cities', cityController.getCities)
router.post('/api/cities', cityController.createCity)
router.put('/api/cities', cityController.updateCity)
router.delete('/api/cities', cityController.deleteCity)

module.exports = router
