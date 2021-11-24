const { MessageEmbed } = require("discord.js")
const client = global.client;
const conf = global.config;

exports.run = async (client, message, args) => {

    if (!message.member.roles.cache.has(conf.yetkiliRol)) return message.reply(new MessageEmbed().setTitle("İşlem Başarısız").setDescription(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`).setColor("RED").setFooter("The Witcher")).then(m => m.delete({timeout: 5000})).catch(err => {});

    let uye = message.guild.member(message.mentions.users.first())
    if(!uye) return message.reply(new MessageEmbed().setTitle("İşlem Başarısız").setDescription("Geçerli bir üye belirtmen gerekiyor.").setColor("RED").setFooter("The Witcher")).then(m => m.delete({timeout: 5000})).catch(err => {});
    
        if(message.member.roles.highest.position <= rol.position) return message.channel.send(new MessageEmbed().setTitle('İşlem Başarısız').setDescription("Almak/vermek istediğin rol senin rolünden daha yukarıda bundan dolayı işlemi gerçekleştiremem.").setColor("RED").setFooter('The Witcher')).then(m => m.delete({timeout: 5000})).catch(err => {});

        if (uye.roles.cache.has(conf.whitelistRol)) {
            message.reply(new MessageEmbed().setTitle("İşlem Başarısız").setDescription(`${uye} adlı üyede zaten whitelist rolü bulunduğu için kayıt işlemi iptal edildi.`)).then(m => m.delete({timeout: 5000})).catch(err => {});
        } else {
            uye.roles.add(conf.wihtelistRol)
            message.channel.send(new MessageEmbed().setTitle("Whitelist Verildi").setDescription(`${uye} adlı üyeye whitelist başarılı bir şekilde verildi.`).setFooter("The Witcher").setColor("GREEN"))
            var kanal = message.guild.channels.cache.get(conf.whitelistLog);
            kanal.send(new MessageEmbed().setTitle('Whitelist Verildi').setDescription(`**Verilen Üye** \n${uye} (${uye.id})\n\n**Veren Yetkili**\n${message.author} (${message.author.id})\n\n**Yapılan Eylem**\nWhitelist verildi.`).setColor("RANDOM").setFooter('Witcher Log System'))
        }


  }

exports.config = {
    name: "whver",
    guildOnly: true,
    aliases: [],
  };