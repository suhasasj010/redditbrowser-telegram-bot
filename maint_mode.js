//Don't sleep
/*const http = require("http");
const express = require("express");

const Log = require("./models/Log");
const app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
*/
const TeleBot = require("telebot");
const fs = require("fs");
const request = require("request");
require('dotenv').config();
const bot = new TeleBot(process.env.BOT_TOKEN);

bot.on("text", msg => {
  bot.sendMessage(msg.chat.id,"Reddit seems to be down at the moment. Stay tuned for more updates.\nCheck the status here: https://downdetector.com/status/reddit/")
  //Bot taken down for maintenance. Any updates about the same will be posted on @reddgramIssues. Thanks for the cooperation.")
});
       
bot.connect()
