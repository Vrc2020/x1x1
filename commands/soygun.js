const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
let slm = [ "$85 Dolar Soydun",
  "$10 Dolar Soydun",
  "Ahhaa Polise Yakalandın.",
  "$1 Dolar Soydun",
  "$120 Dolar Soydun",
  "$250 Dolar Soydun",
  "Market Sahibi Tarafından Tecavüze Uğradın.",
  "$800 Dolar Soydun!",
  "$950 Dolar Soydun",
  "$1.000 Dolar Soydun",
  "$2.500 Dolar Soydun",
  "$2.000.000 Dolar Soydun",         
  "$1.485 Dolar Soydun",
  "$50.000 Dolar Soydun",
  "$7.850 Dolar Soydun",
  "$20.040.010 Dolar Soydun",
  "$31 Dolar Soydun",
  "$16.055.330 Dolar Soydun",        
  "$7.312.011 Dolar Soydun",           
  "$24.657 Dolar Soydun",
  "$89.652 Dolar Soydun",
  "Polis Seni Yakaladı Ve Jopu götüne soktu.",
  "$278.545 Dolar Soydun",
  "Silahçı Dükkanını soymaya çalıştın ve dükkan sahibi götüne kalaşnikof soktu.",
  "$578.546 Dolar Soydun",
  "$50.423.017 Dolar Soydun",         
  "$875.135 Dolar Soydun",
  "$205.598 Dolar Soydun",
  "$975.124 Dolar Soydun",
  "$356.451 Dolar Soydun",
  "BÜYÜK VURGUN!$1.308.020.105 Dolar Soydun!",
  "VURGUN!$100.000.000 Dolar Soydun!", ];
   if(message.channel.id === "1037350958906228827")
message.channel.send(
  
  "**Soyguna gidiliyor...**"
  
  ).
   then(m => {setTimeout(() => {   
     m.edit("**Soyguna gittin...**")
      
     m.edit(new Discord.MessageEmbed()
       .setTitle('**Soygun Yaptın!**')
       .addField('**Soyulan Para: **',`${slm.random()}`)
       .setColor('GREEN'))
     }, 7000)
  
})
   

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'soygun'
};
