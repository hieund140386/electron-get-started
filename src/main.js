// const { app, BrowserWindow } = require("electron");
// const path = require("node:path");

// const { app, BrowserWindow } = require("electron");
// const path = require("path");
// const { dirname } = require("path");
// const { fileURLToPath } = require("url");

import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const createWindow = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  console.log(path.join(__dirname, "./preload.mjs"));
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "./preload.mjs"),
      nodeIntegrationInWorker: true,
    },
  });

  mainWindow.loadFile("./index.html");

  // mainWindow.webContents.openDevTools();
};

app
  .whenReady()
  .then(() => {
    createWindow();

    ipcMain.handle("ping", (event, ...args) => {
      return {
        res: "pong",
        args: args,
        gtt: event.sender.frameRate,
      };
    });

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
