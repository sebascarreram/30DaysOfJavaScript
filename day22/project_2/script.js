const body = document.querySelector("body");
body.style.textAlign = "center";

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

const div = document.createElement("div");
div.style.width = "100%";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.marginTop = "1rem";

const ul = document.createElement("ul");
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

let numbers;
for (let a = 0; a < 102; a++) {
  // element li
  numbers = document.createElement("li");
  numbers.setAttribute("id", "number");
  numbers.style.color = "#ecf0f1";
  numbers.style.fontWeight = "700";
  numbers.style.fontSize = "2rem";
  numbers.style.width = "8rem";
  numbers.style.height = "8rem";
  numbers.style.padding = "1rem";
  numbers.style.borderRadius = "1rem";
  numbers.style.margin = "0.3rem";
  numbers.style.display = "flex";
  numbers.style.justifyContent = "center";
  numbers.style.alignItems = "center";
  numbers.textContent = a;

  // Even numbers => GREEN
  if (a === 0) {
    numbers.style.background = "#34495e";
    numbers.style.color = "red";
  }
  if (a === 1) {
    numbers.style.background = "#f1c40f";
  }
  if (a === 2) {
    numbers.style.background = "rgb(46,204,113)";
    numbers.style.background =
      "linear-gradient(225deg, rgba(46,204,113,1) 50%, rgba(231,76,60,1) 50%)";
  }

  if (a >= 3) {
    if (a % 2 === 0) {
      numbers.style.background = "#2ecc71";
    } else {
      numbers.style.background = "#f1c40f";
    }
    if (isPrime(a)) {
      numbers.style.background = "rgb(241,196,15)";
      numbers.style.background =
        "linear-gradient(225deg, rgba(241,196,15,1) 50%, rgba(231,76,60,1) 50%)";
    }
  }

  // ul > li
  ul.appendChild(numbers);
}

// div > ul > li
div.appendChild(ul);

document.body.appendChild(titleName);
document.body.appendChild(subTitleOne);
document.body.appendChild(subTitleTwo);

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
  document.body.appendChild(pOne);
}

document.body.appendChild(div);
