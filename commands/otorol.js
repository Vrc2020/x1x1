const Discord = require("discord.js");
let db = require("croxydb");
module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply("Yetersiz Yetki!");
  if (!args[0])
    return message.reply(
      "Otorol Açmalı veya Sıfırlamalısın\n`!oto-rol ayarla @ROL` veya `!oto-rol sıfırla`"
    );
  if (args[0] === "sıfırla") {
    await db.delete("csotorol." + message.guild.id);
    message.reply("Sistem Başarı İle Sıfırlandı!");
  }
  if (args[0] === "ayarla") {
    let csr = message.mentions.roles.first();
    if (!csr) return message.reply("Bir Rol Etiketlemen Gerek!");
    await db.set("csotorol." + message.guild.id, csr.id);
    let cse = new Discord.MessageEmbed()
      .setTitle("Otorol Sistemi")//discord.gg/turkiye
      .setThumbnail(message.guild.iconURL())
      .setColor("BLUE")
      .setDescription(`${csr} İsimli Rol Üye Oto Rolü Olarak Ayarlandı!`)
      .setTimestamp()
      .setFooter("By xxx");
    message.channel.send(cse);
  }
};
module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "oto-rol"
};