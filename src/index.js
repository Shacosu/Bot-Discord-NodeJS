const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const fs = require('fs').promises;
// const { updatePlayerCount } = require('./commands/utiles/statusbot')
const path = require('path');
const { token, prefix, streamRole, streamStatusRole, RolID} = require('../config.json');
const { firstLetterM, validURL } = require('./helper');
const moment = require('moment')
const shortid = require('shortid');

client.commands = new Map();
// Obtener hora actual
let currentDate = moment().format('YYYY-MM-DD')
let currentTime = moment().format('hh:mm:ss')

client.on('ready', () => { 
  console.log('Bot activo') 
  // updatePlayerCount(client, 5)
  
});
client.on('message', async (message) => {
  let write = message.content;
  if (message.author.bot) return;
  if (message.channel.id === "822657705780052016") {
    let writeEmbed = new MessageEmbed()
          .setAuthor('Arcanus RP', 'https://cdn.discordapp.com/attachments/780970578319638528/822679629868695572/image.png')
          .setDescription(`** [⁉] Sugerencia hecha por:** <@${message.author.id}>\n- ${firstLetterM(write)}`)
          .setFooter("Si estás de acuerdo con la sugerencia ✅ y si no lo estás ❌")
          .setTimestamp()
          .setColor("RANDOM");
        message.channel.send(writeEmbed).then((r) => {
          r.react("✅");
          r.react("❌");
        });
        message.delete();
  }

  if (message.channel.id === "780269997805142027") {
    if (message.member.roles.cache.find(r => r.id === RolID)) return;
  } 

})

client.on('message', async function(message){
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  let cmdArgs = message.content.substring(message.content.indexOf(prefix)+1).split(new RegExp(/\s+/))
  let cmdName = cmdArgs.shift();
  if (client.commands.get(cmdName)) {
    client.commands.get(cmdName).run(client, message, cmdArgs)
  } else {
    message.reply('El comando ingresado no existe!').then((msg) => msg.delete({ timeout: 3000 }));
  }
});

(async function registerCommand(dir = 'commands') {
  let files = await fs.readdir(path.join(__dirname, dir)); // Creamos un arreglo llamado 'files' con todo lo que contiene la carpeta commands.
  // console.log(files)
  for (let file of files) { // Recorremos el arreglo files para encontrar mas carpetas con archivos.
    let stat = await fs.lstat(path.join(__dirname, dir, file));
    if (stat.isDirectory()) {
      registerCommand(path.join(dir, file));
    } else {
      if (file.endsWith('.js')) {
        let cmdName = file.substring(0, file.indexOf('.js'))
        let cmdModule = require(path.join(__dirname, dir, file));
        client.commands.set(cmdName, cmdModule);
        // console.log(client.commands)
      }
    }
  }
})();

// client.on("presenceUpdate", (oldPresence, newPresence) => {
//   if (!newPresence.activities) return false;
//   newPresence.activities.forEach(activity => {
//       if (activity.type == "STREAMING") {
//         if (!newPresence.member.roles.cache.has(streamRole)) return console.log('No tiene el rango');
//           newPresence.member.roles.add(streamStatusRole)
//       };
//   });
//   if (newPresence.member.roles.cache.has(streamStatusRole)) return newPresence.member.roles.remove(streamStatusRole).catch((error) => console.error(`No se pudo remover el rol, ${error}`));
// });

// client.on('guildMemberAdd', member => {
//   const welcomeEmbed = new MessageEmbed()
//   welcomeEmbed.setColor('#5cf000')
//   welcomeEmbed.setAuthor('Arkanus RP', `https://media.discordapp.net/attachments/780970578319638528/822684960670351370/Untitled.png?width=268&height=175`)
//   welcomeEmbed.setTitle('[📥] Bienvenido/a **' + member.user.username + '** a Arkanus RP eres el ciudadano nº __' + member.guild.memberCount + '__')
//   welcomeEmbed.setImage('https://cdn.mos.cms.futurecdn.net/93GAa4wm3z4HbenzLbxWeQ-650-80.jpg.webp')
//   welcomeEmbed.setTimestamp()
//   member.guild.channels.cache.find(i => i.name === 'bienvenida').send(welcomeEmbed)
// })

// client.on('guildMemberRemove', member => {
//   const goodbyeEmbed = new MessageEmbed()
//   goodbyeEmbed.setColor('#f00000')
//   goodbyeEmbed.setAuthor('Arkanus RP', `https://media.discordapp.net/attachments/780970578319638528/822684960670351370/Untitled.png?width=268&height=175`)
//   goodbyeEmbed.setTitle('[📤] Hasta Luego **' + member.user.username + '** esperamos que la hayas pasado bien en Arkanus RP')
//   goodbyeEmbed.setImage('https://gamewith-en.akamaized.net/article/thumbnail/rectangle/22183.png')
//   goodbyeEmbed.setTimestamp()
//   member.guild.channels.cache.find(i => i.name === 'bienvenida').send(goodbyeEmbed)
// })

client.login(token)

