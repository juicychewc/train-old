const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");
// var auth = require('./authorize');

//Routes
// router.use('/authorize', auth);

// If no route hit, send  React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
