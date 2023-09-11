require("./config")
require("../db/connector") //database connector

const booleans = (val) => {
    return val === 1 ? true:false
}
module.exports = {
    async messageCommand(msg){
        let getCon = await msg.getContact(); //variable mendapatkan kontak
        let pesan = msg.body;

        //database variable
        let datainfo = `SELECT * FROM ${global.dbdata[4]} WHERE ${global.dbtables[0]} = ${getCon.number}`;

        const bales = (args) => {
            msg.reply(args);
        }

        switch (pesan) {
            case "!help":
                bales(global.cmdlist[0])
            break;
            case "!register":
                let regUser = `INSERT IGNORE INTO ${global.dbdata[4]} (${global.dbtables[0]}, ${global.dbtables[1]}, ${global.dbtables[2]}) VALUES (${getCon.number},0,0)`;
                data.query(regUser, [getCon.number], (err, result)=>{
                    if (err) throw err;
                    if (result.affectedRows === 1){
                        bales(`Berhasil membuat user dengan UnikID: ${getCon.number}`);
                    } else {
                        bales(`User dengan UnikID: ${getCon.number} telah dibuat sebelumnya!`);
                        return;
                    }
                });
            break;
            case "!myinfo":
                data.query(datainfo, [getCon.number], (err, result)=>{
                    if (err) throw err;
                    let dataku = result[0];
                    bales(`+${getCon.number}'s Information\n>> User Balance : ${dataku.user_balance}\n>> Banned Status : ${booleans(dataku.user_isbanned)}`)
                    console.log(dataku)
                })
                
            break;
            case "!bet":
                data.query(datainfo, [getCon.number], (err, result)=>{
                    if (err) throw err;
                    let dataku = result[0];
                    if (dataku.user_balance === 0) {
                        bales(`Your Balance Insufficient to betting!`);
                    } else {
                        if (dataku.user_balance === parseInt(pesan[1])){
                            
                        }
                    }
                })
            default:
                return;
        }
    }
}