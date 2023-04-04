const exercise = require('./exercise');
const workout = require('./workout');
const workoutPlan = require('./workout-plan');
const user = require('./user');
 
module.exports = (app) => {
  app.use('/exercise', exercise);
  app.use('/workout',workout);
  app.use('/workout-plan',workoutPlan);
  app.use('/user',user);
}