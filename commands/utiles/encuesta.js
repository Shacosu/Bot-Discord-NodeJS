const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args) => {
    if (!args[0]) return;
    let pollOptions = args
    console.log(pollOptions) 
    let option = '\n' + '⬛⬛⬛⬛⬛⬛⬛⬛| 0% (0)'
    let option2 = '\n' + '⬛⬛⬛⬛⬛⬛⬛⬛| 0% (0)'
    const embedPoll = new MessageEmbed()
        .setTitle('📊 Nueva encuesta creada 📊')
        .setColor('YELLOW')
        .setDescription(`${pollOptions[0]}  ${option} \n ${pollOptions[1]} ${option2}`)
        // .addField(`${pollOptions[1]}` + option2)
        .setFooter('Tienen 30 segundo para responder la encuesta.')

        client.channels.cache.get('783121083720269834').send(embedPoll).then(async(r) =>{
            await r.react('✅')
            await r.react('❌')
            // let yes = embedPoll.reactions.cache.get('✅').count;
            // let no = embedPoll.reactions.cache.get('❌').count;
            // console.log("Yes:",yes)
            // console.log("No:",no)
            console.log("Test", embedPoll)
        })
}



