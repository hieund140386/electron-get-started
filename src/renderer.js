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

const replaceTxt = (selector, txt) => {
  const element = document.getElementById(selector);

  if (element) element.innerText = txt;
};

const targets = ["electron", "node", "chrome"];

for (const target of targets) {
  replaceTxt(`${target}-vers`, abc[target]);
}

const pingBtn = document.getElementById("ping");

if (pingBtn) {
  pingBtn.addEventListener("click", async () => {
    const res = await abc.ping("parameter1", "parameter2", 30);
    console.log("res: ", res);
  });
}
