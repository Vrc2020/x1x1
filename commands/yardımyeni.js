const { MessageEmbed } = require("discord.js");
const { MessageButton } = require("discord-buttons");

exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
       .setTitle(client.user.username+" CnR Komutlar")
          .setDescription(
    `             
\`🔴/kb🔴\` : **DC kullanıcı bilgilerini gösterir.**\n
\`🔴/sip-/ip🔴\` : **Sunucu İP gösterir.**\n
\`🔴/yt🔴\` : **Youtube kanal link gösterir.**\n
\`🔴/market🔴\` : **Market link gösterir.**\n
\`🔴/gta🔴\` : **Ggta link gösterir.**\n
\`🔴/iliskilendir [kod]🔴\` : **Oyun hesabını discord ile ilişkilendirme.**\n
\`🔴/bilgi [nick]🔴\` : **Kisinin istatisliklerini gosterir.**\n
\`🔴/Kaçcm🔴\` : **Malafatınızı ölçer.**\n
\`🔴/gay🔴\` : **Yüzde Kaç Gay olduğunuzu gösterir.**\n
\`🔴/soygun🔴\` : **Soygun Yap.**\n

`)
    .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://2.bp.blogspot.com/-rE8MrO_9OPE/UhH_f_7T6nI/AAAAAAAAHig/YLIuv_bYiCE/s400/267.gif')
    .setColor("BLUE")
  

   
    const btn = new MessageButton()
        .setStyle("url")
        .setLabel("🎬YouTube Kanal")
        .setURL(`https://www.youtube.com/channel/UCgua1eOl3AYqyIyLoOOf4tw`)
    
    let btn2 = new MessageButton()
        .setStyle("url")
        .setLabel("🎲Gta Link")
        .setURL(`https://dosya.co/eil7irjmkebn/GTA_STCNR.rar.html`)
    
     if(message.channel.id === "1037350958906228827")
    
    
    await message.channel.send({
        buttons: [btn,btn2,],
        embed: embed
    })
}
exports.conf = {
    aliases: ["yardım","yardim"]
}

exports.help = {
    name: "yardım"
}