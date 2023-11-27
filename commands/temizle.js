const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        // Yetkin Yok Kodu
        if(!message.member.hasPermission("ADMINISTRATOR")){
            const SWEET = new Discord.MessageEmbed()
            .setDescription(`Bu komudu kullanmak için gerekli yetkilere sahip değilsin.`)
            .setColor('BLACK')
            return message.channel.send(SWEET)
        }

        // Let Tanımları
        let miktar = args[0]
        
         // Hata Mesajları
        if(miktar > 100){
            const SWEET = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **En Fazla \`100\` Mesaj Silebilirim**`)
            .setColor('BLACK')
            .setFooter('•Samp Türkiye CnR•')
            return message.channel.send(SWEET)
        }
        if(!miktar){
            const SWEET = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Silinecek Mesaj Sayısını Gir.**`)
            .setColor('BLACK')
            .setFooter('•Samp Türkiye CnR•')
            return message.channel.send(SWEET)
        }
        if(isNaN(miktar)){
            const SWEET = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Harf Değil, Rakam Girmelisin.**`)
            .setColor('BLACK')
            .setFooter('•Samp Türkiye CnR•')
            return message.channel.send(SWEET)
        }
        
        
        // Sil
        if(miktar){
            message.channel.bulkDelete(miktar)
            
            const SWEET = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Başarıyla ${miktar} Adet Mesaj Sildim**`)
            .setColor('BLACK')
            .setFooter('•Samp Türkiye CnR•')
            return message.channel.send(SWEET).then(cmf => {
                cmf .delete({timeout: 5000})
            })
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Temizle','Sil','SİL','sil','TEMİZLE']
}

exports.help = {
    name: 'temizle'
}