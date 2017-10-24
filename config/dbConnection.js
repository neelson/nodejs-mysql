var mysql = require('mysql');

var connMySQL = function(){
    return connection = mysql.createConnection({
        host: 'host',
        user: 'user',
        password: 'password',
        database: 'database'
    });
}

module.exports = function(){
    return connMySQL;
}