var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "friends"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    //once successfully connected, you may want to query your database for the info you'll need later!
  }
});

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    connection.query("SELECT * FROM profiles", function(data) {
      res.json(data);
    });
  });

  app.post("/api/friends", function(req, res) {});
};
