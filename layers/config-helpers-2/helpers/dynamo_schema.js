'use strict';
const dynamo = require('/opt/node_modules/dynamodb');
const envVariable = process.env.dev;

const configVar = require('/opt/config/' + envVariable);

dynamo.AWS.config.update({ region: configVar.awsRegion });
const Joi = require('/opt/node_modules/joi');

exports.Company = dynamo.define('company', {
    hashKey : 'executionId',
    rangeKey : 'domain',
    timestamps : true,
    schema : {
        executionId : Joi.string().required(),
        domain : Joi.string().required(),
        data : Joi.object(),
        message : Joi.string().allow(null, ''),
        clientDb : Joi.string(),
        projectId : Joi.string(),
        rootDomain : Joi.string().required(),
        companyStatus : Joi.string()
    }
});

exports.Contact = dynamo.define('contact', {
    hashKey : 'executionId',
    rangeKey : 'email',
    timestamps : true,
    schema : {
        executionId : Joi.string().required(),
        email : Joi.string().required(),
        data : Joi.object(),
        message : Joi.string().allow(null, ''),
        clientDb : Joi.string(),
        projectId : Joi.string(),
        contactStatus : Joi.string()
    }
});

exports.WorkflowTracker = dynamo.define('workflowtracker', {
    hashKey : 'parentExecutionId',
    rangeKey : 'recordId',
    timestamps : true,
    schema : {
        parentExecutionId : Joi.string().required(),
        workflowName: Joi.string().required(),
        recordId : Joi.string().required(),
        workflowStatus : Joi.string().required(),
        message : Joi.string().allow(null, '')
    }
});

exports.Integration = dynamo.define('integration', {
    hashKey : 'parentExecutionId',
    rangeKey : 'recordId',
    timestamps : true,
    schema : {
        parentExecutionId : Joi.string().required(),
        recordId : Joi.string().required(),
        clientDb : Joi.string(),
        projectId : Joi.string(),
        integrationType : Joi.string(),
        integrationFor: Joi.string(),
        importListRule: Joi.string(),
        integrationStatus: Joi.string(),
        reason: Joi.string()
    }
});

exports.IntegrationTracker = dynamo.define('integrationtracker', {
    hashKey : 'parentExecutionId',
    rangeKey : 'projectId',
    timestamps : true,
    schema : {
        parentExecutionId : Joi.string().required(),
        integrationName: Joi.string().required(),
        projectId : Joi.string().required(),
        clientDb : Joi.string().required(),
        integrationStatus : Joi.string().required(),
        message : Joi.string().allow(null, '')
    }
});
