var Pages = require("../model/models")

module.exports = {

  index: function(req, res) {
    res.render("auth/index")
  },
  verify: function(req, res) {
    res.render("auth/pages/guest/verify")
  },
  blaster: function(req, res) {
    res.render("auth/pages/guest/blaster")
  },
  login: function(req, res) {
    Pages.getData(req.con, function(err, rows) {
      // console.log(rows)
      res.render("auth/pages/loginPage", { data: rows })
    })
  },
}
