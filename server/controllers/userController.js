// Middleware page
const db = require('../models/userModels');
const userController = {};

//////User Creator middleware//////////
userController.createUser = (req, res, next) => {
  const {username, email, password} = req.body;
  const params = [username, email, password];
  const user = 'INSERT INTO users_table (username, password, email) VALUES ($1, $2, $3)';

  db.query(user, params)
    .then((result) => {
      res.locals.createUser = result.rows[0];
      return next();
    })
    .catch((err) => {
      return next({
        log: 'userController.createUser: ERROR: There was an error creating a character.',
        status: 404,
        message: {
          err: 'An error has occurred',
        },
      });
    });
};

/////// Verify User middleware //////////////
userController.verifyUser = (req, res, next) => {
  const {username, password} = req.body;
  // const id = [req.query.id]
  const params = [username, password];

  //$num === the number of the parameter
  const verify = 'SELECT username, password FROM users_table WHERE username = username AND password = password LIMIT 1';

  db.query(verify)
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