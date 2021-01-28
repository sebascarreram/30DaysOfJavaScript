const fetch = require("node-fetch");

const catsAPI = "https://api.thecatapi.com/v1/breeds";

// Print out all the cat names in to catNames variable.

const catName = async () => {
	try {
		const urlCats = await fetch(catsAPI);
		const cats = await urlCats.json();

		cats.forEach(el => console.log({ name: el.name }));
		console.log(`There are ${cats.length} cats`)
	} catch (err) {
		console.log(err);
	}
};
catName();
