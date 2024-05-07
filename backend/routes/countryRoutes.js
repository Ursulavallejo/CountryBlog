const express = require('express')
const router = express.Router()

const countryController = require('../controllers/countryController')

router.get('/api/countries', countryController.getCountries)
router.get('/api/countries/:id', countryController.getCountry)

router.post('/api/countries', countryController.createCountry)
router.put('/api/countries', countryController.updateCountry)

router.delete('/api/countries', countryController.deleteCountry)

// SQL endpoint that relate info between all tables
router.get('/api/country-city-info', countryController.getAllInfoCountryCity)

router.get(
  '/api/country-city-info/:id',
  countryController.getCountryCityInfoById
)
// router.get(
//   '/api/country-city-info/:id',
//   countryController.getCountryCityInfoById
// )

module.exports = router
