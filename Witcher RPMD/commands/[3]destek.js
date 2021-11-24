const { MessageEmbed } = require("discord.js")
const client = global.client;
const conf = global.config;

exports.run = async (client, message, args) => {

    if (!message.member.roles.cache.has(conf.whitelistRol)) return message.reply(new MessageEmbed().setTitle("İşlem Başarısız").setDescription(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`).setColor("RED").setFooter("The Witcher")).then(m => m.delete({timeout: 5000})).catch(err => {});

    message.channel.send(new MessageEmbed()
    .setTitle(`Destek Bildirisi`)
    .setColor("RANDOM")
    .setDescription(`Destek talebiniz yetkililere ulaştırıldı. Yetkililer en kısa sürede sizinle ilgilenecektir. Anlaşıyınız için teşekkürler.`)
    .setFooter('The Witcher')
    )
    message.channel.send(`<@&` + conf.yetkiliRol + `>`).then(m => m.delete({timeout: 1500})).catch(err => {})



  }

exports.config = {
    name: "destek",
    guildOnly: true,
    aliases: [],
  };