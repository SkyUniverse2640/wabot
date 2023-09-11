const cmd = require("./lib/command") //lib commands
module.exports = {
    async onMessageHandler(msg){
        if (!msg) return;
        let getPesan = await msg.getChat();
        // Membuat function penghapusan pesan yang melewati batas
        try{
            let pesanID = await client.getChatById(getPesan.id._serialized);
            let totalPesan = await pesanID.fetchMessages();
            if (totalPesan > 100) {
                console.log(`Pesan Mencapai Limit`);
                getPesan.clearMessages();
            }
            
        } catch (e){
            console.error(e)
        }
        const waktu = (new Date()/1000).toFixed(0);
        const limitWaktu = waktu - msg.timestamp;
        if (limitWaktu > 10000) return; //Jika pesan yang dikirim lebih dari 10 detik lalu maka ignore;
        cmd.messageCommand(msg)
    }
}