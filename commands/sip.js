const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setDescription(`**Sunucu IP** **:** **server.sampturkiyecnr.com**\n
                         **Sunucu Sayısal IP** **:** **54.38.218.179**`)
        .setColor("RANDOM")
    
     await message.channel.send({
        embed: embed
    })
}
exports.conf = {
    aliases: ["sip","ip"]
}

exports.help = {
    name: "sip"
}