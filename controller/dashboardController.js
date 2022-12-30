var Dashboard = require("../model/models");

module.exports = {
  index: function (req, res) {
    res.render("auth/index");
  },
  verify: function (req, res) {
    res.render("auth/pages/guest/verify");
  },
  blaster: function (req, res) {
    res.render("auth/pages/guest/blaster");
  },
  login: function (req, res) {
    Dashboard.getData(req.con, function (err, rows) {
      const servers = rows;
      res.render("auth/pages/loginPage", { data: rows });
    });
  },
};
