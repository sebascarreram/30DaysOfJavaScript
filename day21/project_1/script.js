// Develop the following application, use the following HTML elements to get started with.
// You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
//
// * The year color is changing every 1 second
// * The date and time background color is changing every on seconds
// * Completed challenge has background green
// * Ongoing challenge has background yellow
// * Coming challenges have background red
//
const programLists = [
  "Python",
  "JavaScript",
  "HTML & CSS",
  "React",
  "ReactNative",
  "Fullstack",
  "Data Analysis",
  "Machine Learning"
];

const objPrograms = [
  {
    name: "JavaScript",
    skills: ["JavaScript", "ES6", "Promise", "Async and Await", "DOM"]
  },
  {
    name: "Python",
    skills: [
      "Python",
      "Flask",
      "Numpy",
      "Pandas",
      "Statistics",
      "API",
      "MongoDB"
    ]
  },
  {
    name: "HTML & CSS",
    skills: ["CSS", "Flex", "Grid", "CSS animation"]
  },
  {
    name: "Machine Learning",
    skills: [
      "Python",
      "Numpy",
      "Pandas",
      "Scikit-learn",
      "Scipy",
      "Linear Algebra",
      "Statistics"
    ]
  }
];

const programsLen = programLists.length;

// <div>
//  ...
// </div>
const div = document.createElement("div");
div.style.marginTop = "1rem";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.alignItems = "center";

// <div>
//  <divSub></divSub>
//  <divSub></divSub>
//  <divSub></divSub>
//  ...
// </div>
let divSub;

for (let a = 0; a < programsLen; a++) {
  divSub = document.createElement("div");
  divSub.style.padding = "1rem 0.5rem";
  divSub.style.maxWidth = "50rem";
  divSub.style.width = "100%";
  divSub.style.minHeight = "8rem";
  divSub.style.display = "flex";

  // <div>
  //  <divSub>
  //    <divMini></divMini>
  //    <divMini></divMini>
  //    <divMini></divMini>
  //  </divSub>
  //  <divSub>
  //    <divMini></divMini>
  //    <divMini></divMini>
  //    <divMini></divMini>
  //  </divSub>
  //  <divSub>...</divSub>
  // </div>
  let divMini;

  for (let b = 0; b < 3; b++) {
    divMini = document.createElement("div");
    divMini.style.background = "#b1a7a6";
    divMini.style.padding = "1rem 0.5rem";
    divMini.style.display = "flex";

    let p;
    // [here][][]
    if (b === 0) {
      p = document.createElement("p");
      p.textContent = `30 Days Of ${programLists[a]}`;
      p.setAttribute("class", "namePro");
      p.style.fontSize = "1rem";
      p.style.display = "flex";
      p.style.alignItems = "center";
      p.style.display = "flex";
      p.style.alignItems = "center";

      divMini.style.width = "100%";
      divMini.style.minWidth = "11rem";
      divMini.style.borderRight = "1px solid #34495e";

      divMini.appendChild(p);
    }

    // [][here][]
    if (b === 1) {
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      let pSkill;

      summary.textContent = programLists[a];
      summary.style.fontSize = "0.9rem";

      details.appendChild(summary);

      const result = objPrograms.filter(({ name }) => name === programLists[a]);

      if (result.length) {
        result.forEach(({ name, skills }) => {
          skills.forEach(skill => {
            pSkill = document.createElement("p");
            pSkill.textContent = `- ${skill}`;
            pSkill.style.fontSize = "0.8rem";
            pSkill.style.marginBottom = "0.2rem";
            details.appendChild(pSkill);
          });
        });
      }
      divMini.style.justifyContent = "flex-end";
      divMini.style.alignItems = "center";
      divMini.style.width = "15rem";
      divMini.style.minWidth = "7.5rem";
      divMini.appendChild(details);
    }

    // [][][here]
    if (b === 2) {
      p = document.createElement("p");
      p.style.fontSize = "0.9rem";
      p.style.fontWeight = "800";

      if (a < 1) {
        p.textContent = "Done";
      }
      if (a >= 1) {
        p.textContent = "Ongoing";
      }
      if (a >= 3) {
        p.textContent = "Coming";
      }
      p.style.display = "flex";
      p.style.alignItems = "center";

      divMini.style.width = "10rem";
      divMini.style.minWidth = "7rem";
      divMini.style.justifyContent = "flex-end";
      divMini.setAttribute("id", "status");

      divMini.appendChild(p);
    }

    divSub.appendChild(divMini);
  }
  div.appendChild(divSub);
}

const body = document.querySelector("body");
body.style.background = "linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)";

const tittle = document.querySelector("h1");
tittle.setAttribute("class", "title");
tittle.setAttribute("id", "title");
tittle.style.textAlign = "center";

const title2 = document.querySelector("h2");
title2.style.fontSize = "1.1rem";
title2.style.marginTop = ".5rem";
title2.style.color = "#34495e";
title2.style.fontStyle = "italic";
title2.style.fontWeight = "500";
title2.style.textDecorationLine = "underline";
title2.style.cursor = "pointer";

const wrapper = document.querySelector("div");
wrapper.style.display = "flex";
wrapper.style.flexDirection = "column";
wrapper.style.alignItems = "center";

const time = document.querySelector("p");

const isMonth = mon => {
  try {
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
  } catch (err) {
    console.log("ERROR months ", err);
  }
};

const date = new Date();

// day month
const dateTxt = () => {
  try {
    const monthNow = date.getMonth(); // Get the month as a number (0-11)
    let dayNow = date.getDate(); // Get the day as a number (1-31)

    if (dayNow < 10) {
      dayNow = `0${dayNow}`;
    }
    const txtMonth = isMonth(monthNow);

    return `${dayNow} ${txtMonth}`;
  } catch (err) {
    console.log("Error date -> ", err);
  }
};

// day month time
const dateFinal = () => {
  try {
    const date = new Date();
    let txtTime = date.toLocaleTimeString();
    time.textContent = `${dateTxt()} ${txtTime}`;
  } catch (err) {
    console.log("ERROR ", err);
  }
};

setInterval(dateFinal, 1000);

time.classList.add("class", "time");

time.style.color = "black";
time.style.padding = ".5rem";
time.style.marginTop = "1rem";
time.style.borderRadius = "0.5rem";
time.style.width = "100%";
time.style.maxWidth = "20rem";
time.style.minWidth = "20rem";
time.style.textAlign = "center";
time.style.fontSize = "1.3rem";
time.style.transition = "background-color 2s ease-out";

const spanYear = document.querySelector("span");

// BIG year
const yearNow = () => {
  try {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  } catch (err) {
    console.log("ERROR year actual ", err);
  }
};

spanYear.innerText = yearNow();

spanYear.style.fontSize = "4rem";
spanYear.style.transition = "color 2s ease-out";

const colorHexa = () => {
  try {
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
  } catch (err) {
    console.log("ERROR hexa colors ", err);
  }
};

setInterval(() => (spanYear.style.color = colorHexa()), 700);
setInterval(() => (time.style.backgroundColor = colorHexa()), 1000);

document.body.appendChild(div);

let ab = document.querySelectorAll("div#status");

const abLen = ab.length;

for (let a = 0; a < abLen; a++) {
  if (ab[a].innerText === "Done") {
    ab[a].style.background = "#2ecc71";
  }
  if (ab[a].innerText === "Ongoing") {
    ab[a].style.background = "#f1c40f";
  }
  if (ab[a].innerText === "Coming") {
    ab[a].style.background = "#e74c3c";
  }
}

// PROFILE
//
const divProfile = document.createElement("div");
divProfile.style.maxWidth = "50rem";
divProfile.style.margin = "0 auto";

const name_1 = document.createElement("h1");
name_1.textContent = "Sebastian Carrera Medina";
name_1.style.marginTop = "3rem";
name_1.style.fontSize = "3rem";
name_1.style.textAlign = "center";

const ulSocial = document.createElement("ul");
ulSocial.style.listStyleType = "none";
ulSocial.style.display = "flex";
let liSocial;
let tagSocial;
let svgIcon;
let useIcon;

for (let a = 0; a < 3; a++) {
  liSocial = document.createElement("li");
  tagSocial = document.createElement("a");
  tagSocial.setAttribute("href", "#");

  svgIcon = document.createElement("svg");
  svgIcon.setAttribute("class", "icon icon-github-square");
  svgIcon.style.width = "4rem";
  svgIcon.style.height = "4rem";
  svgIcon.style.fill = "#34495e";

  useIcon = document.createElement("use");
  //useTest = `
  //  <use xlink:href="./assets/icouns/sprite.svg#icon-github-square"></use>
  //`
  //svgIcon.innerHTML = useTest;

  useIcon.setAttribute(
    "xlink:href",
    "./assets/icons/sprite.svg#icon-github-square"
  );
  //useIcon.href = "./assets/icons/sprite.svg#icon-github-square"

  ulSocial.appendChild(liSocial);
  liSocial.appendChild(tagSocial);
  tagSocial.appendChild(svgIcon);
  svgIcon.appendChild(useIcon);
}
//useTest = `
//    <use xlink:href="./assets/icons/sprite.svg#icon-github-square"></use>
//  `
//
const profile = document.createElement("p");
profile.style.marginTop = "1.6rem";
profile.style.fontSize = "1rem";
profile.style.lineHeight = "1.7";
profile.style.whiteSpace = "0.2rem";
profile.textContent =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const divListPoints = document.createElement("div");
divListPoints.style.width = "100%";
divListPoints.style.marginTop = "1.5rem";
divListPoints.style.display = "flex";
divListPoints.style.flexWrap = "wrap";
divListPoints.style.justifyContent = "space-between";

let divPoints;
let pTitle;

const titleProfile = [
  {
    Titles: [
      { icon: "🌱", name: "Educator" },
      { icon: "💻", name: "Developer" },
      { icon: "🔥", name: "Motivador" },
      { icon: "📔", name: "Content creator" }
    ],
    Skills: [
      { icon: "✅", name: "Web Development" },
      { icon: "✅", name: "Data Analysis" },
      { icon: "✅", name: "Data Visualization" },
      { icon: "✅", name: "Programming" },
      { icon: "✅", name: "Databases" },
      { icon: "✅", name: "Developing API" }
    ],
    Qualifications: [
      { icon: "📖", name: "MSc. Computer Science Ongoing" },
      { icon: "🎓", name: "BSc. Information and communication Eng." },
      { icon: "🎓", name: "MSc. Food Technology" },
      { icon: "🎓", name: "BSc. Food Technology" }
    ]
  }
];

const nameProfile = Object.keys(titleProfile[0]);
const skillsProfile = Object.values(titleProfile[0]);
let ulProfile;
let liProfile;
let spanProfile;

for (let a = 0; a < 3; a++) {
  divPoints = document.createElement("div");
  pTitle = document.createElement("h2");
  ulProfile = document.createElement("ul");
  ulProfile.style.listStyleType = "none";
  ulProfile.style.listStylePosition = "inside";

  pTitle.textContent = nameProfile[a];
  pTitle.style.marginBottom = "0.9rem";
  pTitle.style.fontSize = "1.3rem";

  skillsProfile[a].forEach(el => {
    // For icons
    spanProfile = document.createElement("span");
    // For title
    liProfile = document.createElement("li");

    spanProfile.textContent = el.icon;
    liProfile.textContent = el.name;

    liProfile.style.marginBottom = "0.5rem";
    liProfile.style.fontSize = "1rem";
    liProfile.style.display = "flex";
    liProfile.style.flexDirection = "row-reverse";
    liProfile.style.justifyContent = "flex-end";
    liProfile.style.alignItems = "center";

    spanProfile.style.marginRight = "0.5rem";

    // Icon
    liProfile.appendChild(spanProfile);
    // skill
    ulProfile.appendChild(liProfile);
  });

  divListPoints.appendChild(divPoints);
  divPoints.appendChild(pTitle);
  divPoints.appendChild(ulProfile);
}

divProfile.appendChild(name_1);
divProfile.appendChild(ulSocial);
divProfile.appendChild(profile);
divProfile.appendChild(divListPoints);

document.body.appendChild(divProfile);

const divKey = document.createElement("div");
divKey.style.maxWidth = "50rem";
divKey.style.margin = "0 auto";
divKey.style.marginTop = "2rem";

const titleKey = document.createElement("h2");
titleKey.textContent = "Keywords";
titleKey.style.fontSize = "1.3rem";

const allSkills = [
  "HTML",
  "HTML5",
  "CSS",
  "CSS3",
  "JavaScript",
  "ES6",
  "Promise",
  "Async await",
  "Database",
  "React",
  "React hooks",
  "React router",
  "Context API",
  "Redux",
  "Node",
  "MongoDB",
  "SQL",
  "API",
  "DOM",
  "Data science",
  "MERN",
  "Python",
  "Flask",
  "Statistics",
  "Linear Algebra",
  "Numpy",
  "Pandas",
  "Scipy",
  "Scikit-learn",
  "Visualization",
  "D3.js"
];

const allUlSkill = document.createElement("ul");
allUlSkill.style.listStyleType = "none";
allUlSkill.style.marginTop = "0.9rem";
allUlSkill.style.display = "flex";
allUlSkill.style.flexWrap = "wrap";

allUlSkill.style.justifyContent = "space-between";

let allLiSkill;

const isDark = color => {
  // color => "#6f0021";
  // color[1] => 6
  const number = color[1];
  if (number < 7) {
    return true;
  }
  return false;
};

allSkills.forEach(el => {
  allLiSkill = document.createElement("li");
  allLiSkill.style.marginRight = "0.5rem";
  allLiSkill.style.marginBottom = "0.5rem";
  allLiSkill.style.fontSize = "1rem";
  allLiSkill.style.padding = "1rem";

  if (isDark(colorHexa())) {
    allLiSkill.style.color = "#ecf0f1";
  }

  allLiSkill.style.background = colorHexa();
  allLiSkill.style.borderRadius = "10px";
  allLiSkill.textContent = el;
  allUlSkill.appendChild(allLiSkill);
});

divKey.appendChild(titleKey);
divKey.appendChild(allUlSkill);

document.body.appendChild(divKey);
