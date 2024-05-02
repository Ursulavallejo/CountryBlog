const express = require('express')
const router = express.Router()
const languageController = require('../controllers/languageController')

router.get('/api/languages', languageController.getLanguages)
router.post('/api/languages', languageController.createLanguage)
router.put('/api/languages', languageController.updateLanguage)
router.delete('/api/languages', languageController.deleteLanguage)

module.exports = router
