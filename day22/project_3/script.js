//const fetch = require("node-fetch");

const countriesAPI = "https://restcountries.eu/rest/v2/all";

const body = document.querySelector("body");
body.style.textAlign = "center";

const h1 = document.createElement("h1");
h1.textContent = "World countries list";
h1.style.color = "#2c3e50";
h1.style.fontSize = "4rem";
h1.style.fontWeight = "800";
h1.style.letterSpacing = "1rem";
h1.style.marginTop = "1.5rem";

const h3 = document.createElement("h3");
h3.textContent = "Total numbers of countries:";
h3.style.fontSize = "1.5rem";

const pOne = document.createElement("p");
const pTwo = document.createElement("p");

pOne.textContent = "30 Days Of JavaScript: DOM-day 2";
pTwo.textContent = "Author: Asabeneh Yetayeh";

pOne.style.marginTop = ".4rem";
pOne.style.marginBottom = ".4rem";
pOne.style.fontSize = "1.1rem";
pOne.style.color = "#34495e";

pTwo.style.fontSize = "1.1rem";
pTwo.style.color = "#34495e";

const div = document.createElement('div');
div.style.width = "100%"
div.style.display = "flex";
div.style.justifyContent = "center";
//div.style.alignItems = "center";
//div.style.alignContent = "center"
div.style.marginTop = "1.5rem"

const ul = document.createElement('ul'); 
ul.style.listStyleType = "none";
ul.style.display = "flex";
ul.style.flexWrap = "wrap";

(async () => {
	try {
		const urlCountries = await fetch(countriesAPI)
		const countries = await urlCountries.json();

		const countriesLen = countries.length;
			
		let li;
		for (let a = 0; a < countriesLen; a++){
			li = document.createElement('li');
			
			li.style.width = "8rem";
			li.style.height = "8rem";
			li.style.fontSize = "1rem";
			li.style.padding = "1rem"
			li.style.border = "1px solid black"

			li.textContent = countries[a].name;
			

			ul.appendChild(li);
		}
		


	} catch (err) {
		console.log(err);
	}
})();

div.appendChild(ul);


document.body.appendChild(h1);
document.body.appendChild(h3);
document.body.appendChild(pOne);
document.body.appendChild(pTwo);
document.body.appendChild(div)
