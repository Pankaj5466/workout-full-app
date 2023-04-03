const exercise = require('./exercise')
 
module.exports = (app) => {
  app.use('/exercise', exercise);
}