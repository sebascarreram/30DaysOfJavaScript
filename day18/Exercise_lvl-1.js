const fetch = require("node-fetch");

const countriesAPI = "https://restcountries.eu/rest/v2/all";

// Read the countries API using fetch and print the name of country, capital, languages, population and area.
//

const fetchData = async () => {
	try {
		const urlCountry = await fetch(countriesAPI);
		const countries = await urlCountry.json();

		countries.forEach(el => {
			console.log({
				name: el.name,
				capital: el.capital,
				languages: el.languages,
				population: el.population,
				area: el.area
			});
		});
	} catch (err) {
		console.log(err);
	}
};
fetchData();
