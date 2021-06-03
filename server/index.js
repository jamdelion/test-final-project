const express = require('express');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/slack', (req, res) => {
  const message = req.body;
  console.log("message", message);
  sendSlackbotStartMsg(apiMessage);
  res.redirect("/success");
});

app.listen(3001, () => {
  console.log('Express server is running on localhost:3001');
  sendSlackbotStartMsg(testMessage);
});


let apiMessage = {
  channel: `${process.env.SLACK_CHANNEL_ID}`,
  text: "api route worked",
};


let testMessage = {
  channel: `${process.env.SLACK_CHANNEL_ID}`,
  text: "The server has started running!",
};

function sendSlackbotStartMsg(messageData) {
  fetch(`${process.env.INCOMING_WEBHOOK_URL}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + process.env.BOT_USER_OAUTH_TOKEN,
    },
    body: JSON.stringify(messageData),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response;
    })
    .then((res) => console.log(res.status, res.statusText))
    .catch((error) => console.error(error));
}
