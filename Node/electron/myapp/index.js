console.log("running...");

const { app, BrowserWindow } = require("electron");
require("electron-reload")(__dirname);

let win;

// const main = async () => {
//   await pie.initialize(app);
//   const browser = await pie.connect(app, puppeteer);

//   const window = new BrowserWindow();
//   const url = "https://example.com/";
//   await window.loadURL(url);

//   const page = await pie.getPage(browser, window);
//   console.log(page.url());
//   window.destroy();
// };

async function createWindow() {
  win = new BrowserWindow({
    // alwaysOnTop: true,
    fullscreen: false,
    resizable: false,
    titie: "myapp",
    webPreferences: { nodeIntegration: true },
  });
  win.removeMenu();
  // await pie.initialize(app);
  //const browser = await pie.connect(app, puppeteer);

  // const win = new BrowserWindow();
  // const url = "https://www.naver.com";
  // await win.loadURL(url);

  //const page = await pie.getPage(browser, win);
  //console.log(page.url());
  //win.destroy();

  win.loadFile("main.html");
  win.webContents.openDevTools();

  app.on("closed", () => {
    win = null;
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", () => {
    if (win === null) {
      createWindow();
    }
  });
}
app.allowRendererProcessReuse = false;
app.on("ready", createWindow);

process.env["ELECTRON_ENABLE_SECURITY_WARNING"] = true;
