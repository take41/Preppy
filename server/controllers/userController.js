// Middleware page
const db = require('../models/userModels');
// const bcrypt = require('bcryptjs');
// const { response } = require('../server');
const userController = {};

////User Creator middleware//////////
userController.createUser = (req, res, next) => {
  const {username, email, password} = req.body;
  const params = [username, email, password];
  // console.log(params)
  const user = 'INSERT INTO users_table (username, password, email) VALUES ($1, $2, $3)';
//crypt($2, gen_salt("bf")
  if(!username || !password || !email) return next('Missing username, password, or email in userController.createUser');

  db.query(user, params)
    .then((result) => {
      res.locals.user = result.rows[0];
      return next();
    })
    .catch((err) => {
      return next(err)
    });
};

/////// Verify User middleware //////////////
userController.verifyUser = (req, res, next) => {
  const {username, password} = req.body;
  const params = [username, password];
  const verify = 'SELECT username, password FROM users_table WHERE username = $1 AND password = $2 LIMIT 1';

  // if(!username || !password) res.redirect('/signup')

    db.query(verify, params)
      .then(results => {
        console.log(results.rows[0])
        if(results.rows[0] !== undefined) {
          console.log(res.locals.user)         
          res.locals.user = results.rows[0]; 
          return next()
        } else {
          // return next({error: err})
          res.redirect('/signup')
        }
      })
      .catch((err) => {
        return next(err)
      })
}

//////////Reference below to verify user using MongoDB///////////////////////////
// userController.verifyUser = (req, res, next) => {
//   const { username, password } = req.body;

//   User.findOne({ username }, (err, user) => {
//     if (err) {
//       return next('Error in userController.verifyUser: ' + JSON.stringify(err))
//     } else if(!user){
//       res.redirect('/signup')
//     } else {
//       bcrypt.compare(password, user.password)
//         .then(result => {
//           if(!result) {
//             res.redirect('/signup');
//           } else {
//             res.locals.user = user;
//             return next();
//           }
//         })
//         .catch(err => {
//           return next('Error in userController.verifyUser: ' + JSON.stringify(err));
//         })
//       }
//     })
// };

module.exports = userController;