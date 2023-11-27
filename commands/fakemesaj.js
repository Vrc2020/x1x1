const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  // Yetkin Yok Kodu
        if(!message.member.hasPermission("ADMINISTRATOR")){
            const SWEET = new Discord.MessageEmbed()
            .setDescription(`Bu komutu kullanabilmek için bana sakso çekmelisin :)`)
            .setColor('BLACK')
            return message.channel.send(SWEET)
          }
  await message.delete();
  const csu = message.mentions.users.first();
  const msg = args.slice(1).join(" ");
  if (!csu)
    return message
      .reply("Birisini Etiketle")
      .then(m => m.delete({ timeout: 5000 }));
  if (!msg)
    return message
      .reply("Bir Mesaj Yaz")
      .then(m => m.delete({ timeout: 5000 }));

  const hook = await message.channel
    .createWebhook(csu.username, {
      avatar: csu.avatarURL()
    })
    .then(async a => {
      await a.send(msg);
      a.delete({ timeout: 100 });
    });
};

exports.conf = {
  aliases: []
};
exports.help = {
  name: "fakemesaj"
};