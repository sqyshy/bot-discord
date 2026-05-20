require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const emojisToUpload = [
    { name: 'vm_lock', url: 'https://cdn.discordapp.com/emojis/1422720898892300388.webp?size=40' },
    { name: 'vm_unlock', url: 'https://cdn.discordapp.com/emojis/1422720958564798514.webp?size=40' },
    { name: 'vm_ghost', url: 'https://cdn.discordapp.com/emojis/1422720885311143956.webp?size=40' },
    { name: 'vm_reveal', url: 'https://cdn.discordapp.com/emojis/1422720923047297184.webp?size=40' },
    { name: 'vm_rename', url: 'https://cdn.discordapp.com/emojis/1422720915778830357.webp?size=40' },
    { name: 'vm_claim', url: 'https://cdn.discordapp.com/emojis/1422720904382644345.webp?size=40' },
    { name: 'vm_increase', url: 'https://cdn.discordapp.com/emojis/1422720868081209394.webp?size=40' },
    { name: 'vm_decrease', url: 'https://cdn.discordapp.com/emojis/1422720949542846584.webp?size=40' },
    { name: 'vm_delete', url: 'https://cdn.discordapp.com/emojis/1422720875408523384.webp?size=40' },
    { name: 'vm_info', url: 'https://cdn.discordapp.com/emojis/1422720892944908378.webp?size=40' },
    { name: 'vm_add', url: 'https://cdn.discordapp.com/emojis/1422720904382644345.webp?size=40' }
];

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);
    const guild = client.guilds.cache.first();
    if (!guild) {
        console.log("Bot is not in any guilds.");
        process.exit();
    }

    console.log(`Uploading to guild: ${guild.name}`);
    const results = {};
    for (const em of emojisToUpload) {
        try {
            const existing = guild.emojis.cache.find(e => e.name === em.name);
            if (existing) {
                console.log(`Deleting existing emoji ${em.name}`);
                await existing.delete();
            }

            const created = await guild.emojis.create({ attachment: em.url, name: em.name });
            console.log(`Created: ${created.name} (${created.id})`);
            results[em.name] = created.id;
        } catch (err) {
            console.log(`Error creating ${em.name}: ${err.message}`);
        }
    }
    console.log("RESULTS_JSON:");
    console.log(JSON.stringify(results));
    process.exit();
});

client.login(process.env.DISCORD_TOKEN);
