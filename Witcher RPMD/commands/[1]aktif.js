const { MessageEmbed } = require("discord.js")
const client = global.client;
const conf = global.config;

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new MessageEmbed().setTitle("İşlem Başarısız").setDescription(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`).setColor("RED").setFooter("The Witcher")).then(m => m.delete({timeout: 5000})).catch(err => {});

    message.channel.send(new MessageEmbed()
    .setTitle('SUNUCU AKTIF')
    .setAuthor(conf.sunucuisim)
    .setColor("GREEN")
    .setImage(`https://cdn.discordapp.com/attachments/855384315188609035/873845443107356702/Aktif.gif`)
    .setDescription(`**Sunucuya ve TeamSpeak 3 sunucumuza bağlanmak için; \n\n Sunucu IP = connect ${conf.sunucuIp} \n TeamSpeak IP = ${conf.tsIp} \n\n İyi Roller İyi Oyunlar...**`)
    .setFooter('The Witcher')
    )    
    message.channel.send("@everyone").then(m => m.delete({timeout: 5000})).catch(err => {})



  }

exports.config = {
    name: "aktif",
    guildOnly: true,
    aliases: [],
  };