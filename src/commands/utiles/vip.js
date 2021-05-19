const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args) => {
    const embed = new MessageEmbed()
        .setTitle('Ingresa aqui para ver los VIPs!')
        .setURL('https://docs.google.com/document/d/1hTUasm2CyjZfWC2wjvUthBZH9jyMkV2dBUHF9YtOpNY/edit')
        .setAuthor('Arcanus RP', 'https://media.discordapp.net/attachments/780970578319638528/823099683324297236/circle-cropped.png?width=599&height=599')
        .setFooter('Comprando vip nos ayudas a mejorar y ser un server mejor!')
        .setTimestamp()
        message.delete()
        message.reply('**Se ha enviado un mensaje directo con toda la informacion.**').then(msg => msg.delete({ timeout: 5000 }));
        message.author.send(embed);
}



