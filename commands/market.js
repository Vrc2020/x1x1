const { MessageEmbed } = require("discord.js");
const { MessageButton } = require("discord-buttons");

exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setDescription(`**💰Market yok öldü gitti bitti.**`)
        .setColor("RANDOM")

    const btn = new MessageButton()
        .setStyle("url")
        .setLabel("Market yok öldü")
        .setURL(`https://media.tenor.com/tmwmfE-P_wYAAAAC/nah.gif`)

    await message.channel.send({
        buttons: btn,
        embed: embed
    })
}
exports.conf = {
    aliases: ["market"]
}

exports.help = {
    name: "market"
}