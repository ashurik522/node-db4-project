const knex = require('knex')
const configs = require('../knexfile')

const enviroment = process.env.NODE_ENV || 'development'

module.exports = knex(configs[enviroment])