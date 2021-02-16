const db = require('../models/userModels');

const userController = {};

////User Creator middleware//////////
userController.createUser = (req, res, next) => {
  const {username, password, email} = req.body;
  const params = [username, password, email];
  const user = 'INSERT INTO users_table (username, password, email) VALUES ($1, $2, $3)';
//crypt($2, gen_salt("bf")
  if(!username || !password || !email) return next('Missing username, password, or email in userController.createUser');

  db.query(user, params)
    .then((result) => {
      res.locals.user = result.rows[0];
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

/////// Verify User middleware //////////////
userController.verifyUser = (req, res, next) => {
  const {username, password} = req.body;
  const params = [username, password];
  const verify = 'SELECT username, password FROM users_table WHERE username = $1 AND password = $2 LIMIT 1';

  if(!username || !password) return next("Missing required fields");

    db.query(verify, params)
      .then(results => {
        if(results.rows[0] !== undefined) {       
          res.locals.user = results.rows[0]; 
          return next();
        } else res.redirect('/signup');    
      })
      .catch((err) => {
        return next(err)
      });
};

module.exports = userController;