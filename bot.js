require('dotenv').config()

const { Client, GatewayIntentBits } = require('discord.js');
const prefix = '>';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


client.on('ready', () => {
    console.log('Our Bot is ready')
})

client.on('messageCreate', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return
    
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    // commands
    if (command === "test") {
        message.channel.send("Bot is working!")
    }
});

client.login(process.env.BOT_TOKEN)