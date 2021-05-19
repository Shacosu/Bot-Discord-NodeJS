const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../../config.json');
const pagination = require('discord.js-pagination');

module.exports.run = (client, message, cmdArgs) => {

    if (message.content.startsWith(`${prefix}vip`)) {
    
    const page = new MessageEmbed()
    .setTitle('VIP Estrella Fugaz (Booster)')
    .setAuthor('ArcanusRP', 
    'https://media.discordapp.net/attachments/780970578319638528/823099683324297236/circle-cropped.png?width=702&height=702')
    .setDescription(`
                     • Rango de Vip en Discord
                     • $10.000 dinero limpio
                     • Mejora de cualquier auto N° 2
                     • (Este concepto es válido por la primera vez que se boostea y solo vale para un boost)`)
    .setThumbnail('https://media.discordapp.net/attachments/822666322051727390/823406706671353867/logo-gif.gif?width=1249&height=702')
    .setColor('#6a0dad')
    .setTimestamp()

    const page2 = new MessageEmbed()
    .setTitle('VIP Meteorito $5.000')
    .setAuthor('ArcanusRP', 
    'https://media.discordapp.net/attachments/780970578319638528/823099683324297236/circle-cropped.png?width=702&height=702')
    .setDescription(`
                     • Rango de Vip en Discord
                     • $30.000 dinero limpio
                     • Mejora auto a nivel 2
                     • Moto avaluada en $40.000
                     `)
    .setThumbnail('https://media.discordapp.net/attachments/822666322051727390/823406706671353867/logo-gif.gif?width=1249&height=702')
    .setColor('#b08d57')
    .setTimestamp()

    const page3 = new MessageEmbed()
    .setTitle('VIP Eclipse $10.000')
    .setAuthor('ArcanusRP', 
    'https://media.discordapp.net/attachments/780970578319638528/823099683324297236/circle-cropped.png?width=702&height=702')
    .setDescription(`
                     • Rango de Vip en Discord
                     • $50.000 dinero limpio
                     • Mejora auto a nivel 3
                     • Auto valorado en $60.000
                     • Prioridad de cola de espera
                     `)
    .setThumbnail('https://media.discordapp.net/attachments/822666322051727390/823406706671353867/logo-gif.gif?width=1249&height=702')
    .setColor('#e3e4e5')
    .setTimestamp()

    const page4 = new MessageEmbed()
    .setTitle('VIP Lunar $15.000')
    .setAuthor('ArcanusRP', 
    'https://media.discordapp.net/attachments/780970578319638528/823099683324297236/circle-cropped.png?width=702&height=702')
    .setDescription(`
                     • Rango de Vip en Discord
                     • $100.000 en dinero limpio
                     • Mejora de cualquier vehículo nivel 4
                     • Auto valorado en $80.000
                     • Prioridad de cola de espera
                     `)
    .setThumbnail('https://media.discordapp.net/attachments/822666322051727390/823406706671353867/logo-gif.gif?width=1249&height=702')
    .setColor('#ffbf00')
    .setTimestamp()

    const page5 = new MessageEmbed()
    .setTitle('VIP Solar $25.000')
    .setAuthor('ArcanusRP', 
    'https://media.discordapp.net/attachments/780970578319638528/823099683324297236/circle-cropped.png?width=702&height=702')
    .setDescription(`
                     • Rango de Vip en Discord
                     • $150.000 en dinero limpio
                     • Mejora de cualquier vehículo a nivel 4 y cosméticos
                     • Auto valorado en $100.000
                     • Casa gama media
                     • Prioridad de cola de espera
                     `)
    .setThumbnail('https://media.discordapp.net/attachments/822666322051727390/823406706671353867/logo-gif.gif?width=1249&height=702')
    .setColor('#0099ff')
    .setTimestamp()
    const page6 = new MessageEmbed()
    .setTitle('VIP Estelar $30.000')
    .setAuthor('ArcanusRP', 
    'https://media.discordapp.net/attachments/780970578319638528/823099683324297236/circle-cropped.png?width=702&height=702')
    .setDescription(`
                     • Rango de Vip en Discord
                     • $200.000 en dinero limpio
                     • Mejora de cualquier vehículo a nivel 4 y cosméticos
                     • Auto valorado en $150.000
                     • Casa gama media alta
                     • Ped
                     • Prioridad en cola
                     `)
    .setThumbnail('https://media.discordapp.net/attachments/822666322051727390/823406706671353867/logo-gif.gif?width=1249&height=702')
    .setColor('#ff0')
    .setTimestamp()
    const page7 = new MessageEmbed()
    .setTitle('VIP Galactic $50.000')
    .setAuthor('ArcanusRP', 
    'https://media.discordapp.net/attachments/780970578319638528/823099683324297236/circle-cropped.png?width=702&height=702')
    .setDescription(`
                     • Rango de Vip en Discord
                     • $300.000 en dinero limpio
                     • Mejora cualquier vehículo a nivel máximo y cosméticos
                     • Auto valorado en $200.000
                     • Casa gama alta
                     • Oficina
                     • Ped
                     • Moto de agua
                     • Prioridad de cola de espera
                     `)
    .setThumbnail('https://media.discordapp.net/attachments/822666322051727390/823406706671353867/logo-gif.gif?width=1249&height=702')
    .setColor('#ff0')
    .setTimestamp()
    const page8 = new MessageEmbed()
    .setTitle('VIP Galactic $50.000')
    .setAuthor('ArcanusRP', 
    'https://media.discordapp.net/attachments/780970578319638528/823099683324297236/circle-cropped.png?width=702&height=702')
    .setDescription(`
                     • Rango VIP en Discord EXCLUSIVO
                     • 4 Autos, todas las mejoras a nivel máximo
                     • Casa y oficina
                     •  $500.000 DINERO LIMPIO
                     • Rango VIP en Discord EXCLUSIVO
                     • Prioridad en Cola
                     • 2 vehículos marítimos a elección
                     • 1 Helicóptero (condiciones puestas por el staff)
                     `)
    .setThumbnail('https://media.discordapp.net/attachments/822666322051727390/823406706671353867/logo-gif.gif?width=1249&height=702')
    .setColor('#ff0')
    .setTimestamp()
    const page9 = new MessageEmbed()
    .setTitle('DATOS BANCARIOS')
    .setAuthor('ArcanusRP', 
    'https://media.discordapp.net/attachments/780970578319638528/823099683324297236/circle-cropped.png?width=702&height=702')
    .setDescription(`
                    Transferencia
                    • Nombre: Bastian David Chaparro Chaparro 
                    • Tipo: Cuenta Corriente
                    • Cuenta: 0-000-73-98554-4
                    • Rut: 20.050.989-7
                    • Correo: bastix120@gmail.com`
                    )
    .setThumbnail('https://media.discordapp.net/attachments/822666322051727390/823406706671353867/logo-gif.gif?width=1249&height=702')
    .setColor('#008000')
    .setTimestamp()
        message.channel.bulkDelete(1, true)
        const pages = [page,page2,page3,page4,page5,page6,page7,page8,page9]
        const emojiList = ["⏪", "⏩"];
        pagination(message, pages, emojiList)
    }
}


