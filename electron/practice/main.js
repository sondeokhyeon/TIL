console.log("잇힝");

const BrowserWindow = require("electron").remote.BrowserWindow;

const newWindowbtn = document.getElementById("newWindowBtn");
newWindowbtn.addEventListener("click", function (event) {
  let testNB = new BrowserWindow({
    width: 400,
    height: 400,
    maxWidth: 600,
    maxHeight: 600,
    backgroundColor: "#dd2b22",
    frame: false,
  });
  testNB.loadFile("test.html");
});
