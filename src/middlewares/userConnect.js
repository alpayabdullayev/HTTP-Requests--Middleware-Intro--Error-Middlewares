const userConnect = (req, res, next) => {
  const userLogin = new Date().toISOString();
  console.log(userLogin);
  req.userLogin = userLogin;
  next();
};

module.exports = { userConnect };
