'use strict';
const envVariable = process.env.dev;
const envArnVariable = process.env.dev_arn;
const { Kafka } = require('/opt/node_modules/kafkajs');
const config = require(`/opt/config/${envVariable}.js`);

exports.produce_message = async (message) => {
    var kafka = new Kafka({
        clientId: 'test',
        brokers: config.kafka.servers
    });

    const producer = kafka.producer();
    await producer.connect();
    await producer.send({
            topic: config.report_topic,
            messages: [
                { value: JSON.stringify(message) },
            ],
        });
    await producer.disconnect();
};
exports.produce_message_for_timeseries = async (message) => {
    var kafka = new Kafka({
        clientId: 'test2',
        brokers: config.kafka.servers
    });

    const producer = kafka.producer();
    await producer.connect();
    await producer.send({
            topic: config.mongotimeseries_topic,
            messages: [
                { value: JSON.stringify(message) },
            ],
        });
    await producer.disconnect();
};
exports.sendData = async (data) => {
    try {
        var sentMessage = JSON.stringify(data);
        // console.log('JSON ', sentMessage);

        var kafka = new Kafka({
            clientId: config.kafka.clientId,
            brokers: config.kafka.servers
        });

        const producer = kafka.producer();
        await producer.connect();
        await producer.send({
            topic: config.kafka.topic,
            messages: [
                { value: sentMessage },
            ]
        });
        await producer.disconnect();
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
};
