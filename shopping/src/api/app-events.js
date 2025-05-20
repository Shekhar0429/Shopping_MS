const ShoppingService = require('../services/shopping-service');

module.exports = (app) => {
  const service = new ShoppingService();
// web hook : other service will call shopping service using url /shopping/app-event
  app.use('/app-events', async (req, res, next) => {
    const { payload } = req.body;
    service.SubscribeEvents(payload);
    console.log('============== Shopping Service Received Event =============');  
    return res.status(200).json(payload);
  });
};
