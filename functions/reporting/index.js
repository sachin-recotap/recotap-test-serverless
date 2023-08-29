module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'reporting',
          input: event,
        },
        null,
        2
      ),
    };
  };
  