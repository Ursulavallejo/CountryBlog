const commentModel = require('../models/commentModel')

exports.getComments = async (req, res) => {
  try {
    const allComments = await commentModel.find()
    return res.status(200).json(allComments)
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.getComment = async (req, res) => {
  const { id } = req.params
  try {
    const comment = await commentModel.find({ _id: id })
    return res.status(200).json(comment)
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.createComment = async (req, res) => {
  const { userName, homeCountry, country, title, comment } = req.body

  try {
    const newComment = new commentModel({
      userName: userName,
      homeCountry: homeCountry,
      country: country,
      comment: comment,
      title: title,
      date: new Date(),
    })
    const insertedComment = await newComment.save()
    return res.status(201).json(insertedComment)
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.updateComment = async (req, res) => {
  const { userName, homeCountry, country, title, comment, _id } = req.body

  try {
    await commentModel.updateOne(
      { _id: _id },
      {
        userName: userName,
        homeCountry: homeCountry,
        country: country,
        comment: comment,
        title: title,
        date: new Date(),
      }
    )
    const updatedComment = await commentModel.find({ _id: _id }) // ID här med!
    return res.status(200).json(updatedComment)
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.deleteComment = async (req, res) => {
  const { _id } = req.body
  try {
    const deletedComment = await commentModel.deleteOne({ _id: _id })
    return res.status(200).json(deletedComment)
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.getCommentById = async (req, res) => {
  const { id } = req.params
  try {
    const comment = await commentModel.findById(id)
    return res.status(200).json(comment)
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.deleteCommentById = async (req, res) => {
  const { id } = req.body
  try {
    const deletedComment = await commentModel.findByIdAndDelete(id)
    return res.status(200).json(deletedComment)
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}
