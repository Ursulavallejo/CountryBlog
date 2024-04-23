const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')

router.get('/api/cities', cityController.getCities)
router.post('/api/cities', cityController.createCity)
router.put('/api/cities', cityController.updateCity)
router.delete('/api/cities', cityController.deleteCity)

// router.get('/api/albums', albumController.getAlbums)
// router.get('/api/albums/:id', albumController.getAlbum)
// router.post('/api/albums', albumController.createAlbum)
// router.put('/api/albums', albumController.updateAlbum)
// router.delete('/api/albums', albumController.deleteAlbum)
// router.get('/api/albums-categories', albumController.getAlbumCategories)

module.exports = router
