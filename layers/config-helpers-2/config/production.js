'use strict';

module.exports = {
  masterDB: 'recotap-production',

  db: {
    host: '35.194.88.211',
    uri: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || '35.194.88.211') + '/recotap-production',
    options: {
      user: '',
      pass: ''
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  timeseriesdb: {
    host: '10.162.0.6',
    db: 'prod_kafkatimeseries',
    uri: 'mongodb://10.162.0.6/prod_kafkatimeseries',
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
    uri: 'mongodb://10.162.0.6/recotap-bombora',
    options: {
      user: '',
      pass: ''
    },
    // Enable mongoose debug mode
    debug: false
  },
  elasticsearch: {
    nodes: ['http://35.245.68.110:9200', 'http://35.230.171.28:9200', 'http://35.230.172.113:9200']
  },
  ipdb: {
    host: '10.0.2.39',
    uri: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || '10.0.2.39') + '/recotapip',
    options: {
      user: '',
      pass: ''
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  clearbit: {
    secret_key: 'sk_0af03dc2cc3e1d753207f7a982e9cf76'
  },
  grpc: {
    recsys: {
      host: '40.70.211.131',
      port: '50051'
    },
    optimize: {
      host: '10.0.2.119',
      port: '50051'
    },
    druid: {
      host: '34.86.10.235',
      port: '50051'
    },
    airflow: {
      host: '34.252.241.197',
      port: '50051'
    }
  },
  airflow: {
    url: 'http://34.252.241.197:5000'
  },
  kafka: {
    url: 'https://server.recotap.com/events/sendMsg/recotap-prod-event',
    base: 'https://server.recotap.com/events/sendMsg/',
    servers: ['34.145.251.172:9092', '35.245.177.41:9092', '34.86.200.226:9092'],
    clientId: 'task-processor',
    brokers: ['34.145.251.172:9092', '35.245.177.41:9092', '34.86.200.226:9092'],
    topic: 'task-processor-prod-topic',
    consumerGroup: 'task-processor-prod-consumers'
  },
  report_topic: 'ad-report-prod-topic-6',
  azure_container: {
    container_url: 'https://recotapprod.blob.core.windows.net',
    container_name: 'recotapprod',
    blob_service_key: 'DefaultEndpointsProtocol=https;AccountName=recotapprod;AccountKey=urA4zf8LBpBvDgiskTv5gSsB6PDIrnUDclHkbxV09C2meZGqa+9ymO5e9+iWN4WqI+9LvB/wNu/uEH6czPiMmA==;EndpointSuffix=core.windows.net'
  },
  telegram_cron: {
    chat_id: -1001445341502,
    admin_token: '1846139153:AAFraacdckyE28HPDlszluL1GPDLwz2dlQ8'
  },
  telegramJeopardy: {
    chat_id: -1001586858406,
    admin_token: '1846139153:AAFraacdckyE28HPDlszluL1GPDLwz2dlQ8'
  },
  druid: {
    url: 'http://34.86.10.235:8082/druid/v2',
    datasource: 'recotap-prod-event-processed-6',
    adsource: 'recotap-prod-ad-events-new-final52'
  },
  password: {
    url: 'https://app.recotap.com/'
  },
  log: {
    // logging with Morgan - https://github.com/expressjs/morgan
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    format: 'prod',
    options: {
      // Stream defaults to process.stdout
      // Uncomment/comment to toggle the logging to a log on the file system
      //stream: {
      //  directoryPath: process.cwd(),
      //  fileName: 'access.log',
      //  rotatingLogs: { // for more info on rotating logs - https://github.com/holidayextras/file-stream-rotator#usage
      //    active: false, // activate to use rotating logs
      //    fileName: 'access-%DATE%.log', // if rotating logs are active, this fileName setting will be used
      //    frequency: 'daily',
      //    verbose: false
      //  }
      //}
    }
  },
  telegram: {
    admin_channel: -1001455950575,
    admin_token: '1846139153:AAFraacdckyE28HPDlszluL1GPDLwz2dlQ8'
  },
  //   app: {
  //     title: defaultEnvConfig.app.title + ' - Production Cluster',
  //     sdk_base: 'https://server.recotap.com/',
  //     sdk_project_location: '/home/ubuntu/recotap/recotap-client-sdks/',
  //     sdk_script_location: '/home/ubuntu/recotap/sdk_scripts/',
  //     sdk_root: 'https://server.recotap.com/recotap-client.js?app_id=',
  //     s3_bucket_name: 'recotapproduction'
  //   },
  facebook: {
    clientID: process.env.FACEBOOK_ID || 'APP_ID',
    clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/facebook/callback'
  },
  twitter: {
    clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
    clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
    callbackURL: '/api/auth/twitter/callback'
  },
  google: {
    clientID: process.env.GOOGLE_ID || 'APP_ID',
    clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/google/callback'
  },
  linkedin: {
    clientID: process.env.LINKEDIN_ID || 'APP_ID',
    clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/linkedin/callback',
    accessToken: 'AQXpOXVnIrperk1bxe4nET5Hevn0W1y4YSldekbP58s7VIL4WNEHnCn_w4_xPAseIvrbNkJeAebPHqwf_5XMIxW78VHnS6-M4NBta1BhQMYI-Ha196117jBcV9drl9AWoceFLiVQXIC2CEraBFoNZSiD-yidTApdfKxAUSl3mwRzEYq6I1huMyXvHJvxaDThNKkR6oEkQA_XsgNI1eiXabCKDCYpQyPCr7jQznZAcQtz55ngzwdFkg5jdUXoJZf-mGz9LC9ukl1FXGfF2iK_XZojbIElJApZ76rQhT8Yh3q_gqkn0cOvqFl74MQyIXErD7vh92xzfPrWYD2yw2jfVjAY08Z5XQ',
    adLocations: [
      'urn:li:geo:100506914',
      'urn:li:geo:102221843',
      'urn:li:geo:102393603',
      'urn:li:geo:103537801',
      'urn:li:geo:104514572',
      'urn:li:geo:91000015'
    ]
  },
  github: {
    clientID: process.env.GITHUB_ID || 'APP_ID',
    clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/github/callback'
  },
  paypal: {
    clientID: process.env.PAYPAL_ID || 'CLIENT_ID',
    clientSecret: process.env.PAYPAL_SECRET || 'CLIENT_SECRET',
    callbackURL: '/api/auth/paypal/callback',
    sandbox: true
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
  livereload: true,
  seedDB: {
    seed: process.env.MONGO_SEED === 'true' ? true : false,
    options: {
      logResults: process.env.MONGO_SEED_LOG_RESULTS === 'false' ? false : true,
      seedUser: {
        username: process.env.MONGO_SEED_USER_USERNAME || 'user',
        provider: 'local',
        email: process.env.MONGO_SEED_USER_EMAIL || 'user@localhost.com',
        firstName: 'User',
        lastName: 'Local',
        displayName: 'User Local',
        roles: ['user']
      },
      seedAdmin: {
        username: process.env.MONGO_SEED_ADMIN_USERNAME || 'admin',
        provider: 'local',
        email: process.env.MONGO_SEED_ADMIN_EMAIL || 'admin@localhost.com',
        firstName: 'Admin',
        lastName: 'Local',
        displayName: 'Admin Local',
        roles: ['user', 'admin']
      }
    }
  },
  session: {
    secret: 'test_oauth_secret'
  },
  salesforceAuth: {
    client_id: '3MVG9fe4g9fhX0E4q_6dzANwbRHaItYckbLUngPS9VTxw6y0VRhEK68l9RE4.pAgmlK82WHTFUZxgruyr.ZlQ',
    client_secret: '01BBD5F40FF4B7B7FBC0558AC5BB6BADA5721969D8048C1024F26202708F4AF8',
    redirect_uri: 'https://server.recotap.com/oauth2/callback/salesforce',
    grant_type: 'authorization_code',
    code: ''
  },
  salesforceRefreshToken: {
    client_id: '3MVG9fe4g9fhX0E4q_6dzANwbRHaItYckbLUngPS9VTxw6y0VRhEK68l9RE4.pAgmlK82WHTFUZxgruyr.ZlQ',
    client_secret: '01BBD5F40FF4B7B7FBC0558AC5BB6BADA5721969D8048C1024F26202708F4AF8',
    redirect_uri: 'https://server.recotap.com/oauth2/callback/salesforce',
    grant_type: 'refresh_token',
    refresh_token: ''
  },
  salesforceRedirectURL: {
    redirectUri: 'http://server.recotap.com/',
    url: 'http://app.recotap.com/#/home/external_systems'
  },
  zoho: {
    client_id: '1000.V78BB44H7RZZXGE97TUU1VIY16O9DU',
    client_secret: 'fb6be81a2cb86e5da6f6eedbe05c103469c89ee4e1',
    redirect_uri: 'https://server.recotap.com/oauth2/callback/zoho',

  },
  hubspotAuth: {
    client_id: 'a05b169c-7297-4831-87ff-45f1f3efd519',
    client_secret: 'de6d7912-a415-47b5-ba9f-ba5e592af226',
    redirect_uri: 'https://server.recotap.com/oauth2/callback/hubspot',
    grant_type: 'authorization_code',
    code: ''
  },
  hubspotRefreshToken: {
    client_id: 'a05b169c-7297-4831-87ff-45f1f3efd519',
    client_secret: 'de6d7912-a415-47b5-ba9f-ba5e592af226',
    redirect_uri: 'https://server.recotap.com/oauth2/callback/hubspot',
    grant_type: 'refresh_token',
    refresh_token: ''
  },
  hubspotRedirectURL: {
    redirectUri: 'https://server.recotap.com/',
    url: 'http://app.recotap.com/#/home/external_systems'
  },
  linkedInReportingToken: 'AQXpOXVnIrperk1bxe4nET5Hevn0W1y4YSldekbP58s7VIL4WNEHnCn_w4_xPAseIvrbNkJeAebPHqwf_5XMIxW78VHnS6-M4NBta1BhQMYI-Ha196117jBcV9drl9AWoceFLiVQXIC2CEraBFoNZSiD-yidTApdfKxAUSl3mwRzEYq6I1huMyXvHJvxaDThNKkR6oEkQA_XsgNI1eiXabCKDCYpQyPCr7jQznZAcQtz55ngzwdFkg5jdUXoJZf-mGz9LC9ukl1FXGfF2iK_XZojbIElJApZ76rQhT8Yh3q_gqkn0cOvqFl74MQyIXErD7vh92xzfPrWYD2yw2jfVjAY08Z5XQ',
  email_url: 'https://app.recotap.com/',
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
    host: '35.194.65.234',
    user: 'root',
    password: 'root',
    connectionLimit: 5,
    database: "recotap",
    charset: 'utf8mb4'
  },
  awsRegion: 'us-east-1',
  personalizedCreativeJsonBucket: 'personalized-creatives-json-data-prod',
  personalizedCreativeBucket: 'personalized-creatives-prod',
  uniqueAccountsBucket: 'unique-account-bucket-prod'
};
