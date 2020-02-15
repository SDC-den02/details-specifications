var environment = process.env.NODE_ENV || 'developmnet'; 
var config = require('../knexfile.js')[environment]; 
module.exports = require('knex')(config); 