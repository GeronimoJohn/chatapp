import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "http://localhost:5000";

  // enables cors origin access
  var connectionOptions = {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io.connect(ENDPOINT, connectionOptions);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, ({ error }) => {
      alert(error);
    });
  }, [ENDPOINT, location.search]);

  return <h1>Chat</h1>;
};

export default Chat;