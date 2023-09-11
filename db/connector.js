const mysql = require("mysql");
require("../lib/config");

module.exports = {
    async globalCreateConnection(){
        global.data = mysql.createConnection({
            host        : global.dbdata[0],
            user        : global.dbdata[1],
            password    : global.dbdata[2],
            database    : global.dbdata[3]
        })
        data.connect(err =>{
            if (err) throw err;
            console.log("Databases is running!")
        })
        return data;
    }
}