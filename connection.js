const mysql = require("mysql");
const config = require("./dataconnection.json")
module.exports = {
    async connectDB(){
        global.data = mysql.createConnection({
            host        :   config.host,
            user        :   config.user,
            password    :   config.password,
            database    :   config.db
        });
        data.connect(err =>{
            if (err) throw err;
            console.log("Connected To Database!")
        });
        return data;
    }
}