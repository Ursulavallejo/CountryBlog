const connectionMySQL = require('../connectionMySQL.js')

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

  if (!cityPopulation) {
    return res.status(400).json({
      success: false,
      error: 'You need to insert a number for the population for the new city',
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

exports.updateCity = async (req, res) => {
  const { cityName, cityPopulation, cityCountryId, cityId } = req.body

  let sql =
    'UPDATE city SET cityName = ?, cityPopulation = ?, cityCountryId = ? WHERE cityId = ?'
  let params = [cityName, cityPopulation, cityCountryId, cityId]

  if (!cityId) {
    return res.status(400).json({
      success: false,
      error: 'You need to enter a cityId for the city you want to update',
    })
  }

  if (!cityName || cityName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: 'You need to insert a name for the city you want to update',
    })
  }

  if (!cityCountryId) {
    return res.status(400).json({
      success: false,
      error:
        'You need to specify which country the city you want to update is located in',
    })
  }

  if (!cityPopulation) {
    return res.status(400).json({
      success: false,
      error:
        'You need to insert a number for the population for the city you want to update',
    })
  }

  try {
    await connectionMySQL.query(sql, params, (error, results, fields) => {
      if (error) throw error
      return res.status(201).json({
        success: true,
        error: 'You have updated a city!',
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}

exports.deleteCity = async (req, res) => {
  const { cityId } = req.body

  let sql = 'DELETE FROM city WHERE cityId = ?'

  if (!cityId) {
    return res.status(400).json({
      success: false,
      error: 'You need to insert an ID for the city you want to delete',
    })
  }

  try {
    await connectionMySQL.query(sql, [cityId], (error, results, fields) => {
      if (error) throw error
      return res.status(201).json({
        success: true,
        message: 'The city is deleted!',
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}
