const exercise = require('./exercise');
const workout = require('./workout');
 
module.exports = (app) => {
  app.use('/exercise', exercise);
  app.use('/workout',workout);
}