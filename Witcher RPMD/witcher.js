const Discord = require("discord.js")
const client = global.client = new Discord.Client();
const fs = require("fs");
const conf = global.config = require("./config.js")
require('./util/Loader.js')(client);

global.client = client;
global.conf = conf;

/// Commands Klaösrünü Bağlama///
client.commands = new Discord.Collection();                /// Witcher
client.aliases = new Discord.Collection();                 /// Witcher
fs.readdir('./commands/', (err, files) => {                /// Witcher
  if (err) console.error(err);                             /// Witcher
  console.log(`${files.length} komut yüklenecek.`);        /// Witcher
  files.forEach(f => {                                     /// Witcher
    let props = require(`./commands/${f}`);                /// Witcher
    console.log(`Witcher <3 Nazlı`)                        /// Witcher
    client.commands.set(props.config.name, props);         /// Witcher
    props.config.aliases.forEach(alias => {                /// Witcher
      client.aliases.set(alias, props.config.name);        /// Witcher
    });
  });
})

/// Token ///
client.login(conf.token)