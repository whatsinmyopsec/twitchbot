require("dotenv").config();

module.exports = {
  connection: {
    reconnect: "connection.reconnect",
  },

  identity: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  },

  channels: [process.env.CHANNEL0, process.env.CHANNEL1],
};
