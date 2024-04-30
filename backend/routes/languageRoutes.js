const express = require('express')
const router = express.Router()
const languageController = require('../controllers/languageController')

router.get('/api/languages', languageController.getLanguages)
router.post('/api/languages', languageController.createLanguage)

module.exports = router