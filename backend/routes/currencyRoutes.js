const express = require('express')
const router = express.Router()

const currencyController = require('../controllers/currencyController')

//1 Skapa valuta
router.post('/api/currencies', currencyController.createCurrency)

//2 Updatera valuta
router.put('/api/currencies', currencyController.updateCurrency)

//3 Hämta valutor
router.get('/api/currencies', currencyController.getCurrencies)

//4 Hämta valuta med ID
router.get('/api/currencies/:id', currencyController.getCurrency)

//5 Radera valuta
router.delete('/api/currencies', currencyController.deleteCurrency)


module.exports = router
