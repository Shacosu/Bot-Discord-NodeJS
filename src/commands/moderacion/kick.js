module.exports.run = async(client, message, args) => {
    if (msg.member.hasPermission("ADMINISTRATOR")) {
        if (msg.members.mentions.first()) {
            try {
                msg.members.mentions.first().kick();
            } catch {
                msg.reply("No tengo puedes kickear a " + msg.members.mentions.first());
            }
        } else {
            msg.reply("No tienes permisos para kickear a " + msg.members.mentions.first());
        }
    }
}