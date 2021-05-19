const { MessageEmbed } = require('discord.js');
const util = require('minecraft-server-util');

module.exports.run = async(client, message, args) => {
    util.status('194.156.91.232', { port: 2024, enableSRV: true, timeout: 5000, protocolVersion: 47 }) 
        .then((response) => {
            const Embed = new MessageEmbed()
            .setTitle('Server Status')
            .addField('Server IP', response.host)
            .addField('Server Version', response.version)
            .addField('Online Players', response.onlinePlayers)
            .addField('Max Players', response.maxPlayers)
            message.channel.send(Embed)
        })
        .catch((error) => {
            console.error(error);
        });

    
}



