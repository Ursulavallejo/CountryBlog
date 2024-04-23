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
// const languageRoutes = require('./routes/languageRoutes')
// const currencyRoutes = require('./routes/currencyRoutes')

app.use(countryRoutes)
app.use(cityRoutes)
// app.use(languageRoutes)
// app.use(currencyRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
