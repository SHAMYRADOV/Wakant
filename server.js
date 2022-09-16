const app = require("./app");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, async () => {
  await sequelize.authenticate();
  console.log(`Connected to DB and listening on port ${PORT}...`);
});
