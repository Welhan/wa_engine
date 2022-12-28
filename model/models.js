module.exports = {
  getData: function(con, callback) {
    con.query(`SELECT * FROM server WHERE ID = 1`, callback)
  },
}

