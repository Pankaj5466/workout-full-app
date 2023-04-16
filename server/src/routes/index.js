// ./routes/index.js
const user = require('./userRoute')
// const photos = require('./photos')
const exercise = require('./exercise');
const workout = require('./workout');
const workoutPlan = require('./workout-plan');
const progress = require('./progress');

const utils = require('./utils');
const mockApi = require('./mock-api');
 
module.exports = (app) => {
  app.use('/user', user);
  app.use('/exercise',exercise);

  app.use('/workout',workout);
  app.use('/workout-plan',workoutPlan);
  app.use('/progress',progress);
  app.use('/utils',utils);

  app.use('/mock',mockApi);

  //app.use(user) -> will we at direct /
//   app.use('/photos', photos)

  // etc..
}