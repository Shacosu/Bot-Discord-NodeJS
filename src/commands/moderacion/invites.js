const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args) => {
    // if (message.member.hasPermission("ADMINISTRATOR")) {}
    let user = message.mentions.users.first() || message.author
    let invites = await message.guild.fetchInvites(invites => invites.forEach(invite))
    let userInvites = invites.filter(u => u.invites && u.inviter.id === user.id)
    if (invites.length === 0) return message.channel.send(`${user.username} tienes 0 invitaciones`).then(msg => msg.delete({ timeout: 10000 }));
    const newUses = invites.filter(inv => inv.uses !== 0)
    for (const i in newUses) {
        console.log(i)
    }




    // const newEmbed = new MessageEmbed()
    //     .setTitle(`${user.username}`)
    //     .addField('Has invitado:', )

}