console.log("running...");

const { app, BrowserWindow } = require("electron");
require("electron-reload")(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`),
});

let win;

async function createWindow() {
  win = new BrowserWindow({
    // alwaysOnTop: true,
    fullscreen: false,
    resizable: false,
    titie: "myapp",
    webPreferences: { nodeIntegration: true },
  });
  win.removeMenu(null);

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
