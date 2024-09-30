const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  dialect: "mysql",
  host: "localhost",
  database: process.env.DB_NAME,
  logging: false,
  authentication: {
    type: "default",
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log(`Error connecting to Database ${error}`);
  });

module.exports = sequelize;
