const { io } = require("socket.io-client");
const socket = io("http://localhost:3001");

socket.on("connect", () => {
  console.log("Connected with socket id:", socket.id);
});

socket.on("disconnect", () => {
  console.log("Disconnected from socket");
});

