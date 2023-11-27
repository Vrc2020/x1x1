const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Pingim")
  .setColor('#f5f5f5')
  .setDescription(`${client.ws.ping} ms`)
  if(message.channel.id === "1037350958906228827")
  message.channel.send(embed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['x'],
 permLevel: 2
};
 
exports.help = {
 name: 'x',
 description: 'Botun Pingine Bakarsın',
 usage: 'x'
};