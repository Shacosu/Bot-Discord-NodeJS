const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args) => {
    const { name } = message.guild;
    const icon = message.guild.iconURL();
    if (message.member.hasPermission('ADMINISTRATOR')){     
    // message.channel.send('|| @everyone ||')
    const info = new MessageEmbed()
        .setTitle('Informacion del servidor')
        // .setURL('https://fivem://connect/73p4ra')
        .setAuthor(name, icon)
        .setDescription('- El servidor se encuentra actualmente ONLINE - :white_check_mark:')
        .addField('Ip:', 'Pronto.. :D')
        .setImage('https://media.discordapp.net/attachments/780970578319638528/822684968324825148/arkanus.jpg?width=1322&height=489')
        .setFooter('Que disfrutes del server!')
        .setTimestamp()
    message.channel.bulkDelete(1, true)
    message.channel.send(info)
    // console.log(name, region, memberCount, icon )
    }
}

