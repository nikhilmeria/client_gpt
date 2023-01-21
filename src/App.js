import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./normal.css";

function App() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      user: "GPT",
      message: "From Chat GPT",
    },
    {
      user: "Me",
      message: "ANswer Me GPT",
    },
  ]);

  async function formSubmitHandler(e) {
    e.preventDefault();
    console.log("form submitted 1 : ", input);
    // setChatLog([...chatLog, { user: "Me", message: `${input}` }]);
    // console.log(
    //   "form submitted 2 : ",
    //   chatLog.map((message) => message.message)
    // );
    const resp = await fetch("http://localhost:3080", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: input,
      }),
    });

    const data = await resp.json();
    console.log("data from my api : ", data.message);
    //setChatLog([...chatLog, { user: "GPT", message: `${data.message}` }]);

    setInput("");
  }

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span> + </span>
          New Chat
        </div>
      </aside>

      <section className="chatbox">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Custom chatGPT</code>
          </p>
        </header>

        <div className="chat-log">
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>

        <div className="chat-input-holder">
          <form onSubmit={formSubmitHandler}>
            <input
              className="chat-area-holder"
              placeholder="talk to me by typing here..."
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
          </form>
        </div>
      </section>
    </div>
  );
}

const ChatMessage = ({ message }) => {
  return (
    <div className="chat-message">
      <div className="chat-message-center ">
        <div className="avatar">{message.user}</div>
        <div className="message">{message.message}</div>
      </div>
    </div>
  );
};

export default App;

/*
<div className="chat-message-gpt ">
            <div className="chat-message-center ">
              <div className="avatar-gpt">
                <img src={logo} className="App-logo-gpt" alt="logo" />
              </div>
              <div className="message">Hello from chatGPT</div>
            </div>
          </div>
*/
