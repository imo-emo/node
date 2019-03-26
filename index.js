// const mysql = require("mysql");
// let connection = mysql.createConnection({
//     host: 'znydqamysql.mysqldb.chinacloudapi.cn',
//     user: 'znydqamysql%znydqa',
//     port:'3306',
//     password: 'IcesCream@Znyd',
//     database: 'com.mysql.jdbc.Driver'
// });
   
// connection.connect();
   
// connection.query('SELECT * from help_center', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });
let fs = require("fs");
fs.readFile("input.txt",(err,data)=>{
    console.log(data.toString());
})