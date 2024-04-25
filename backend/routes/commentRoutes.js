const express = require('express')
const router = express.Router()
const commentController = require('../controllers/commentController')

router.get('/api/comment', commentController.getComments)
router.get('/api/comment/:id', commentController.getComment)
router.post('/api/comment', commentController.createComment)
router.put('/api/comment', commentController.updateComment)
router.delete('/api/comment', commentController.deleteComment)
router.get('/api/comment-byid/:id', commentController.getCommentById)
router.delete('/api/comments-byid', commentController.deleteCommentById)

module.exports = router
