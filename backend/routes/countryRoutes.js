const express = require('express')
const router = express.Router()

//Implementing controllers:
const countryController = require('../controllers/countryController')

router.get('/api/countries', countryController.getCountries)
router.get('/api/countries/:id', countryController.getCountry)

router.post('/api/countries', countryController.createCountry)
router.put('/api/countries', countryController.updateCountry)

router.delete('/api/countries', countryController.deleteCountry)

// SQL endpoint that relate info between all tables
router.get('/api/country-city-info', countryController.getAllInfoCountryCity)

// only routes without controllers

// router.post('/api/countries', (req, res) => {
//   res.send('Here we add a country')
// })

// router.get('/api/countries', (req, res) => {
//   res.send('Here we show all countries')
// })

module.exports = router
