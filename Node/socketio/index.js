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

io.on("connection", (socket) => {
  console.log("connected");

  socket.on("join", (join_msg) => {
    console.log(socket.id);
  });

  socket.on("chat message", (c_msg) => {
    console.log("is chat", c_msg);
    socket.emit("chat message", c_msg);
  });

  // socket.on("c_create", (msg, callback) => {
  //   console.log(socket.id);
  //   rooms.push({
  //     room_id: msg.cid,
  //     nick_id: msg.nid,
  //     s_id: socket.id,
  //     time: new Date(),
  //   });
  //   if (msg.cid === "123") {
  //     return callback(false);
  //   } else {
  //     return callback(socket.id);
  //   }
  // });
});

// NameSpace 1번
// const namespace1 = io.of("namespace1");
// // connection을 받으면, news 이벤트에 hello 객체를 담아 보낸다
// namespace1.on("connection", (socket) => {
//   console.log("connected1");
//   socket.broadcast.emit("broad", "boradcast!");
//   namespace1.emit("news", { hello: "Someone connected at namespace1" });
// });
// // NameSpace 2번
// const namespace2 = io.of("namespace2");
// // connection을 받으면, news 이벤트에 hello 객체를 담아 보낸다
// namespace2.on("connection", (socket) => {
//   console.log("connected2");
//   namespace2.emit("news", { hello: "Someone connected at Namespace2" });
// });

server.listen(3000, () => {
  console.log("server start");
});
