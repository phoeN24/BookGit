const {query} = require('express');
const db = require()

const userController = {};

//login

//signUp
userController.newUser = async (req, res, next) => {
  const {name, username: username, email: email, password: password} = req.query;
  try {
    //check if username exists
    const checkQuerystr = `SELECT * FROM Users WHERE username = $1`;
    const checkResult = await db.query(checkQuerystr, [username]);
  
    if(checkResult.rows.length > 0){
      res.locals.auth = { valid: false };
      console.log('Username exists');
      return next();
    } else {
      const queryStr = 'INSERT INTO Users (name, username, email, password) VALUES ($1, $2, $3, $4)';
      const queryResult = await db.query(queryStr, [name, username, email, password]);
      res.locals.auth = { valid: true};
      console.log('account created');
      console.log(queryResult);
      return next();
    }
  } catch (err){
    return next({
      log: `Express error handler caught in userController.newUser: ${err.message}`,
      status: 500,
      message: { err: 'Express error handler caught error'}
    })
  }
  
}

//auth
userController.auth = async (req, res, next) => {
  const {username: username, password: password } = req.query;
  try{
    const queryStr = `SELECT * FROM Users WHERE username=$1`;
    const queryResult = await db.query(querystr, [username]);
    if(!queryResult.rows.length || queryResult.rows[0].password !== password){
      console.log('auth failed');
      res.locals.auth = { valid: false};
      return next();
    } else {
      res.locals.auth = { valid: true, name: queryResult.rows[0].name };
      console.log('auth successful');
      return next();
    }
  } catch (err) {
    return next({
      log: `Express error handler caught in userController.auth: ${err.message}`,
      status: 500,
      message: { err: 'Express error handler caught error'}
    })
  }
};

module.exports = userController;