const connectionMySQL = require('../connectionMySQL')

exports.getCities = async (req, res) => {
  let sql = 'SELECT * FROM city'
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

exports.createCity = async (req, res) => {
  const { cityName, cityPopulation, cityCountryId } = req.body

  let sql =
    'INSERT INTO city (cityName, cityPopulation, cityCountryId) VALUES (?,?,?)'
  let params = [cityName, cityPopulation, cityCountryId]

  if (!cityName || cityName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: 'You need to insert a name for the new city',
    })
  }

  if (!cityCountryId) {
    return res.status(400).json({
      success: false,
      error: 'You need to insert a country for the new city',
    })
  }

  try {
    await connectionMySQL.query(sql, params, (error, results, fields) => {
      if (error) throw error
      return res.status(201).json({
        success: true,
        message: 'You have created a new city',
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}
