module.exports = {
  test: function(req, res) {
    res.json({
      success: true,
      message: 'Example endpoint response message!',
      data: {}
    });
  }
};
