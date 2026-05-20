require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    const ids = [
        '1422720898892300388', // lock
        '1422720958564798514', // unlock
        '1422720885311143956', // ghost
        '1422720923047297184', // Reveal
        '1422720915778830357', // Rename
        '1422720904382644345', // Claim
        '1422720868081209394', // Increase
        '1422720949542846584', // Decrease
        '1422720875408523384', // Delete
        '1422720892944908378'  // info
    ];
    
    console.log("Checking emojis...");
    ids.forEach(id => {
        const emoji = client.emojis.cache.get(id);
        if (emoji) {
            console.log(`ID: ${id} | Name: ${emoji.name} | Animated: ${emoji.animated} | String: ${emoji.toString()}`);
        } else {
            console.log(`ID: ${id} | NOT FOUND IN CACHE`);
        }
    });
    process.exit();
});

client.login(process.env.DISCORD_TOKEN);
