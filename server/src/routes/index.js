// ./routes/index.js
const user = require('./userRoute')
// const photos = require('./photos')
const exercise = require('./exercise');
const workout = require('./workout');
const workoutPlan = require('./workout-plan');
const progress = require('./progress')
 
module.exports = (app) => {
  app.use('/user', user);
  app.use('/exercise',exercise);

  app.use('/workout',workout);
  app.use('/workout-plan',workoutPlan);
  app.use('/progress',progress);

  //app.use(user) -> will we at direct /
//   app.use('/photos', photos)

  // etc..
}