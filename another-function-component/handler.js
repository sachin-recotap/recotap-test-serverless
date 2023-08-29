'use strict';
const envVariable = process.env.dev;
const config = require('/opt/config/' + envVariable);
module.exports.hello = async (event) => {

  console.log({config})
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully! indiee change',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
