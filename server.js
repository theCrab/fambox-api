'use strict';

require('dotenv').config()
const express   = require('express')
const cors      = require('cors')
const Geocoder  = require('node-geocoder')
const path      = require('path')
const R         = require('ramda')
const app       = express()
const api       = require('./server/routes/api')

const PROVIDER_OPTIONS = {
  here: {
    appId: process.env.HERE_APP_ID,
    appCode: process.env.HERE_APP_CODE
  }
};

app.use(cors());

// Point static path to dist.
// This is where Angular builds the final frontend app
app.use(express.static(path.resolve(__dirname, 'dist')))
app.use('/api', api)

// app.get('/api/geocode', (req, res, next) => {
//   const provider = req.query.provider || 'google'
//   const options = PROVIDER_OPTIONS[provider]
//
//   const geocoder = Geocoder(R.merge({
//     provider,
//     httpAdapter: 'request'
//   }, options))
//
//   geocoder.geocode(req.query.address)
//     .then(data => ({
//       raw: data.raw,
//       data
//     }))
//     .then(json => res.send(json))
//     .catch(next);
// })

// Catch all other routes and return the index file
api.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname, 'dist/index.html'));
  res.send('Hey')
})

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`API is running on port ${port}`) )
