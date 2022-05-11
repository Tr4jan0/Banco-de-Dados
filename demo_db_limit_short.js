var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aluno01",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  //Return 5 customers, starting from position 2:
  con.query("SELECT * FROM customers LIMIT 2, 5", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
