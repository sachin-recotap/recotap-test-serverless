'use strict';

module.exports = {
    masterDB: 'recotap-dev',
    db: {
        host: '35.203.2.197',
        uri: 'mongodb://35.203.2.197/recotap-dev',
        options: {
            user: '',
            pass: ''
        },
        // Enable mongoose debug mode
        debug: false
    },
    timeseriesdb: {
        host: '35.203.126.175',
        db: 'prod_kafkatimeseries',
        uri: 'mongodb://35.203.126.175/prod_kafkatimeseries',
        options: {
            user: '',
            pass: ''
        },
        // Enable mongoose debug mode
        debug: false
    },
    bomboradb: {
        host: '35.203.126.175',
        db: 'recotap-bombora',
        uri: 'mongodb://35.203.126.175/recotap-bombora',
        options: {
            user: '',
            pass: ''
        },
        // Enable mongoose debug mode
        debug: false
    },
    azure_container: {
        container_url: 'https://recotapdev.blob.core.windows.net',
        container_name: 'recotapdev',
        blob_service_key: 'DefaultEndpointsProtocol=https;AccountName=recotapdev;AccountKey=g2xAk+9KJrk20fB5zhpIrV0RhBvNjKwQTGyW1nbJJ0KDpry7+ulQyKKmO5KjYxp/7A3XaVwefY/NcpOBUjlMTw==;EndpointSuffix=core.windows.net'
    },
    report_topic: 'prod-dev',
    druid: {
        url: 'http://35.203.79.245:8082/druid/v2',
        datasource: 'recotap-prod-event-processed-3',
        adsource: 'recotap-prod-ad-events-new-final46'
    },
    telegram: {
        admin_channel: -1001313470893,
        admin_token: '1846139153:AAFraacdckyE28HPDlszluL1GPDLwz2dlQ8'
    },
    telegram_cron: {
        chat_id: -1001326034490,
        admin_token: '1846139153:AAFraacdckyE28HPDlszluL1GPDLwz2dlQ8'

    },
    telegramJeopardy: {
        chat_id: -1001625357309,
        admin_token: '1846139153:AAFraacdckyE28HPDlszluL1GPDLwz2dlQ8'
    },
    linkedin: {
        clientID: process.env.LINKEDIN_ID || 'APP_ID',
        clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
        callbackURL: '/api/auth/linkedin/callback',
        accessToken: 'AQVQd06TpMoOSXeo2bJy-VUWCIJ2wuzdKjD_ftWCLgP2QVzPSxtbN9ncJSj-wzSPYxOkWo8gH1Rwjiyy34FL-SdvRKaWPj_8oa3Rg8-2jNwdahm8xDaMCqYZZw6F7JLHT6h2AgL8TjJ880NWDTUfgwZyhodFxpQbaQWdOds1Lfo7NaIyu5qlnBvap5nHDQzAkpHVCW_PrWcds7a-5Bw3CSFp_iAQ0RVZxIy0uBvSKbzfUD-69yWTgpReLZFRKV--NkkUgvoZ8eoxudtnLPsXt79ag7hlJ2SoEviN06EJk_nFxxLzK6kAamE0n5YciFMjEM41h-WxujAHmIF7bgnvTzNXDlEupw',
        adLocations: [
            'urn:li:geo:100506914',
            'urn:li:geo:102221843',
            'urn:li:geo:102393603',
            'urn:li:geo:103537801',
            'urn:li:geo:104514572',
            'urn:li:geo:91000015'
        ]
    },
    mailer: {
        from: process.env.MAILER_FROM || 'Team Recotap <support@recotap.com>',
        options: {
            host: 'email-smtp.ap-south-1.amazonaws.com',
            port: 465,
            secure: true,
            service: process.env.MAILER_SERVICE_PROVIDER || 'SES-AP-SOUTH-1',
            auth: {
                user: process.env.MAILER_EMAIL_ID || 'AKIAY5NT2KKQEFS7HXEV',
                pass: process.env.MAILER_PASSWORD || 'BGyZoURiy5LwPG4NjRYRmDVdLkJVZeEngLbBeBFhBtGN'
            }
        }
    },
    salesforceAuth: {
        client_id: '3MVG9fe4g9fhX0E4q_6dzANwbRDCn9UVlXRkqN9RoZNEMu5I8xLl9X3o3KJRyN8fqkJ1NXoAiNtwh9p8ei06p',
        client_secret: '2D48FB5691EDCAE753FF0E5EE23CF1306A682B4E3C1A562D348DA9D2BEEF6D25',
        redirect_uri: 'https://mominaapi.recotap.com/oauth2/callback/salesforce',
        grant_type: 'authorization_code',
        code: ''
    },
    salesforceRefreshToken: {
        client_id: '3MVG9fe4g9fhX0E4q_6dzANwbRDCn9UVlXRkqN9RoZNEMu5I8xLl9X3o3KJRyN8fqkJ1NXoAiNtwh9p8ei06p',
        client_secret: '2D48FB5691EDCAE753FF0E5EE23CF1306A682B4E3C1A562D348DA9D2BEEF6D25',
        redirect_uri: 'https://mominaapi.recotap.com/oauth2/callback/salesforce',
        grant_type: 'refresh_token',
        refresh_token: ''
    },
    salesforceRedirectURL: {
        redirectUri: 'http://mominaapi.recotap.com/',
        url: 'http://localhost:9001/#/home/external_systems'
    },
    zoho: {
        client_id: '1000.V78BB44H7RZZXGE97TUU1VIY16O9DU',
        client_secret: 'fb6be81a2cb86e5da6f6eedbe05c103469c89ee4e1',
        redirect_uri: 'https://sachinapi.recotap.com/oauth2/callback/zoho',

    },
    hubspotAuth: {
        client_id: '354f1370-9f06-4518-9564-abc8252113a5',
        client_secret: '28f31f4a-38cd-46ae-96d7-ce7bda110453',
        redirect_uri: 'https://mominaapi.recotap.com/oauth2/callback/hubspot',
        grant_type: 'authorization_code',
        code: ''
    },
    hubspotRefreshToken: {
        client_id: '354f1370-9f06-4518-9564-abc8252113a5',
        client_secret: '28f31f4a-38cd-46ae-96d7-ce7bda110453',
        redirect_uri: 'https://mominaapi.recotap.com/oauth2/callback/hubspot',
        grant_type: 'refresh_token',
        refresh_token: ''
    },
    hubspotRedirectURL: {
        redirectUri: 'http://mominaapi.recotap.com/',
        url: 'http://localhost:9001/#/home/external_systems'
    },
    linkedInReportingToken: 'AQVQd06TpMoOSXeo2bJy-VUWCIJ2wuzdKjD_ftWCLgP2QVzPSxtbN9ncJSj-wzSPYxOkWo8gH1Rwjiyy34FL-SdvRKaWPj_8oa3Rg8-2jNwdahm8xDaMCqYZZw6F7JLHT6h2AgL8TjJ880NWDTUfgwZyhodFxpQbaQWdOds1Lfo7NaIyu5qlnBvap5nHDQzAkpHVCW_PrWcds7a-5Bw3CSFp_iAQ0RVZxIy0uBvSKbzfUD-69yWTgpReLZFRKV--NkkUgvoZ8eoxudtnLPsXt79ag7hlJ2SoEviN06EJk_nFxxLzK6kAamE0n5YciFMjEM41h-WxujAHmIF7bgnvTzNXDlEupw',
    email_url: 'https://maha.recotap.com/',
    hubspot: {
        hapikey: 'pat-na1-a0a98b93-a0d0-44e3-ba85-fc3a5ad73f87'
    },
    fullContact: {
        accessToken: 'GCsyoLGTtpQzjdCPeq5AahyfjwxU1Pzi'
    },
    adapt: {
        email: 'ganesh@recotap.com',
        apiKey: '5f3fd06ee9ec743916defacb'
    },
    mariaDb:
    {
        host: '34.152.60.29',
        user: 'root',
        password: 'root',
        connectionLimit: 5,
        database: "recotap",
        charset: 'utf8mb4'
    },
    awsRegion: 'us-east-2',
    personalizedCreativeJsonBucket: 'personalized-creatives-json-data',
    personalizedCreativeBucket: 'personalized-creatives',
    uniqueAccountsBucket: 'unique-account-bucket',
    kafka: {
        url: 'https://vpcdev.recotap.com/events/sendMsg/recotap-event',
        base: 'https://vpcdev.recotap.com/events/sendMsg/',
        servers: ['34.152.62.154:9092'],
        clientId: 'task-processor',
        brokers: ['34.152.62.154:9092'],
        topic: 'task-processor-topic-campaign',
        consumerGroup: 'task-processor-consumers-campaign'
    },
};
