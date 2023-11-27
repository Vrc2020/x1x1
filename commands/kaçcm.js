const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
let slm = ["``0CM``\Yarrak yok amkkk","``1CM``\nƐ=>","``2CM``\nƐ==>","``3CM``\nƐ===>","``4CM``\nƐ====>","``5CM``\nƐ=====>","6CM\nƐ======>","``7CM``\nƐ=======>","``8CM``\nƐ========>","``9CM``\nƐ=========>","``10CM``\nƐ==========>","``11CM``\nƐ===========>","``12CM``\nƐ============>\nKalkıyor kalkıyor...","``13CM``\nƐ=============>", "``14CM``\nƐ==============>", "``15CM``\nƐ=============>\nÇıkarda gölgesinde rakı içek aq", "``16CM``\nƐ=============>\nUçak?", "``17CM``\nƐ=============>\nSağlam linkmiş.", "``18CM``\nƐ=============>\nSayın yolcularımız 31 NOLU uçağımız havalimanından kalkmaktadır.", "``19CM``\nƐ=============>\nKırk yıllık kampçıyım böyle çadır görmedim a*k", "``20CM``\nƐ=============>\nKuşa fazla yem verdin galiba?", "`21CM`\nƐ=============>\nMalzeme kaç torba çimento attın aq?", "``31CM``\nƐ=======================>\n BASSSSSSSSSSSSSSSSSSSSSS." ];
if(message.channel.id === "1037350958906228827") message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${message.author} **Bekle Kardeşim Ölçüyorum...**`)).                    
then(m => {setTimeout(() => {
m.edit(new Discord.MessageEmbed().setDescription(`${message.author} **Malafatın __${slm.random()}__ 🍆**`))
}, 4500)
})
   

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kaçcm'
};
