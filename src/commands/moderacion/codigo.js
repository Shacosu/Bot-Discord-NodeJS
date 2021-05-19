const { MessageEmbed } = require('discord.js')

module.exports.run = async(client, message, args) => {
    const shortid = require('shortid');
    const Icon = message.guild.iconURL();
    if (message.member.hasPermission("ADMINISTRATOR")) {
            const codeRandom = shortid.generate();
            message.channel.send(embedCode(codeRandom, Icon))
            client.channels.cache.get(`830303231972343849`).send(embedCodeVerificator(codeRandom, Icon))
    }
    function embedCode(codeRandom, Icon) {
        const code = new MessageEmbed()
        .setAuthor('Arcanus Roleplay', Icon)
        .addField('Generado por:', `@${message.author.username}`)
        .setDescription(`Su ticket para tunning es: **${codeRandom}** y es __**valido**__ por [1] solo uso!`) 
        .setFooter('Favor de canjear con mecanico a cargo de tunning!')
        .setColor('RANDOM')
        .setTimestamp()
        return code;
    }
    
    function embedCodeVerificator(codeRandom, Icon) {
        const code = new MessageEmbed()
        .setAuthor('Arcanus Roleplay', Icon)
        .addField('Generado por:', `@${message.author.username}`)
        .setDescription(`Se ha generado un ticket: **${codeRandom}**`) 
        .setFooter('Reaccionar a este mensaje si es que ya se efectuo el tunning!')
        .setColor('RANDOM')
        .setTimestamp()
        return code;
    }
}

