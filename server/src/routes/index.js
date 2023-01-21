// ./routes/index.js
const user = require('./userRoute')
// const photos = require('./photos')
const exercise = require('./exercise')
 
module.exports = (app) => {
  app.use('/users', user);
  app.use('/exercise',exercise);

  //app.use(user) -> will we at direct /
//   app.use('/photos', photos)

  // etc..
}