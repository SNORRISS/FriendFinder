var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "friendsdb"
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    //once successfully connected, you may want to query your database for the info you'll need later!
  }
});

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    connection.query("SELECT * FROM profiles", function (data) {
      res.json(data);
    });
  });

  app.post("/api/friends", function (req, res) {
    var survey = req.body.survey;

    connection.query("insert into friends (name, picture, q1, q2, q3, q4, q5) values(?,?,?,?,?,?,?)",
      [req.body.name, req.body.picture, survey[0], survey[1], survey[2], survey[3], survey[4]],
      function (data) {

        res.json(data);
      });
  });
};
