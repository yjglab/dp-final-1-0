const modeBtn = document.querySelector("#curtain__hover");
const windowBackground = document.querySelector("#window");
const body = document.querySelector("body");
const curtainShadow = document.querySelector(".curtain__shadow");
const journetTextWrapper = document.querySelector(".journetText__wrapper");
const journetTextBar = document.querySelector(".journetText__title-bar");
const journetTextTitle = document.querySelector(".journetText__title");
const journetTextL1 = document.querySelector(".journetText__leftUp");
const journetTextL2Sub = document.querySelector(
  ".journetText__leftDown-subTitle"
);
const journetTextL2 = document.querySelector(".journetText__leftDown");
const journetTextR1 = document.querySelector(".journetText__rightUp");
const journetTextR2Sub = document.querySelector(
  ".journetText__rightDown-subTitle"
);
const journetTextR2 = document.querySelector(".journetText__rightDown");
const journetModeBtn = document.querySelector(".journet-modeBtn");
let currentMode = "day";
modeBtn.addEventListener("click", () => {
  if (currentMode === "day") {
    windowBackground.style.background = "rgba(31, 18, 31, 0.979)";
    body.style.backgroundColor = "rgba(31, 18, 31, 0.979)";

    curtainShadow.style.background =
      "linear-gradient(90deg, rgba(11,5,11,0.85) 3%, rgba(11,5,11,0) 47%, rgba(11,5,11,0) 53%, rgba(14,5,14,0.85) 97%)";
    windowBackground.style.boxShadow = "0px 0px 15px 7px rgb(21, 12, 22)";

    journetTextBar.style.backgroundColor = "rgba(255, 255, 255, 0.623)";
    journetTextTitle.style.color = "rgba(255, 255, 255, 0.623)";
    journetTextL1.style.color = "rgba(255, 255, 255, 0.623)";
    journetTextL2.style.color = "rgba(255, 255, 255, 0.623)";
    journetTextL2Sub.style.color = "rgba(255, 255, 255, 0.623)";
    journetTextR1.style.color = "rgba(255, 255, 255, 0.623)";
    journetTextR2.style.color = "rgba(255, 255, 255, 0.623)";
    journetTextR2Sub.style.color = "rgba(255, 255, 255, 0.623)";

    journetModeBtn.innerText = "Journet. Night";
    journetModeBtn.style.color = "rgba(34, 26, 34, 0.979)";
    journetModeBtn.style.backgroundColor = "white";
    currentMode = "night";
  } else if (currentMode === "night") {
    windowBackground.style.background =
      "linear-gradient(0deg, rgba(166, 160, 218, 1) 0%, rgba(252, 171, 205, 1) 81%)";
    body.style.backgroundColor = "white";
    curtainShadow.style.background =
      "linear-gradient(90deg,rgba(0, 0, 0, 0.6) 0%,rgba(255, 255, 255, 0) 22%,rgba(255, 255, 255, 0) 78%,rgba(0, 0, 0, 0.6) 100%)";
    windowBackground.style.boxShadow =
      "0px 0px 15px 7px rgba(73, 73, 73, 0.267)";

    journetTextBar.style.backgroundColor = "black";
    journetTextTitle.style.color = "black";
    journetTextL1.style.color = "black";
    journetTextL2.style.color = "black";
    journetTextL2Sub.style.color = "black";
    journetTextR1.style.color = "black";
    journetTextR2.style.color = "black";
    journetTextR2Sub.style.color = "black";

    journetModeBtn.innerText = "Journet. Day";
    journetModeBtn.style.color = "white";
    journetModeBtn.style.backgroundColor = "rgba(0, 0, 0, 0.781)";
    currentMode = "day";
  }
});
