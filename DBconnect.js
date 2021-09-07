var mysql = require('mysql');

config = {
   host: '<your_hostname or ip>',
   user: '<your_username>',
   password: '<your_password>',
   database: '<database_name>'
}
var connection = mysql.createConnection(config); 
connection.connect(function(err){
  if (err){
    console.log('error connecting:' + err.message);
  }
  console.log('connected successfully to DB.');
});

module.exports ={
     connection : mysql.createConnection(config) 
} 
