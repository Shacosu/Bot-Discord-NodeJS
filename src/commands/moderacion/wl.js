// const { MessageEmbed } = require("discord.js");
// module.exports.run = async (client, message, args) => {
// 	let channelName = "WL-" + message.author.username;
//     const icon = message.guild.iconURL();
// 	const channel = await message.guild.channels.create(channelName); // Creamos el canal
// 	channel.setParent("833355023479078953"); // Hacemos que el canal se cree en una categoria
// 	channel.updateOverwrite(message.guild.id, {SEND_MESSAGE: false, VIEW_CHANNEL: false,}); // Quitamos los permisos a todos
// 	channel.updateOverwrite(message.author, {SEND_MESSAGE: true, VIEW_CHANNEL: true,}); // Le damos permiso solo al que coloco el comando

//     await client.channels.cache.get(channel.id).send('Estas listo para comenzar ?  si / no ')
//     await channel.messages.channel.awaitMessages(msg => msg.author.id === message.author.id, { max: 1, time: 30000, errors: ['time']})
//         .then(collected => {
//             if (collected.first().content === "si") return channel.send(firstQuestion()).then(async(r) => 
//                 await r.react('🅰'), 
//                 await r.react('🅱'))
//             if (collected.first().content === "no") return channel.send('Desea salir de la whitelist ?');
//         }).catch(() => { return message.channel.send('TIEMPO') })

//     function firstQuestion() {
//         const embed = new MessageEmbed()
//             .setTitle('Pregunta numero [1]')
//             .setAuthor('Arcanus Roleplay', icon)
//             .setDescription('Que significa CK \nA) Car Kill \n B) Character Kill')
//             .setFooter('Constas de 10 segundos para responder!')
//             .setTimestamp()
//             return embed;
//     }
// };
