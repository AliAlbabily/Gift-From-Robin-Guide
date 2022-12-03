require('dotenv').config()

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const arrayOfStrings = ["/robin", "/Robin"]

client.on('ready', () => {
    console.log('Our Bot is ready')
})

client.on('messageCreate', (message) => {
    if (message.author.bot) return // do nothing when the message author is a bot

    // check robin commands
    arrayOfStrings.forEach(string => {
        if (message.content === string) {
            message.channel.send("Follow the tutorial posted in the following channel: **#gift-from-robin**")
        }
        else if (message.content.substring(0, 6) === string && message.content.length == 16) {
            message.channel.send("Follow the tutorial posted in the following channel: **#gift-from-robin**")
        }
        else if (message.content.substring(0, 6) === string && message.content.length == 17) {
            message.channel.send("Follow the tutorial posted in the following channel: **#gift-from-robin**")
        }
    })
});

client.login(process.env.BOT_TOKEN)