module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      const cardRoutes = require("../routes/card");
      app.use(staticRoutes);
      app.use(cardRoutes);
    }
  }