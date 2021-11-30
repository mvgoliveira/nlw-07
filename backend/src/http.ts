import cors from "cors";
import "dotenv/config";
import express from "express";
import {createServer} from "http";
import { Server } from "socket.io";

import { routes } from "./routes";

const app = express();
app.use(cors());

const http = createServer(app);

app.use(express.json());
app.use(routes);

const io = new Server(http, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log("🔌 User Connected on socket ", socket.id);
});

app.get("/github", (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

app.get("/signin/callback", (req, res) => {
  const { code } = req.query;
  return res.json(code);
});


export { http, io }
