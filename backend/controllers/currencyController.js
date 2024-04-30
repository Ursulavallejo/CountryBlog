const connectionMySQL = require('../connectionMySQL')


// -------------------------GET/HÄMTA INFO--------------------------

exports.getCurrencies = async (req, res) => {
  let sql = 'SELECT * FROM currency'
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

// --------------------------GET/HÄMTA ID---------------------------

exports.getCurrency = async (req, res) => {
  const { id } = req.params

  let sql = 'SELECT * FROM currency WHERE currencyId = ?'
  try {
    await connectionMySQL.query(sql, [id], (error, results, fields) => {
      if (error) throw error
      res.json(results)
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}

//--------------------CREATE/ LÄGG TILL NY DATA---------------------

exports.createCurrency = async (req, res) => {
  const {
    currencyName,
  } = req.body

  let sql =
    'INSERT INTO currency (currencyName) VALUES (?)'

  let params = [
    currencyName,
  ]

  if (!currencyName || currencyName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: 'You have not writen a currencyName',
    })
  }

  try {
    await connectionMySQL.query(sql, params, (error, results, fields) => {
      if (error) throw error
      return res.status(201).json({
        success: true,
        error: '',
        message: 'You have added a new Currency!',
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}

// ---------------------UPDATE/PUT/UPPDATERA INFO--------------------

exports.updateCurrency = async (req, res) => {
  const {
    currencyName,
    currencyId
  } = req.body

  let sql =
    'UPDATE currency SET currencyName = ? WHERE currencyId = ?'
  let params = [
    currencyName,
    currencyId
  ]

  if (!currencyName || currencyName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: 'You have not write any country name for the Country',
    })
  }

  if (!currencyId) {
    return res.status(400).json({
      success: false,
      error: 'You have not provided any ID to update!!',
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


// ---------------------------DELETE-----------------------------

exports.deleteCurrency = async (req, res) => {
  const { currencyId } = req.body

  let sql = 'DELETE FROM currency WHERE currencyId = ?'

  if (!currencyId) {
    return res.status(400).json({
      success: false,
      error: 'You have not provided any ID of the Currency you wish to delete!',
    })
  }

  try {
    await connectionMySQL.query(sql, [currencyId], (error, results, fields) => {
      if (error) throw error
      return res.status(201).json({
        success: true,
        error: '',
        message: 'currency is deleted!',
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}
