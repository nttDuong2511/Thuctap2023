const mysql = require('mysql2');

function connectDatabase(){
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:'',
        database: 'qlda'
      });
  return connection;
      
}

module.exports = connectDatabase;