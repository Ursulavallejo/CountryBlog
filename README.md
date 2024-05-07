# TRAVEL BLOG : LABB3 Backendprogrammering

## IT Högskola

### ER DIAGRAM:

[<img src="./backend/ER-diagram.png" width="550"/>](ER-Diagram)

### DATABASEN:

- My SQL:

```javascript
CREATE DATABASE countryBlogLabb3;

DROP DATABASE countryBlogLabb3;


CREATE TABLE currency (
    currencyId INT NOT NULL AUTO_INCREMENT,
    currencyName VARCHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY  (currencyId)
);

CREATE TABLE language (
    languageId INT NOT NULL AUTO_INCREMENT,
    languageName VARCHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY (languageId)
);

CREATE TABLE country (
    countryId INT NOT NULL AUTO_INCREMENT,
    countryCurrencyId INT,
    countryLanguageId INT,
    countryName VARCHAR(50) NOT NULL UNIQUE ,
    countryPopulation INT,
    countryFlag VARCHAR(100),
    PRIMARY KEY (countryId),
    FOREIGN KEY (countryCurrencyId) REFERENCES currency (currencyId),
    FOREIGN KEY (countryLanguageId) REFERENCES language (languageId)
);

CREATE TABLE city (
    cityId INT NOT NULL AUTO_INCREMENT,
    cityCountryId INT,
    cityName VARCHAR(50) NOT NULL UNIQUE,
    cityPopulation INT,
    cityImage VARCHAR(200),
    cityAttraction VARCHAR(150),
    PRIMARY KEY (cityId),
    FOREIGN KEY (cityCountryId) REFERENCES country(countryId)
);
```

- Mongoose:

```javascript
use comment

show collections

db.comments.insertMany([
    {
    userName: 'Anna',
    homeCountry: 'Sweden',
    country: 'Germany',
    title: "Great place",
    comment: 'Had a great trip!',
    date: new Date()
    },
    {
    userName: 'Björn',
    homeCountry: 'Norge',
    country: 'Spain',
    title: "Long vacation",
    comment: 'Bad weather!',
    date: new Date()
}
]);
```

### BACKEND:

- Country Routes:

```javascript
const countryController = require('../controllers/countryController')

router.get('/api/countries', countryController.getCountries)

router.get('/api/countries/:id', countryController.getCountry)

router.post('/api/countries', countryController.createCountry)

router.put('/api/countries', countryController.updateCountry)

router.delete('/api/countries', countryController.deleteCountry)
```

- Country Controller:

```javascript
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
```

- FETCH API Frontend::

```javascript
// fetch för att hämta landets flagga
fetch('http://localhost:3000/api/countries')
  .then((response) => response.json())
  .then((countries) => {
    for (let i = 0; i < this.comments.length; i++) {
      for (let j = 0; j < countries.length; j++) {
        if (this.comments[i].country === countries[j].countryName) {
          this.comments[i].flagImage = countries[j].countryFlag
        }
      }
    }
  })
```

### INSOMNIA: (Live preview)

### FRONT END: (Live preview)
