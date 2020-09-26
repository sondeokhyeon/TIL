const express = require("express");
const http = require("http");
const socket = require("socket.io");
const uuid = require("uuid");

const app = express();
const server = http.createServer(app);
const io = socket(server);

const rooms = [];
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/isroom", (req, res) => {
  res.json(rooms);
});

app.get("/create", (req, res) => {
  try {
    const {
      query: { cid, nid },
    } = req;
    cid, nid;
    rooms.push({
      room_id: cid,
      nick_id: nid,
      time: new Date(),
    });
    res.json({ result: "success", cid });
  } catch (err) {
    console.log(err);
  }
});

app.get("/join", (req, res) => {
  res.sendfile(__dirname + "/chat.html");
});

const chatsio = io.of("/chats"); // namespace

chatsio.on("connection", (socket) => {
  console.log("connected!");

  socket.on("join", (join_msg) => {
    //console.log("joinmsg", socket.id, join_msg);
    socket.join(join_msg);
    // chatsio
    //   .in(join_msg)
    //   .emit("chat message", { chat: `welcome ${socket.id} ` });
    // name 안 room에게 송신

    socket.emit("message", {
      user: "admin",
      text: `webcome to the room `,
    });
    socket.broadcast
      .to(join_msg)
      .emit("message", { user: "admin", text: `, has joined` });
  });

  socket.on("chat message", (c_msg) => {
    const { id, chat } = c_msg;

    //console.log("is chat", c_msg);
    //socket.emit("chat message", c_msg);
    chatsio.to(id).emit("chat message", { chat });
    // 특정 룸에게 송신
  });

  socket.on("disconnect", () => {
    // 접속해제시
    console.log(`${socket.id} is gone`);
  });
});

//const noti = io.of("noti");

server.listen(3000, () => {
  console.log("server start");
});
