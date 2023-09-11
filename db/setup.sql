CREATE DATABASE whatsapp_bot;
USE whatsapp_bot; --Buat dan Masuk kedalam database whatsapp_bot

CREATE TABLE IF NOT EXISTS datauser(
    whatsapp_num BIGINT(25) PRIMARY KEY NOT NULL,
    user_balance BIGINT(12) NOT NULL,
    user_isbanned BOOLEAN
); --Membuat table dengan nama whatsapp_num sebagai id unik
--user_balance sebagai balance coin
--user_isbanned adalah keterangan jika user belum di banned