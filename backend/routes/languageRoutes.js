const express = require('express')
const router = express.Router()
const languageController = require('../controllers/languageController')

router.get('/api/languages', languageController.getLanguages)
router.post('/api/languages', languageController.createLanguage)
<<<<<<< HEAD

module.exports = router
=======
router.put('/api/languages', languageController.updateLanguage)
router.delete('/api/languages', languageController.deleteLanguage)
// router.get('/api/languages/:id', languageController.getLanguage)

module.exports = router
>>>>>>> 658ba38bfa7d56a07f4b56260ddc509c2d1d1bf0
