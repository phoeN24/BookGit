const userController = {};

//login

//signUp
userController.newUser = async (req, res, next) => {
  const {name, username, email, password} = req.body;

  //check if username exists
  const checkQuerystr = `SELECT * FROM users WHERE username = $1`;
  const checkResult = await db.query(checkQuerystr, [username]);
  
  if(checkResult.rows.length > 0){
    
  }
}

//auth


module.exports = userController;