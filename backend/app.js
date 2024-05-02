const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

// Parse JSON bodies
app.use(express.json())

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use(express.static('public'))

const countryRoutes = require('./routes/countryRoutes')
const cityRoutes = require('./routes/cityRoutes')
const languageRoutes = require('./routes/languageRoutes')
<<<<<<< HEAD
// const currencyRoutes = require('./routes/currencyRoutes')
=======
const currencyRoutes = require('./routes/currencyRoutes')

// Koppling till mongoose
const commentRoutes = require('./routes/commentRoutes')
>>>>>>> 658ba38bfa7d56a07f4b56260ddc509c2d1d1bf0

app.use(countryRoutes)
app.use(cityRoutes)
app.use(languageRoutes)
<<<<<<< HEAD
// app.use(currencyRoutes)
=======
app.use(currencyRoutes)
app.use(commentRoutes)

const connectionMongoDB = require('./connectionMongoDB')
connectionMongoDB()
>>>>>>> 658ba38bfa7d56a07f4b56260ddc509c2d1d1bf0

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
