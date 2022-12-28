module.exports = {
  getData: function (con, callback) {
    con.query(`SELECT * FROM server`, callback);
  },
};
