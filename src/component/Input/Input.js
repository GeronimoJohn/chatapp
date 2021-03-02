import React from "react";

import "./Input.css";

const Input = ({ message, setMessage, sndMessage }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) => (event.key === "Enter" ? sndMessage(event) : null)}
    />
    <button className="sendButton" onClick={(e) => sndMessage(e)}>
      Send
    </button>
  </form>
);

export default Input;
