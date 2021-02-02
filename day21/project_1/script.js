// Develop the following application, use the following HTML elements to get started with.
// You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
//
// * The year color is changing every 1 second
// * The date and time background color is changing every on seconds
// * Completed challenge has background green
// * Ongoing challenge has background yellow
// * Coming challenges have background red
//

const lists = `
	<li>30DaysOfPython Challenge Done</li>
  <li>30DaysOfJavaScript Challenge Ongoing</li>
	<li>30DaysOfReact Challenge Coming</li>
  <li>30DaysOfFullStack Challenge Coming</li>
  <li>30DaysOfDataAnalysis Challenge Coming</li>
  <li>30DaysOfReactNative Challenge Coming</li>
  <li>30DaysOfMachineLearning Challenge Coming</li>
`;
const ul = document.querySelector("ul");
ul.innerHTML = lists;

ul.style.listStyle = "none";
ul.style.width = "35rem";
ul.style.maxWidth = "40rem";
ul.style.minWidth = "10rem";

ul.style.marginTop = "1.5rem";

const tittle = document.querySelector("h1");
tittle.setAttribute("class", "title");
tittle.setAttribute("id", "title");

const title2 = document.querySelector("h2");
title2.style.fontSize = "1.1rem";
title2.style.marginTop = ".5rem";
title2.style.color = "#34495e";
title2.style.fontStyle = "italic";
title2.style.fontWeight = "500";
title2.style.textDecorationLine = "underline";

const wrapper = document.querySelector("div");
wrapper.style.display = "flex";
wrapper.style.flexDirection = "column";
wrapper.style.alignItems = "center";
//wrapper.style.margin = "0 auto"
//wrapper.style.textAlign = "center"

const listsLi = document.querySelectorAll("li");
//const liOthers = document.querySelector('li');

listsLi.forEach(li => {
  li.style.backgroundColor = "#e63946";
  li.style.padding = "1.5rem";
  li.style.margin = ".5rem .5rem";
  li.style.borderRadius = ".5rem";
  li.style.fontSize = "1rem";
  li.style.color = "#f6f5f5";
});

for (let a = 0; a < listsLi.length; a++) {
  if (a === 0) {
    listsLi[a].style.backgroundColor = "green";
  }
  if (a === 1) {
    listsLi[a].style.backgroundColor = "yellow";
  }

  listsLi[a].style.color = "black";
}
const time = document.querySelector("p");

const isMonth = mon => {
  let txt = "";
  switch (mon) {
    case 0:
      txt = "January";
      break;
    case 1:
      txt = "February";
      break;
    case 2:
      txt = "March";
      break;
    case 3:
      txt = "April";
      break;
    case 4:
      txt = "May";
      break;
    case 5:
      txt = "June";
      break;
    case 6:
      txt = "July";
      break;
    case 7:
      txt = "August";
      break;
    case 8:
      txt = "September";
      break;
    case 9:
      txt = "October";
      break;
    case 10:
      txt = "November";
      break;
    case 11:
      txt = "December";
      break;
    default:
      txt = "Invalid month";
  }
  return txt;
};

(() => {
  "use strict";
  const date = new Date();

  function hoursNow() {
    let hour = date.getHours(); //Get the hour (0-23)
    if (hour < 10) {
      hour = `0${hour}`;
    }
    return hour;
  }
  function minutesNow() {
    let minutes = date.getMinutes(); //Get the minute (0-59)
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return minutes;
  }
  function secondsNow() {
    let seconds = date.getSeconds(); // Get the second (0-59)
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return seconds;
  }

  const monthNow = date.getMonth(); // Get the month as a number (0-11)
  let dayNow = date.getDate(); // Get the day as a number (1-31)

  if (dayNow < 10) {
    dayNow = `0${dayNow}`;
  }

  const txtMonth = isMonth(monthNow);

  return time.textContent = `${txtMonth} ${dayNow} ,${hoursNow()}:${minutesNow()}:${setInterval(secondsNow, 1000)}`;

})();


time.classList.add("class", "time");

time.style.color = "black";
time.style.padding = ".5rem";
time.style.marginTop = "1rem";
time.style.borderRadius = "1rem";
time.style.width = "20rem";
time.style.textAlign = "center";
time.style.fontSize = "1.3rem";
time.style.transition = "background-color 2s ease-out";

const spanYear = document.querySelector("span");

const yearNow = () => {
  const date = new Date();
  const year = date.getFullYear();
  return year;
};

spanYear.innerText = yearNow();

spanYear.style.fontSize = "4rem";
spanYear.style.transition = "color 2s ease-out";

const colorHexa = () => {
  let hexa = "#";
  const alfa = "abcdef";
  const nbrs = "0123456789";
  const full = alfa.concat(nbrs);

  // 6 -> #xxxxxx
  for (let a = 0; a < 6; a++) {
    const random = Math.floor(Math.random() * full.length);
    hexa += full[random];
  }
  return hexa;
};


setInterval(() => spanYear.style.color = colorHexa(), 700);
setInterval(() => time.style.backgroundColor = colorHexa(), 1000);
