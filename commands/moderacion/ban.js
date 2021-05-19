module.exports.run = async(client, message, args) => {
    if (msg.member.hasPermission("ADMINISTRATOR")) {
        if (msg.members.mentions.first()) {
            try {
                msg.members.mentions.first().ban();
            } catch {
                msg.reply("I do not have permissions to ban" + msg.members.mentions.first());
            }
        } else {
            msg.reply("You do not have permissions to ban" + msg.members.mentions.first());
        }
    }
}