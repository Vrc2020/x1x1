const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  let username = `${message.author.id}`;
if(message.mentions.members.first()) username = message.mentions.members.first().user.username+' is';
if(message.mentions.users.first()) username = message.mentions.users.first().username+' is';
let random = Math.floor(Math.random(100) * 100);
  
  if(message.channel.id === "1037350958906228827")
  
  
return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle('Gay Yüzdesi Ölçer').setDescription(`<@${username}> Kullanıcısı %${random} gay 🏳️‍🌈`));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'gay'
};