const { ActivityType, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`[BOT] Logged in as ${client.user.tag}!`);
        client.user.setPresence({
            activities: [{ 
                name: '/tsuki - created by masaki', 
                type: ActivityType.Streaming, 
                url: 'https://twitch.tv/discord' 
            }],
            status: 'online',
        });

        // Define Slash Commands
        const slashCommands = [
            {
                name: 'help',
                description: 'Mostra il menu di aiuto interattivo'
            },
            {
                name: 'status',
                description: 'Mostra lo stato del server'
            },
            {
                name: 'emoji-setup',
                description: 'Configura automaticamente le emoji per VoiceMaster'
            },
            {
                name: 'reload',
                description: 'Riavvia la configurazione dei canali del server'
            },
            {
                name: 'dm',
                description: 'Invia un messaggio privato anonimo ad un utente',
                options: [
                    {
                        name: 'user',
                        description: 'L\'utente a cui inviare il messaggio',
                        type: ApplicationCommandOptionType.User,
                        required: true
                    },
                    {
                        name: 'message',
                        description: 'Il messaggio da inviare',
                        type: ApplicationCommandOptionType.String,
                        required: true
                    }
                ]
            },
            {
                name: 'vc-setup',
                description: 'Avvia il pannello di controllo VoiceMaster'
            },
            {
                name: 'vc-remove',
                description: 'Rimuove la configurazione VoiceMaster dal server'
            },
            {
                name: 'log-setup',
                description: 'Configura il sistema di log del server'
            },
            {
                name: 'log-remove',
                description: 'Rimuove la configurazione di log dal server'
            },
            {
                name: 'global-setup',
                description: 'Esegue il setup automatico completo (VoiceMaster + Logs)'
            },
            {
                name: 'setupconfession',
                description: 'Configura il pannello per inviare confessioni anonime'
            },
            {
                name: 'play',
                description: 'Riproduce una canzone o playlist da YouTube/Spotify',
                options: [
                    {
                        name: 'song',
                        description: 'Nome della traccia, link YouTube o link Spotify',
                        type: ApplicationCommandOptionType.String,
                        required: true
                    }
                ]
            },
            {
                name: 'stop',
                description: 'Ferma la riproduzione musicale e disconnette il bot'
            },
            {
                name: 'skip',
                description: 'Salto alla prossima traccia in coda'
            },
            {
                name: 'pause',
                description: 'Mette in pausa la riproduzione'
            },
            {
                name: 'resume',
                description: 'Riprende la riproduzione musicale'
            },
            {
                name: 'nowplaying',
                description: 'Mostra il brano attualmente in riproduzione'
            },
            {
                name: 'volume',
                description: 'Regola il volume del bot',
                options: [
                    {
                        name: 'level',
                        description: 'Percentuale del volume (0-100)',
                        type: ApplicationCommandOptionType.Integer,
                        required: true,
                        min_value: 0,
                        max_value: 100
                    }
                ]
            },
            {
                name: 'loop',
                description: 'Imposta la modalità di loop',
                options: [
                    {
                        name: 'mode',
                        description: 'Modalità loop desiderata',
                        type: ApplicationCommandOptionType.String,
                        required: true,
                        choices: [
                            { name: 'Off', value: 'off' },
                            { name: 'Track (Canzone)', value: 'track' },
                            { name: 'Queue (Coda)', value: 'queue' }
                        ]
                    }
                ]
            },
            {
                name: 'shuffle',
                description: 'Mescola i brani presenti nella coda'
            },
            {
                name: 'remove',
                description: 'Rimuove un brano specifico dalla coda',
                options: [
                    {
                        name: 'index',
                        description: 'Posizione del brano nella coda',
                        type: ApplicationCommandOptionType.Integer,
                        required: true,
                        min_value: 1
                    }
                ]
            },
            {
                name: 'clear',
                description: 'Pulisce l\'intera coda musicale'
            },
            {
                name: 'queue',
                description: 'Visualizza la coda dei brani nel server'
            },
            {
                name: 'autoplay',
                description: 'Attiva/disattiva l\'autoplay per riprodurre brani simili'
            },
            {
                name: 'seek',
                description: 'Salta ad un secondo specifico del brano',
                options: [
                    {
                        name: 'seconds',
                        description: 'Il secondo a cui saltare',
                        type: ApplicationCommandOptionType.Integer,
                        required: true,
                        min_value: 0
                    }
                ]
            },
            {
                name: 'purge',
                description: 'Cancella una quantità di messaggi in chat',
                options: [
                    {
                        name: 'amount',
                        description: 'Numero di messaggi da cancellare (1-100)',
                        type: ApplicationCommandOptionType.Integer,
                        required: true,
                        min_value: 1,
                        max_value: 100
                    }
                ]
            },
            {
                name: 'ticket-setup',
                description: 'Configure the ticket support panel',
                options: [
                    {
                        name: 'category',
                        description: 'The category where new tickets will be created',
                        type: ApplicationCommandOptionType.Channel,
                        required: true
                    },
                    {
                        name: 'panel_channel',
                        description: 'The text channel to send the ticket panel to',
                        type: ApplicationCommandOptionType.Channel,
                        required: true
                    },
                    {
                        name: 'log_channel',
                        description: 'The text channel for ticket transcripts',
                        type: ApplicationCommandOptionType.Channel,
                        required: true
                    }
                ]
            }
        ];

        try {
            console.log('[STARTUP] Registering global slash commands...');
            await client.application.commands.set(slashCommands);
            console.log('[STARTUP] Global slash commands successfully registered!');
        } catch (error) {
            console.error('[STARTUP] Failed to register slash commands:', error);
        }
    }
};
