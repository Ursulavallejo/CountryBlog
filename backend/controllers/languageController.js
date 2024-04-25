const connectionMySQL = require('../connectionMySQL.js')

exports.getLanguages = async (req, res) => {
  let sql = 'SELECT * FROM language'
  try {
    await connectionMySQL.query(sql, (error, results, fields) => {
      if (error) throw error
      res.json(results)
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.createLanguage = async (req, res) => {
  const {
    languageId,
    languageName,
  } = req.body

  let sql =
    'INSERT INTO language (languageId, languageName) VALUES (?,?,?,?)'

  let params = [
    languageId,
    languageName,
  ]

  if (!languageName || languageName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: 'You have not written a languageName',
    })
  }

  try {
    await connectionMySQL.query(sql, params, (error, results, fields) => {
      if (error) throw error
      return res.status(201).json({
        success: true,
        error: '',
        message: 'You have now added a new language!',
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}

exports.updateLanguage = async (req, res) => {
  const {
    languageId,
    languageName,
  } = req.body

  let sql =
    'UPDATE language SET languageId = ?, languageName = ? WHERE  languageId = ?'
  let params = [
    languageId,
    languageName,
  ]

  if (!languageName || languageName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: 'You have not written any language for the country',
    })
  }

  if (!languageId) {
    return res.status(400).json({
      success: false,
      error: 'You have not provide any ID of the language you wish to update!!',
    })
  }

  try {
    await connectionMySQL.query(sql, params, (error, results, fields) => {
      if (error) throw error
      return res.status(201).json({
        success: true,
        error: '',
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}

exports.deleteLanguage = async (req, res) => {
  const { languageId } = req.body

  let sql = 'DELETE FROM language WHERE languageId = ?'

  if (!languageId) {
    return res.status(400).json({
      success: false,
      error: 'You have not provide any ID of the language you wish to delete!',
    })
  }

  try {
    await connectionMySQL.query(sql, [languageId], (error, results, fields) => {
      if (error) throw error
      return res.status(201).json({
        success: true,
        error: '',
        message: 'The language is now deleted!',
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}

