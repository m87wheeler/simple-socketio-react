import express from "express";
import http from "http";
import { Server } from "socket.io";

/** setup */
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

/** server */
const PORT = process.env.PORT || 4001;
const HOST = "http://localhost";

server.listen(PORT, () => {
  console.log(`Server listening at ${HOST}:${PORT}`);
});
