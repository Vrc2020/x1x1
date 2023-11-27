const { MessageEmbed } = require("discord.js");
const { MessageButton } = require("discord-buttons");

exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setDescription(`**:video_game:+FpsGta Linki.**`)
        .setColor("RANDOM")

    const btn = new MessageButton()
        .setStyle("url")
        .setLabel("+FpsGta Link")
        .setURL(`https://s2.dosya.tc/server18/u1pdqv/STCNR.rar.html`)

    await message.channel.send({
        buttons: btn,
        embed: embed
    })
}
exports.conf = {
    aliases: ["200f"]
}

exports.help = {
    name: "200f"
}