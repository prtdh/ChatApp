import React from "react";
import axios from "axios";
const Chatpage = () => {
  const fetchChats = async () => {
    const data = await axios.get("/api/chat ");
    console.log(data);
    <h1>ChatPage</h1>;
  };
  return <></>;
};

export default Chatpage;
