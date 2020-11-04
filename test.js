const Discord = require('discord.js')
const client = new Discord.Client()
const Handler = require('./index.js')

const handler = new Handler()

handler.read("testfolder")

client.on("message", async message => {
  const prefix = "'"
    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if (!handler.check(command)) return;
        try {
            handler.work(command, client, message, args)

        } catch (error){
            console.error(error);
        }
    }
})

client.login('yourSecretToken')
