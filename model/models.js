module.exports = {
  getData: function (con, callback) {
    con.query("SELECT * FROM server", callback);
  },

  getByUser: function (con, email, password, callback) {
    con.query(
      `SELECT * FROM biodata WHERE email = ${email} AND password =${password}`,
      callback
    );
  },

  create: function (con, data, callback) {
    con.query(
      `INSERT INTO biodata SET 
      nama = '${data.nama}', 
      alamat = '${data.alamat}'`,
      callback
    );
  },

  update: function (con, data, id, callback) {
    con.query(
      `UPDATE biodata SET 
      nama = '${data.nama}', 
      alamat = '${data.alamat}' 
      WHERE id_biodata = ${id}`,
      callback
    );
  },

  destroy: function (con, id, callback) {
    con.query(`DELETE FROM biodata WHERE id_biodata = ${id}`, callback);
  },
};
