const { MessageEmbed } = require('discord.js');
module.exports.run = async(client, message, args) => {
    const icon = message.guild.iconURL();
    const normativas = new MessageEmbed()
        .setTitle('Normativas')
        .setAuthor('Arkanus RP', icon)
        .setURL('https://cdn.discordapp.com/attachments/790840877446332417/807725418332946492/NORMATIVA_DE_DESTINY_ROLEPLAY.pdf')
        .addField('**Gracias por leer las normativas**', '*Para descargar click en el titulo*')
        .setThumbnail('https://cdn.discordapp.com/attachments/802424741331468318/804842911412912158/logo.png')
        .setTimestamp()
    message.channel.bulkDelete(1, true)
    message.author.send(normativas);
}