const express = require('express')
const router = express.Router()
const languageController = require('../controllers/languageController')

router.get('/api/languages', languageController.getLanguages)
router.post('/api/languages', languageController.createLanguage)
router.put('/api/languages', languageController.updateLanguage)
router.delete('/api/languages', languageController.deleteLanguage)
<<<<<<< HEAD
//router.get('/api/languages/:id', languageController.getLanguage)
=======
// router.get('/api/languages/:id', languageController.getLanguage)
>>>>>>> c5fe7db77973534672fa5b3b943b9b03b5efef5a

module.exports = router
