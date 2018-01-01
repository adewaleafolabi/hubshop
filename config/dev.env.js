var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_BASE: '"http://127.0.0.1:3000/api/v1/"',
  MERCHANT_ID: '"demo"',
  AUTHORIZATION: '"Bearer ZGVtbzQ3NjE4Ng=="'
})
