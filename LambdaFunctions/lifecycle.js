module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Lifecycle test',
          input: event,
        },
        null,
        2
      ),
    };
  };
  