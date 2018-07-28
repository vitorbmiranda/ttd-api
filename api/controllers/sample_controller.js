const SampleController = {
  async test(request, response) {
    response.send({ health: 'ok' });
  },
};

module.exports = SampleController;
