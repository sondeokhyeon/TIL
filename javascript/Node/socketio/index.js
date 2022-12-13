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
      query: { cid },
    } = req;
    const room_id = uuid.v4();

    rooms.push({
      room_id,
      room_title: cid,
      time: new Date(),
    });
    res.json({ result: "success", room_id });
  } catch (err) {
    console.log(err);
  }
});

app.get("/join", (req, res) => {
  const {
    query: { rid },
  } = req;
  const chk = rooms.find((r) => r.room_id === rid);
  if (chk) {
    res.sendfile(__dirname + "/chat.html");
  } else {
    res.redirect("/?err=n4");
  }
});

const chatsio = io.of("/chats"); // namespace

chatsio.on("connection", (socket) => {
  socket.on("join", (roomInfo) => {
    const { rid, nick } = roomInfo;

    socket.join(rid); // namespace 안 room에 조인
    const info = rooms.find((r) => r.room_id === rid);

    socket.emit("chat message", {
      nick: "관리자",
      chat: `${info.room_title}방에 오신걸 환영합니다.`,
    });

    socket.broadcast
      .to(rid)
      .emit("chat message", { nick: "관리자", chat: `${nick}, has joined` });
  });

  socket.on("chat message", (c_msg) => {
    const { rid, nick, chat } = c_msg;

    //console.log("is chat", c_msg);
    //socket.emit("chat message", c_msg);
    chatsio.to(rid).emit("chat message", { chat, nick });
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
