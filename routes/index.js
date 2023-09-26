// <!-- Ohm Patel - 301277876 - 26th Sept. - Ohm Patel Portfolio - index.js -->

// Routes to different pages

var express = require("express");
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

router.get("/", function (req, res, next) {
  res.render("home", { title: "Home" });
});

router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});

router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Projects" });
});

module.exports = router;
