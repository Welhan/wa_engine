module.exports = {
  getData: function (con, callback) {
    con.query("SELECT * FROM server", callback);
  },
  getbyID: function (con, callback) {
    con.query(`SELECT * FROM server WHERE ID = ${serverID}`, callback);
  },
};
