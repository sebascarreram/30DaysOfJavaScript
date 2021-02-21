const body = document.querySelector("body");
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.flexDirection = "column";

const wi = window.innerHeight;
body.style.height = `${wi}px`;

const divOne = document.createElement("div");
divOne.style.marginBottom = "1rem";
divOne.style.display = "flex";
divOne.style.alignItems = "center";
divOne.style.textAlign = "center";

const p = document.createElement("p");
p.setAttribute("class", "title");
p.textContent = "Press any keyboard key";
p.style.fontSize = "4rem";

const span = document.createElement("span");
span.setAttribute("class", "spanCode");
span.style.color = "#e74c3c";
span.style.fontSize = "4.5rem";
span.style.marginLeft = "1rem";

const divTwo = document.createElement("div");
divTwo.setAttribute("class", "divTwo");
divTwo.style.padding = "2rem";
divTwo.style.background = "#ecf0f1";
divTwo.style.display = "none";
divTwo.style.color = "#e74c3c";
divTwo.style.borderRadius = "5px";
divTwo.style.alignItems = "center";
divTwo.style.justifyContent = "center";
divTwo.style.boxShadow =
	"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";

const pCode = document.createElement("p");
pCode.style.fontSize = "10rem";

document.body.addEventListener("keyup", e => {
	p.textContent = "You pressed";
	span.textContent = e.key;
	divTwo.style.display = "flex";
	pCode.textContent = e.keyCode;
});

divOne.appendChild(p);
divOne.appendChild(span);
divTwo.appendChild(pCode);

document.body.appendChild(divOne);
document.body.appendChild(divTwo);

// Media query
// 600px
const phone =
	"@media only screen and (max-width: 37.5em) { body { padding: 3rem 1rem } .title { font-size: 1.9rem !important; } .spanCode { font-size: 2rem !important; } }";

// 900px
const tab_port =
	"@media only screen and (max-width: 56.25em) { .title { font-size: 2rem !important; } }";

const css = `${tab_port} ${phone}`;
const styleElement = document.createElement("style");
styleElement.appendChild(document.createTextNode(css));
body.appendChild(styleElement);
