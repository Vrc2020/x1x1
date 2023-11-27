const { MessageEmbed } = require("discord.js");
const { MessageButton } = require("discord-buttons");

exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setDescription(`**🎬YouTube Kanal Linki.**`)
        .setColor("RANDOM")

    const btn = new MessageButton()
        .setStyle("url")
        .setLabel("Youtube Kanal")
        .setURL(`https://www.youtube.com/channel/UCgua1eOl3AYqyIyLoOOf4tw`)

    await message.channel.send({
        buttons: btn,
        embed: embed
    })
}
exports.conf = {
    aliases: ["yt"]
}

exports.help = {
    name: "yt"
} 