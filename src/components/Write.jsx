import React from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Navbar.jsx";
import voice from "../images/voice.svg";
import send from "../images/send.svg";
import profile from "../images/profile.svg";
const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();

function Write() {
  const [messageContent, setMessageContent] = React.useState("");
  // let testMessage = {
  //   channel: `${process.env.REACT_APP_SLACK_CHANNEL_ID}`,
  //   text: `${messageContent}`,
  // };

  // function sendSlackbotStartMsg(messageData) {
  //   console.log(process.env.REACT_APP_INCOMING_WEBHOOK_URL)
  //   fetch(`${process.env.REACT_APP_INCOMING_WEBHOOK_URL}`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       Authorization: "Bearer " + process.env.REACT_APP_BOT_USER_OAUTH_TOKEN,
  //     },
  //     body: JSON.stringify(messageData),
  //   })
  //     .then((response) => {
  //       if (!response.ok) throw new Error(response.status);
  //       return response;
  //     })
  //     .then((res) => console.log(res.status, res.statusText))
  //     .catch((error) => console.error(error));
  // }

  // function sendSlackbotStartMsg(messageData) {
  //   fetch(`/api/slack`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       Authorization: "Bearer " + process.env.REACT_APP_BOT_USER_OAUTH_TOKEN,
  //     },
  //     body: JSON.stringify(messageData),
  //   })
  //     .then((response) => {
  //       if (!response.ok) throw new Error(response.status);
  //       return response;
  //     })
  //     .then((res) => console.log(res.status, res.statusText))
  //     .catch((error) => console.error(error));
  // }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('/api/slack', {
    // method: "POST"
  })
      .then(response => {
        console.log("response", response)
        response.json()
        // console.log('response.json()', response.json())
      })
      .catch((error) => console.error("Oops!", error));
  }

  return (
    <>
      <button>
        <a href="/messages">Go back</a>
      </button>
      <div className="messageContainer">
        <div className="messageTo">
          To: Jo
          <img className="avatar" src={profile}></img>
        </div>
         <form onSubmit={handleSubmit}>
            <textarea id="text" placeholder="Start typing..."></textarea>
            <button type="submit">Submit</button>
          </form>
        {/* <form action="/api/slack" method="POST" onChange={(event) => setMessageContent(event.target.value)}>
          <textarea placeholder="Start typing..."></textarea>
          <button type="button" onClick={handleSubmit}>Send</button>
          <a href="/success">
            <img src={send}></img>
            Send
          </a> */}

          {/* <button
            type="submit"
            onClick={() => {
              console.log("works");
              sendSlackbotStartMsg(testMessage);
            }}
          ></button> */}
        {/* </form> */}
        <div className="msgButtons">
          <a href="/speak">
            {/* we should change this to be state based rather than page */}
            <img src={voice}></img>
            <span>Press here to speak your message </span>
          </a>
        </div>
      </div>
      <Nav />
    </>
  );
}

export default Write;


//  <form action="post-review" method="POST"