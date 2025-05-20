const CustomerService = require('../services/customer-service');

module.exports = (app) => {
  const service = new CustomerService();

  // web hook : other service will call customer service using url /customer/app-event
  app.use('/app-event', async (req, res, next) => {
    console.log('===================== Shopping Service Received Event =========================');
    const { payload } = req.body;
    service.SubscribeEvents(payload);
    console.log('===================== Shopping Service recovered Event =========================');
    return res.status(200).json(payload);
  });
};
