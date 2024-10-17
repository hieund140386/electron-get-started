// const { contextBridge } = require("electron");

import { contextBridge, ipcRenderer } from "electron";
// window.addEventListener("DOMContentLoaded", (event) => {
//   console.log("event: ", event);

//   const replaceTxt = (selector, txt) => {
//     const element = document.getElementById(selector);

//     if (element) element.innerText = txt;
//   };

//   const targets = ["electron", "node", "chrome"];

//   for (const target of targets) {
//     replaceTxt(`${target}-vers`, process.versions[target]);
//   }
// });

contextBridge.exposeInMainWorld("abc", {
  node: process.versions.node,
  chrome: process.versions.chrome,
  electron: process.versions.electron,
  ping: (...args) => ipcRenderer.invoke("ping", ...args),
});
