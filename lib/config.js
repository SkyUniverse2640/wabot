global.whitelist = ["SkyUniverse Nanz", "6287889015796", true] // Nama, Nomer Telepon, isDev?

/*Database configuration*/
global.dbdata = ["localhost", "root", "", "whatsapp_bot", "dataauser"] // Host, User, Password, DB, Tables
global.dbtables = ["whatsapp_num", "user_balance", "user_isbanned"] // Nomer telepon sebagai id utama, balance, isbanned?

global.cmdlist = [`Welcome To SkyUniverse Bot\n
Commands Are Available
>> !help
>> !register
>> !myinfo
>> !bet <amount>
>> !transfer <user> <balance>
>> !changeprefix
>> !addpart <number>
*Note: to using addpart which is add participant to group, this bot have to become an admin!*\n
Commands Are Available For Dev
>> !addbalance <user> <amount>
>> !supplytoken
>> !msginfo`]