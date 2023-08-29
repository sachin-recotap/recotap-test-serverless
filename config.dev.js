module.exports = {
    region: 'us-east-2',
    dev: 'vpc',
    dev_arn: 'vpc_arn',
    layers:[
        // 'arn:aws:lambda:us-east-2:737765590482:layer:config-helpers:68',
    'arn:aws:lambda:us-east-2:737765590482:layer:node-modules:5',
    'arn:aws:lambda:us-east-2:737765590482:layer:configHelpersV2:2'  ],

    timeout: 900,
    role: 'arn:aws:iam::737765590482:role/service-role/ReadCSV-role-si52283r',
    vpc: {
        securityGroupIds: ['sg-0661fbde42485d42e'],
        subnetIds: ['subnet-0a8278dd37ceb8302'],
        config: 'vpc-0e530114a3088ec52'
    }
}
