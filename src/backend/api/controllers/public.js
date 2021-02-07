module.exports = {
  example: async (req, res) => {
    res.json({
      success: true,
      status: 200,
      message: 'Example public API response!',
      data: { status: 'ok' },
    });
  },
};
