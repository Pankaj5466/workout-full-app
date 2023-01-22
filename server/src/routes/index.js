// ./routes/index.js
const user = require('./userRoute')
// const photos = require('./photos')
const exercise = require('./exercise');
const workout = require('./workout');
 
module.exports = (app) => {
  app.use('/users', user);
  app.use('/exercise',exercise);

  app.use('/workout-plan',workout);

  //app.use(user) -> will we at direct /
//   app.use('/photos', photos)

  // etc..
}