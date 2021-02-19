const body = document.querySelector("body");
body.style.textAlign = "center";

const header = document.createElement("div");

const titleName = document.createElement("h1");
titleName.className = "title";
titleName.textContent = "Sebastian Carrera M.";
titleName.style.fontSize = "3rem";

const subTitleOne = document.createElement("h3");
subTitleOne.className = "subTitleOne";
subTitleOne.textContent = "30 Days Of JavaScript: DOM - Day 2";
subTitleOne.style.fontSize = "1.2rem";
subTitleOne.style.fontWeight = "200";
subTitleOne.style.textAlign = "center";
subTitleOne.style.marginTop = "0.9rem";
subTitleOne.style.cursor = "pointer";
subTitleOne.style.textDecorationLine = "underline";

const subTitleTwo = document.createElement("h4");
subTitleTwo.className = "subTitleTwo";
subTitleTwo.textContent = "Author: Asabeneh Yateyeh";
subTitleTwo.style.fontSize = "1rem";
subTitleTwo.style.marginTop = "0.5rem";
subTitleTwo.style.fontWeight = "400";

// Input, Button & message warning
const groupButton = document.createElement("div");
groupButton.style.margin = "1rem 0";

const input = document.createElement("input");
//input.style.margin = "1rem 0 1rem 0";
input.style.width = "100%";
input.style.maxWidth = "25rem";
input.style.padding = "0.5rem";
input.style.fontSize = "1rem";
input.style.outline = "none";
input.style.border = "2px solid transparent";
input.style.borderRadius = "0.4rem";
input.placeholder = "Generate more numbers...";

const buttonGene = document.createElement("button");
buttonGene.textContent = "Generate numbers";
buttonGene.style.background = "#2ecc71";
buttonGene.style.border = "2px solid transparent";
buttonGene.style.color = "#ecf0f1";
buttonGene.style.padding = "0.5rem";
buttonGene.style.marginLeft = "1rem";
buttonGene.style.fontSize = "1rem";
buttonGene.style.cursor = "pointer";
buttonGene.style.borderRadius = "0.4rem";

// background:hover
buttonGene.addEventListener(
  "mouseenter",
  () => (buttonGene.style.background = "#27ae60")
);
buttonGene.addEventListener(
  "mouseleave",
  () => (buttonGene.style.background = "#2ecc71")
);

const messageWarning = document.createElement("p");
``;
messageWarning.style.marginBottom = "0.5rem";
messageWarning.style.fontSize = "1rem";
messageWarning.style.fontWeight = "800";
messageWarning.style.color = "#c0392b";

groupButton.appendChild(messageWarning);

// Numbers
const div = document.createElement("div");
div.style.width = "100%";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.marginTop = "1rem";

let ul = document.createElement("ul");
ul.style.width = "100%";
ul.style.maxWidth = "51.7rem";
ul.style.listStyleType = "none";

ul.style.display = "flex";
ul.style.flexWrap = "wrap";

// Prime numbers
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

// numbers is li element
let li;
const numbers = nbr => {
  for (let a = 0; a < nbr; a++) {
    // element li
    li = document.createElement("li");
    li.setAttribute("id", "number");
    li.style.color = "#ecf0f1";
    li.style.fontWeight = "700";
    li.style.fontSize = "2rem";
    li.style.width = "8rem";
    li.style.height = "8rem";
    li.style.padding = "1rem";
    li.style.borderRadius = "1rem";
    li.style.margin = "0.3rem";
    li.style.display = "flex";
    li.style.justifyContent = "center";
    li.style.alignItems = "center";
    li.textContent = a;

    // Even numbers => GREEN
    if (a === 0) {
      li.style.background = "#34495e";
      li.style.color = "red";
    }
    if (a === 1) {
      li.style.background = "#f1c40f";
    }
    if (a === 2) {
      li.style.background = "rgb(46,204,113)";
      li.style.background =
        "linear-gradient(225deg, rgba(46,204,113,1) 50%, rgba(231,76,60,1) 50%)";
    }

    if (a >= 3) {
      if (a % 2 === 0) {
        li.style.background = "#2ecc71";
      } else {
        li.style.background = "#f1c40f";
      }
      if (isPrime(a)) {
        li.style.background = "rgb(241,196,15)";
        li.style.background =
          "linear-gradient(225deg, rgba(241,196,15,1) 50%, rgba(231,76,60,1) 50%)";
      }
    }

    // ul > li
    ul.appendChild(li);
  }
};

// div > ul > li
div.appendChild(ul);

function checkInput() {
  const regex = /\b(\d+)\b/;

  if (regex.test(input.value)) {
    ul.innerHTML = "";
    messageWarning.textContent = "";
    numbers(input.value);
  } else {
    messageWarning.textContent = "Input value must be a number";
  }

  if (!input.value) {
    messageWarning.textContent =
      "Enter number value on the input field to generate numbers";
  }
}

// Button
buttonGene.addEventListener("click", checkInput);
input.addEventListener("keyup", e => e.keyCode === 13 ? checkInput() : null)

// automatic
numbers(12);

header.appendChild(titleName);
header.appendChild(subTitleOne);
header.appendChild(subTitleTwo);

let pOne;

const txt = [
  "Even numbers background is green",
  "Odd numbers background is yellow",
  "Prime numbers background is red"
];

for (let a = 0; a < 3; a++) {
  pOne = document.createElement("p");
  pOne.style.fontSize = "1rem";
  if (a == 0) {
    pOne.style.marginTop = "2rem";
  }
  if (a < 2) {
    pOne.style.marginBottom = "0.3rem";
  }
  pOne.textContent = txt[a];
  header.appendChild(pOne);
}

groupButton.appendChild(input);
groupButton.appendChild(buttonGene);

document.body.appendChild(header);
document.body.appendChild(groupButton);
document.body.appendChild(div);
