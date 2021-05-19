const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args) => {
    let r = Math.random().toString(36).substring(7);
    message.channel.send(r);
}

    