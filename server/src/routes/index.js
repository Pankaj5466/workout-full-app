// ./routes/index.js
const user = require('./userRoute')
// const photos = require('./photos')
 
module.exports = (app) => {
  app.use('/users', user);
  //app.use(user) -> will we at direct /
//   app.use('/photos', photos)
  // etc..
}