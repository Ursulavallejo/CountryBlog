const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  homeCountry: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
})

module.exports = mongoose.model('comment', CommentSchema)
