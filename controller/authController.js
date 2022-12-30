var Server = require("../model/serverModel");

module.exports = {
  login: function (req, res) {
    Server.getData(req.con, function (err, rows) {
      const servers = rows;
      res.render("auth/pages/loginPage", { data: rows });
    });
  },
  authlogin: function (req, res) {
    var serverID = req.body.server;

    con.query(
      `SELECT * FROM server WHERE ID = ${serverID}`,
      function (err, rows) {
        console.log(rows);
      }
    );

    Server.postLogin(req, function (err) {});
  },
};
