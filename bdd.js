const { database_user, database_password, database_base, database_host, database_port } = require('../config.json');
var mysql = require('mysql')

var config = {
    host: database_host,
    port: database_port,
    user: database_user,
    password: database_password,
    database: database_base
};

var connection =mysql.createConnection(config);
connection.connect(function(err){
    if (err){
      console.log('error connecting:' + err.stack);
    }
    console.log('connected successfully to DB.');
  });
  
  module.exports ={
    connection : mysql.createConnection(config) 
} 