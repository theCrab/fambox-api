
const express = require('express')
const router  = express.Router()
const Uber    = require('node-uber')

let uber = new Uber({
  server_token: process.env.UBER_KEY,
  language: 'en_GB'
})
// const bodyParser = require('body-parser')
// const axios   = require('axios')

// axios.defaults.baseURL = 'https://api.uber.com/v1.2/'
// axios.defaults.headers.common['Athentication'] = process.env.UBER_KEY
// router.use(bodyParser.json()) // for parsing application/json

router.get('/geocode', (req, res, next) => {
    res.send('Geocode endpoint is working. You can implement it.')
})

router.get('/reverse', (req, res, next) => {
    res.send('Reverse geocode endpoint is working. You can implement it.')
})

router.get('/estimate', (req, res) => {
    uber.estimates.getPriceForRouteAsync(
      req.query.start_latitude,
      req.query.start_longitude,
      req.query.end_latitude,
      req.query.end_longitude
    )
    .then(prices => res.json(prices))
    .error(err => console.error(err.message))
})

router.get('/me', (req, res, next) => {
    res.send('User endpoint is working. You can implement it.')
})

module.exports = router
