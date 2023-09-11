const {Client, LocalAuth} = require("whatsapp-web.js");
const QR = require("qrcode-terminal");
const loadDB = require("./db/connector")

//Menjalankan database mysql

// Fungsi Asinkronus global data
async function globalDataConnection(){
    // Auth Strategy
    global.client = new Client({
        authStrategy: new LocalAuth()
    })

    // Ready Event?
    client.on("ready", () => {
        console.log("Server and Client are Connected! Bot is Ready!");
        loadDB.globalCreateConnection();
    })

    // QR Event
    client.on("qr", (qr) =>{
        QR.generate(qr, {small: true});
        console.log("Scan To Continue");    
    });

    // On Loading Info Message
    client.on("loading_screen", (percent) =>{
        console.log(`Please Wait... Bot Client is ${percent}%...`)
    })

    // On Message Handler?
    client.on("message", require("./msghandler").onMessageHandler.bind(client));

    //Initialized Client
    client.initialize();
    console.log("Connecting Client To Server . . .")
    return client;
}

globalDataConnection().catch((e) => console.error(e));