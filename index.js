const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log("Bot je online!");
});

client.on("messageCreate", (message) => {
  if (message.content === "!ping") {
    message.reply("🏓 Pong!");
  }
});

client.login(process.env.MTQ4NzA0ODA3NTU3Mzk4OTQwNg.G7WrDL.P5C7vt8M1YKkUDh3JJcrMmVPOwuatOmFy6Iq1s);
