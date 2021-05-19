module.exports.run = async(client, message, args) => {
    var amount = args[0]
    if (!args[0]) return message.channel.send('**Ingrese un valor para eliminar**')
        .then(msg => msg.delete({timeout: 10000}));
    message.channel.bulkDelete(amount, true).then(() => {
        message.channel.send(`**[ArcanusRP] Se han eliminado ${amount} mensajes :sunglasses: :thumbsup: **`)
            .then(msg => msg.delete({timeout: 10000}))
        }).catch(error => console.log(error.stack))
}