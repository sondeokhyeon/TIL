//const BrowserWindow = require("electron").remote.BrowserWindow;
const puppeteer = require("puppeteer");

function timer() {
  const date = new Date();
  return `${date.getFullYear()}-${
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  }:${date.getSeconds()} `;
}

function timerInit() {
  document.getElementById("timer").innerText = timer();
  setInterval(() => {
    document.getElementById("timer").innerText = timer();
  }, 1 * 1000);
}

window.onload = function () {
  timerInit();
};

const newWindowbtn = document.getElementById("newWindowBtn");
newWindowbtn.addEventListener("click", async function (event) {
  const browser = await puppeteer.launch({
    ignoreDefaultArgs: ["--disable-extensions"],
    headless: false,
    timeout: 5000,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto("https://www.naver.com");

  // let testNB = new BrowserWindow({
  //   //width: 400,
  //   //height: 400,
  //   //maxWidth: 600,
  //   //maxHeight: 600,
  //   //backgroundColor: "#dd2b22",
  //   //frame: false,
  // });
  // testNB.webContents.openDevTools();
  // testNB.loadURL("https://www.naver.com");
});
