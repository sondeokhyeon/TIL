//const BrowserWindow = require("electron").remote.BrowserWindow;
//const puppeteer = require("puppeteer");

const moment = require("moment");
const Picker = require("pickerjs");

const jobManager = [];

const jobContainer = document.getElementById("job-container");
const timerContainer = document.getElementById("timer");
const logContainer = document.getElementById("log-container");
const newWindowbtn = document.getElementById("newWindowBtn");

const url = document.getElementById("url");
const picker = document.getElementById("picker");
const pw = document.getElementById("pw");
const wno = document.getElementById("wno");

window.onload = function () {
  init();
};

function init() {
  timerInit();
  logSetter("사용준비가 되었습니다.");
  logSetter("일정 등록 해주세요.");
  jobAdder();
  helper();
  pickerInit();
}

function timerInit() {
  timerContainer.innerText = now();
  setInterval(() => {
    const time = now();
    timerContainer.innerText = time;
    if (jobManager[0] === time) {
      jobManager.shift();
      logSetter("일정이 실행됩니다.");
      logSetter("일정이 종료되었습니다.");
      console.log(jobManager);
    }
  }, 1 * 1000);
}

function jobAdder() {
  newWindowbtn.onclick = function () {
    const info = getInfo();
    const job_innerContainer = document.createElement("div");
    const jobs = document.createElement("div");
    const button = document.createElement("button");

    jobs.className = "flex justify-between border-b border-gray-700 pt-2";
    jobs.prepend(info.time);
    jobs.appendChild(button);

    button.innerHTML = "삭제";
    button.addEventListener("click", function () {
      for (var i = 0; i < jobContainer.children.length; i++) {
        if (jobContainer.children[i] === this.parentNode.parentNode)
          jobDeleter(i);
      }
    });
    job_innerContainer.appendChild(jobs);
    jobManager.push(jobs);

    if (jobContainer.childElementCount === 0) jobContainer.innerHTML = "";
    jobContainer.appendChild(job_innerContainer);
    logSetter("일정이 등록되었습니다.");
  };
}

function jobDeleter(id) {
  jobManager.splice(id, 1);
  jobContainer.childNodes[id].remove();
  logSetter("일정이 삭제되었습니다.");
  if (jobContainer.childElementCount === 0)
    jobContainer.innerText = "등록된 일정이 없습니다.";
}

// const browser = await puppeteer.launch({
//   ignoreDefaultArgs: ["--disable-extensions"],
//   headless: false,
//   timeout: 5000,
//   defaultViewport: null,
// });
// const page = await browser.newPage();
// await page.goto("https://www.naver.com");

function pickerInit() {
  new Picker(picker, {
    format: "HH:mm",
    controls: true,
    text: {
      title: "시간을 선택하세요",
      confirm: "선택",
      cancel: "취소",
    },
    rows: 3,
  });
}

function getInfo() {
  return {
    url: url.value,
    id: id.value,
    time: picker.value,
    pw: pw.value,
    wno: wno.value,
  };
}

function logSetter(cont = " ") {
  const log = document.createElement("div");
  log.innerText = `[${now()}] ${cont}`;
  logContainer.prepend(log);
}

function now() {
  return moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
}

function helper() {
  const btn = document.createElement("button");
  btn.innerHTML = "확인";
  btn.onclick = () => {
    console.dir(jobManager);
  };
  document.getElementById("top").appendChild(btn);
}
