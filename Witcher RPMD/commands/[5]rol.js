const { MessageEmbed } = require("discord.js")
const client = global.client;
const conf = global.config;

exports.run = async (client, message, args) => {

    if (!message.member.roles.cache.has(conf.yetkiliRol)) return message.reply(new MessageEmbed().setTitle("İşlem Başarısız").setDescription(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`).setColor("RED").setFooter("The Witcher")).then(m => m.delete({timeout: 5000})).catch(err => {});

    let uye = message.guild.member(message.mentions.users.first())
    if(!uye) return message.reply(new MessageEmbed().setTitle("İşlem Başarısız").setDescription("Geçerli bir üye belirtmen gerekiyor.").setColor("RED").setFooter("The Witcher")).then(m => m.delete({timeout: 5000})).catch(err => {});
    
    let rol = message.mentions.roles.first()
    if(!rol) return message.reply(new MessageEmbed().setTitle("İşlem Başarısız").setDescription("Geçerli bir rol belirtmen gerekiyor.").setColor("RED").setFooter("The Witcher")).then(m => m.delete({timeout: 5000})).catch(err => {});

        if(message.member.roles.highest.position <= rol.position) return message.channel.send(new MessageEmbed().setTitle('İşlem Başarısız').setDescription("Almak/vermek istediğin rol senin rolünden daha yukarıda bundan dolayı işlemi gerçekleştiremem.").setColor("RED").setFooter('The Witcher')).then(m => m.delete({timeout: 5000})).catch(err => {});

        if (uye.roles.cache.find(r => r.id === rol.id)) {
            uye.roles.remove(rol).catch(err => {})
            message.channel.send(new MessageEmbed().setTitle("Rol Alındı").setDescription(`${uye} adlı üyeden ${rol} isimli rol başarılı bir şekilde alındı.`).setFooter("The Witcher").setColor("GREEN"))
            var kanal2 = message.guild.channels.cache.get(conf.rolalmaLog);
            kanal2.send(new MessageEmbed().setTitle('Rol Alındı').setDescription(`**Alınan Üye** \n${uye} (${uye.id})\n\n**Alan Yetkili**\n${message.author} (${message.author.id})\n\n**Yapılan Eylem**\n${rol} alındı.`).setColor("RANDOM").setFooter('Nazlı <3'))
        } else {
            uye.roles.add(rol).catch(err => {})
            message.channel.send(new MessageEmbed().setTitle("Rol Verildi").setDescription(`${uye} adlı üyeye ${rol} isimli rol başarılı bir şekilde verildi.`).setFooter("The Witcher").setColor("GREEN"))
            var kanal = message.guild.channels.cache.get(conf.rolvermeLog);
            kanal.send(new MessageEmbed().setTitle('Rol Verildi').setDescription(`**Verilen Üye** \n${uye} (${uye.id})\n\n**Veren Yetkili**\n${message.author} (${message.author.id})\n\n**Yapılan Eylem**\n${rol} verildi.`).setColor("RANDOM").setFooter('Nazlı <3'))
        }


  }

exports.config = {
    name: "rol",
    guildOnly: true,
    aliases: [],
  };