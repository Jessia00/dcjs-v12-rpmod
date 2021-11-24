const { MessageEmbed } = require("discord.js")
const client = global.client;
const conf = global.config;

exports.run = async (client, message, args) => {

    if (!message.member.roles.cache.has(conf.whitelistRol)) return message.reply(new MessageEmbed().setTitle("İşlem Başarısız").setDescription(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`).setColor("RED").setFooter("The Witcher")).then(m => m.delete({timeout: 5000})).catch(err => {});

    message.channel.send(new MessageEmbed()
    .setTitle(`Sunucu Bilgileri`)
    .setColor("PURPLE")
    .setDescription(`**Sunucuya bağlanmak için gerekli bilgiler; \n\n Sunucu IP = ${conf.sunucuIp} \n TeamSpeak3 IP = ${conf.tsIp} \n\n NOT = Sunucuya girmeden yukarıyı kontrol ederek bakım veya restart durumunu görebilirsiniz. Aktif verilmemişse giriş sağlamayınız.**`)
    .setFooter(`${message.author.tag} | The Witcher`)
    )



  }

exports.config = {
    name: "ip",
    guildOnly: true,
    aliases: [],
  };