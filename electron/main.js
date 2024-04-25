const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 588,
    icon: path.join(__dirname, "./favicon.ico"),
    frame: true,
    resizable: false, // 禁止改变窗口大小
    maximizable: false, // 禁止显示最大化按钮
  });

  win.setMenu(null);
  win.loadFile(path.join(__dirname, "./dist/index.html"));
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
