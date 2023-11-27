const Discord = require("discord.js");
const db = require("quick.db");
const client = new Discord.Client();
const { Client, Util } = require("discord.js");
const disbut = require("discord-buttons")(client);
const fs = require("fs");
const axios = "axios";
require("./util/eventLoader")(client);

client.ayarlar = {
  prefix: "/", // prefix
  sahip: "951158611910991913", // sahip
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  const data = require("quick.db");
  console.log("");
  console.log(`${files.length} kadar komut yüklenecek.`);
  files.forEach(async (f) => {
    let props = require(`./commands/${f}`);
    console.log(`Yüklendi: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach((alias) => {
      client.aliases.set(alias, props.help.name);
    });
  });
  console.log("Hazır");
});

client.reload = (command) => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach((alias) => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = (command) => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./commands/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach((alias) => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = (command) => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = (message) => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.permissions.has("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.permissions.has("BAN_MEMBERS")) permlvl = 2;
  if (message.member.permissions.has("ADMINISTRATOR")) permlvl = 2;
  if (message.author.id === message.guild.owner.id) permlvl = 4;
  return permlvl;
};

client.login(process.env.token);
const moment = require("moment");
moment.locale("tr");
const { S_IFREG } = require("constants");
const data = require("quick.db");
const logs = require("discord-logs");
logs(client);
///////////////////////////////////////////////////////////////////////////////////
//Sweet Oynuyor kısmı
///////////////////////////////////////////////////////////////////////////////////
client.on("ready", () => {
  setInterval(() => {
    const Gamedig = require("gamedig");
    Gamedig.query({
      type: "samp",
      host: "54.38.218.179",
    }).then((state) => {
      client.user.setActivity(`Online CnR Players: ${state.players.length}`);
    });
  }, 15000);
});
/////////////////////////////////////////////////////////////////////
//Mod Paylasım
///////////////////////////////////////////////////////////////////
client.on("message", (m) => {
  if (m.channel.id !== "992403852945006653") {
    //ID Yazın
    return;
  }
  if (m.author.id === m.guild.ownerID && client.user.id) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});
////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//cnr medya
///////////////////////////////////////////////////////////////////
client.on("message", (m) => {
  if (m.channel.id !== "1155530566385549413") {
    //ID Yazın
    return;
  }
  if (m.author.id === m.guild.ownerID && client.user.id) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});
////////////////////////////////////////////////////////////////////
//cnr medya tepki
/////////////////////////////////////////////////////////
client.on("message", async (message) => {
  if (message.channel.id !== "1155530566385549413") return;
  message.react("👍");
  message.react("😎");
  message.react("🌹");
  message.react("🤣");
  message.react("💀");
  message.react("🥵");
});

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  SUNUCU BİLGİ                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////
const { getBorderCharacters, table } = require('table') 

client.on('ready', async() => {

    const Gamedig = require('gamedig');

    if(!db.get('cnraim')) 
    {
        const kanal = client.channels.cache.get('1024452261251907644');
        await kanal.send(new Discord.MessageEmbed().setTitle('YarraH...')).then((mesaj_db) => {
            db.set('cnraim',  { mesajın_kanalı: kanal.id, mesaj_id: mesaj_db.id }); 
        });

    };


    var edit_kanalID = db.get('cnraim').mesajın_kanalı;
    var edit_mesajID = db.get('cnraim').mesaj_id;
    

    var mesaj;
    try{
        mesaj = await client.channels.cache.get(edit_kanalID).messages.fetch(edit_mesajID);
    } catch(err) {
        console.log('***YARRAH***\nHata: '+err);
    }

    

    setInterval(async() => {
        const sunucu = await Gamedig.query({
            type: 'samp', 
            host: 'server.sampturkiyecnr.com'
 
        });

         

       const config = {
        border: getBorderCharacters(`void`),
        columnDefault: {
          paddingLeft: 0,
          paddingRight: 1
        },
        drawHorizontalLine: () => {
          return false;
        }
      };

      

      let players = [['ID\n', 'Name\n']];
      let skor = [];
      let ping = [];
      sunucu.players.forEach((player) => {
        players.push([`${player.raw.id}`, player.name]);
        skor.push(player.raw.score)
        ping.push(player.raw.ping)
      });
      
      let cnr;
      if (players.length === 0)
        cnr = 'AMK';
      else
        cnr = table(players, config);

    if(!skor.length) skor = ['...'];
    if(!ping.length) ping = ['...'];


        const embed = new Discord.MessageEmbed()
        .setAuthor(`SA:MP Türkiye CnR`, mesaj.guild.iconURL({dynamic: true, size:1024}))
        .addFields([
            { name: `Sunucu Zamanı`, value: `\`\`\`${sunucu.raw.rules.worldtime}\`\`\``, inline:true },
            { name: `Oyuncu Sayısı`, value: `\`\`\`${sunucu.players.length}/${sunucu.maxplayers}\`\`\``, inline: true },
           { name: `Sunucu IP`, value: `\`\`\`server.sampturkiyecnr.com\`\`\``, inline:false }
        ])
        .setColor('RANDOM')
         .setTimestamp();
        
        

        if (cnr.length < 1024 && players[1] && players[1].length) {
            if (players[1][1])
              embed.addFields([
                { name: 'Aktif Oyuncular ', value: `\`\`\`${cnr}\`\`\``, inline:true },
                { name: '⁣', value: `\`\`\`Score\`\`\`\`\`\`\n${skor.join('\n').replace(/undefined/g, '...')}\`\`\``, inline:true },
               { name: '⁣', value: `\`\`\`Ping\`\`\`\`\`\`\n${ping.join('\n').replace(/undefined/g, '...')}\`\`\``, inline:true },
            ]);
        }

      

        

        mesaj.edit(embed);

    }, 9000)


})

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  SUNUCU BİLGİ SON                                                     //
////////////////////////////////////////////////////////////////////////////////////////////////////////
client;

//Görsel Paylaşım
///////////////////////////////////////////////////////////////////
client.on("message", (m) => {
  if (m.channel.id !== "iptal") {
    //ID Yazın
    return;
  }
  if (m.author.id === m.guild.ownerID && client.user.id) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});
////////////////////////////////////////////////////////////////////
//Reklam Engel Baş                                                //
////////////////////////////////////////////////////////////////////
const reklam = [
  ".com",
  ".net",
  ".xyz",
  ".tk",
  ".pw",
  ".io",
  ".me",
  ".gg",
  "www.",
  "https",
  "http",
  ".gl",
  ".org",
  ".com.tr",
  ".biz",
  "net",
  ".rf",
  ".gd",
  ".az",
  ".party",
  ".gf",
  ".31",
];
client.on("messageUpdate", async (old, nev) => {
  if (old.content != nev.content) {
    let i = await db.fetch(`reklam.${nev.member.guild.id}.durum`);
    let y = await db.fetch(`reklam.${nev.member.guild.id}.kanal`);
    if (i) {
      if (reklam.some((word) => nev.content.includes(word))) {
        if (nev.member.hasPermission("BAN_MEMBERS")) return;
        //if (ayarlar.gelistiriciler.includes(nev.author.id)) return ;
        const embed = new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setDescription(
            ` ${nev.author} , **Mesajını Editleyerek Reklam Yapmaya Çalıştı!**`
          )
          .addField("Mesajı:", nev);
        ("");

        nev.delete();
        const embeds = new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setDescription(
            ` ${nev.author} , **Mesajı Editleyerek Reklam Yapamana İzin Veremem!**`
          );
        client.channels.cache.get(y).send(embed);
        nev.channel.send(embeds).then((msg) => msg.delete({ timeout: 5000 }));
      }
    } else {
    }
    if (!i) return;
  }
});

client.on("message", async (msg) => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;
  let y = await db.fetch(`reklam.${msg.member.guild.id}.kanal`);

  let i = await db.fetch(`reklam.${msg.member.guild.id}.durum`);
  if (i) {
    if (reklam.some((word) => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          //  if (!ayarlar.gelistiriciler.includes(msg.author.id)) return ;
          msg.delete({ timeout: 750 });
          const embeds = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setDescription(
              ` <@${msg.author.id}> , **Bu Sunucuda Reklam Yapmak Yasak!**`
            );
          msg.channel.send(embeds).then((msg) => msg.delete({ timeout: 5000 }));
          const embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setDescription(` ${msg.author} , **Reklam Yapmaya Çalıştı!**`)
            .addField("Mesajı:", msg);
          client.channels.cache.get(y).send(embed);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Reklam Engel Son                                                                                    ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//otorol Başlangıc                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("guildMemberAdd", async (member) => {
  let csdb = require("croxydb");
  let data = csdb.get("csotorol." + member.guild.id);

  if (data) {
    let rol = member.guild.roles.cache.get(data);
    if (rol) {
      if (!member.user.bot) {
        await member.roles.add(rol);
      }
    }
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////
//otorol son                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////
