const example = async (req, res) => {
  res.json({
    success: true,
    status: 200,
    message: 'Example publice response message!',
    data: { status: 'ok' }
  });
};
module.exports = {
  example
};
