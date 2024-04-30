const connectionMySQL = require('../connectionMySQL.js')

exports.getCountries = async (req, res) => {
  let sql = 'SELECT * FROM country'
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

exports.getCountry = async (req, res) => {
  const { id } = req.params

  let sql = 'SELECT * FROM country WHERE countryId = ?'
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

exports.createCountry = async (req, res) => {
  const {
    countryCurrencyId,
    countryLanguageId,
    countryName,
    countryPopulation,
  } = req.body

  let sql =
    'INSERT INTO country (countryCurrencyId, countryLanguageId, countryName , countryPopulation) VALUES (?,?,?,?)'

  let params = [
    countryCurrencyId,
    countryLanguageId,
    countryName,
    countryPopulation,
  ]

  if (!countryName || countryName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: 'You have not write a countryName',
    })
  }

  try {
    await connectionMySQL.query(sql, params, (error, results, fields) => {
      if (error) throw error
      return res.status(201).json({
        success: true,
        error: '',
        message: 'You have add a new Country!',
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}

exports.updateCountry = async (req, res) => {
  const {
    countryCurrencyId,
    countryLanguageId,
    countryName,
    countryPopulation,
    countryId,
  } = req.body

  let sql =
    'UPDATE country SET countryCurrencyId = ?, countryLanguageId = ?, countryName = ?, countryPopulation = ? WHERE  countryId = ?'
  let params = [
    countryCurrencyId,
    countryLanguageId,
    countryName,
    countryPopulation,
    countryId,
  ]

  if (!countryName || countryName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: 'You have not write any country name for the Country',
    })
  }

  if (!countryId) {
    return res.status(400).json({
      success: false,
      error: 'You have not provide any ID of the country wish to update!!',
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

exports.deleteCountry = async (req, res) => {
  const { countryId } = req.body

  let sql = 'DELETE FROM country WHERE countryId = ?'

  if (!countryId) {
    return res.status(400).json({
      success: false,
      error: 'You have not provide any ID of the Country wish to delete!',
    })
  }

  try {
    await connectionMySQL.query(sql, [countryId], (error, results, fields) => {
      if (error) throw error
      return res.status(201).json({
        success: true,
        error: '',
        message: 'country is deleted!',
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}

exports.getAllInfoCountryCity = async (req, res) => {
  let sql =
    // This print all information of INNER JPIN
    // 'SELECT * FROM typeSubscription INNER JOIN user ON typeSubscription.typeSubscriptionId = user.UsertypeSubscriptionId_FK'

    //SQL Question relate all tables:
    'SELECT  city.cityId AS CityId,city.cityName AS City, country.countryName AS Country, country.countryId AS CountryId,  language.languageName AS Language, currency.currencyName AS Currency, country.countryPopulation AS Population, country.countryFlag AS FlagImage, city.cityImage AS CityImage FROM city JOIN country ON city.cityCountryId = country.countryId JOIN language ON country.countryLanguageId = language.languageId JOIN currency ON country.countryCurrencyId = currency.currencyId;'

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

// by COUNTRY id

// exports.getCountryCityInfoById = async (req, res) => {
//   const countryId = req.params.id

//   let sql = `
//     SELECT city.cityName AS City,
//            country.countryName AS Country,
//            country.countryId AS CountryId,
//            language.languageName AS Language,
//            currency.currencyName AS Currency,
//            country.countryPopulation AS Population,
//            country.countryFlag AS FlagImage,
//            city.cityImage AS CityImage
//     FROM city
//     JOIN country ON city.cityCountryId = country.countryId
//     JOIN language ON country.countryLanguageId = language.languageId
//     JOIN currency ON country.countryCurrencyId = currency.currencyId
//     WHERE country.countryId = ?;
//   `

//   try {
//     await connectionMySQL.query(sql, [countryId], (error, results, fields) => {
//       if (error) throw error
//       res.json(results)
//     })
//   } catch (error) {
//     return res.status(500).json({
//       error: error.message,
//     })
//   }
// }

// by CITY id
exports.getCountryCityInfoById = async (req, res) => {
  const cityId = req.params.id // Change to cityId

  let sql = `
  SELECT  city.cityId AS CityId,city.cityName AS City,
           country.countryName AS Country,
           country.countryId AS CountryId,
           language.languageName AS Language,
           currency.currencyName AS Currency,
           country.countryPopulation AS Population,
           country.countryFlag AS FlagImage,  -- Adjusted column name
           city.cityImage AS CityImage
    FROM city
    JOIN country ON city.cityCountryId = country.countryId
    JOIN language ON country.countryLanguageId = language.languageId
    JOIN currency ON country.countryCurrencyId = currency.currencyId
    WHERE city.cityId = ?;  -- Changed to cityId
  `

  try {
    await connectionMySQL.query(sql, [cityId], (error, results, fields) => {
      if (error) throw error
      res.json(results)
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}
