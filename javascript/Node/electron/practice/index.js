console.log("running...");

const { app, BrowserWindow } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow({ webPreferences: { nodeIntegration: true } });

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
