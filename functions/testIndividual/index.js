module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'indie test',
          input: event,
        },
        null,
        2
      ),
    };
  };
  