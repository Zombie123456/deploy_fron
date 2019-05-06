var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HOST: '"http://grizzly.gojsjs.com"',
  // HOST: '"http://192.168.2.15:8000"',
  // HOST: '"http://192.168.37.50:8000"',
  DOCKERIZED_DEV: '"' + process.env.DOCKERIZED_DEV + '"'
})
