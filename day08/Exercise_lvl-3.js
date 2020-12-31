// Question 1
// Create an object literal called personAccount.
// It has firstName, lastName, incomes, expenses properties and it has totalIncome,
// totalExpense, accountInfo, addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
	// ID
	1: {
		firstName: "Sebastian",
		lastName: "Carrera",
		incomes: 332.0,
		expenses: 100,
		totalIncome: function () {
			return this.incomes + this.expenses;
		},
		totalExpense: "?",
		accountInfo: {
			id: "1234",
			bank_name: "nameBank",
			active: true
		},
		addIncome: 34.44,
		addExpense: 310.0,
		accountBalance: "?"
	}
};

console.log(personAccount);

console.log("~~~~~~~~~~~~");
// Question 2
// Questions: 2, 3 and 4 are based on the following two arrays: users and products

const users = [
	{
		_id: "ab12ex",
		username: "Alex",
		email: "alex@alex.com",
		password: "123123",
		createdAt: "08/01/2020 9:00 AM",
		isLoggedIn: false
	},
	{
		_id: "fg12cy",
		username: "Asab",
		email: "asab@asab.com",
		password: "123456",
		createdAt: "08/01/2020 9:30 AM",
		isLoggedIn: true
	},
	{
		_id: "zwf8md",
		username: "Brook",
		email: "brook@brook.com",
		password: "123111",
		createdAt: "08/01/2020 9:45 AM",
		isLoggedIn: true
	},
	{
		_id: "eefamr",
		username: "Martha",
		email: "martha@martha.com",
		password: "123222",
		createdAt: "08/01/2020 9:50 AM",
		isLoggeIn: false
	},
	{
		_id: "ghderc",
		username: "Thomas",
		email: "thomas@thomas.com",
		password: "123333",
		createdAt: "08/01/2020 10:00 AM",
		isLoggedIn: false
	}
];

const products = [
	{
		_id: "eedfcf",
		name: "mobile phone",
		description: "Huawei Honor",
		price: 200,
		ratings: [
			{ userId: "fg12cy", rate: 5 },
			{ userId: "zwf8md", rate: 4.5 }
		],
		likes: []
	},
	{
		_id: "aegfal",
		name: "Laptop",
		description: "MacPro: System Darwin",
		price: 2500,
		ratings: [],
		likes: ["fg12cy"]
	},
	{
		_id: "hedfcg",
		name: "TV",
		description: "Smart TV:Procaster",
		price: 400,
		ratings: [{ userId: "fg12cy", rate: 5 }],
		likes: ["fg12cy"]
	}
];

// Imagine you are getting the above users collection from a MongoDB database.
//
// a. Create a function called signUp which allows user to add to the collection.
// 		If user exists, inform the user that he has already an account.
//
// b. Create a function called signIn which allows user to sign in to the application
//
const signUp = (email, password, username) => {
	// First: if email exists BECAUSE email is a primary but it can use a username too or both?;
	//
	// SebAsT@eXample.Com -> sebast@example.com
	const email_users = email.toLowerCase();
	// sEbaSCarReram -> sebascarreram
	const username_users = username.toLowerCase();

	// Matches any character that is not a word character (alphanumeric & underscore).
	// Equivalent to [^A-Za-z0-9_]
	const regex = /\W/g;
	// or
	// Here only add a "-" character
	// const regex = /[^A-Za-z0-9_-]/g;

	if (regex.test(username)) {
		return "Special characters not allowed, use numbers, characters and _";
	}

	// ^ -> Matches the beginning of the string, or the beginning of a line if the multiline flag (m) is enabled.
	// 			This matches a position, not a character.
	// [] -> Match any character in the set.
	// \w -> [A-Za-z0-9_]
	// - -> Matches a "-" character
	// \. -> Matches a "." character
	// + -> Matches 1 or more of the preceding token.
	// @ -> Matches a "@" character
	// () -> Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.
	// {2,4} Matches the specified quantity of the previous token. {2,4} will match 2 to 4.
	// $ -> Matches the end of the string, or the end of a line if the multiline flag (m) is enabled.
	// 			This matches a position, not a character.
	const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

	if (!regexEmail.test(email_users)) {
		return "Please enter a valid email address";
	}

	if (password.length < 5) {
		return "Your password is too short";
	}

	if (
		password === "12345" ||
		password === "123456" ||
		password === "1234567" ||
		password === "12345678" ||
		password === "123456789" ||
		password === "1234567890" ||
		password === "0123456789"
	) {
		return "Password is too easy to guess";
	}

	const usersLen = users.length;
	let a = 0;
	while (a < usersLen) {
		if (users[a].email === email) {
			return "That email address already exists";
		}

		// all lowercase after the user can modify its username in settings
		if (users[a].username.toLowerCase() === username_users) {
			return "That username already exists";
		}
		a++;
	}
	// Second: ID random, 6 characters [a-z0-9];
	const alpha = "abcdefghijklmnopqrstuvwxyz";
	const numbers = "01234567890";

	const alphaArray = alpha.split("");
	const numbersArray = numbers.split("");
	// alpha join to numbers;
	const characters = alphaArray.concat(numbersArray);
	// the length of the characters array;
	let charactersLen = characters.length;

	let randomID = "";

	for (let a = 0; a < 6; a++) {
		const numberRandom = Math.floor(Math.random() * charactersLen);
		randomID += characters[numberRandom];
	}
	// Third: create a date actual
	//
	// Date
	const date = new Date();
	const nowYear = date.getFullYear(); // Get the year as a four digit number (yyyy)
	const nowMonth = date.getMonth() + 1; // Get the month as a number (0-11)
	const nowDay = date.getDate(); // Get the day as a number (1-31)
	// Time
	const nowHour = date.getHours(); // Get the hour (0-23)
	const nowMin = date.getMinutes(); // Get the minute (0-59)

	// hours:minutes
	//
	// if the nowHour is 0 and it must add a zero
	const isHour = nowHour < 10 ? `0${nowHour}` : nowHour;
	// if the nowMin is 0 and it must add a zero
	const isMin = nowMin < 10 ? `0${nowMin}` : nowMin;

	const timeNow = `${isHour}:${isMin}`;
	// day/month/year
	const dateNow = `${nowDay}/${nowMonth}/${nowYear} ${timeNow}`;

	// fourth: isLoggedIn
	const isLoggedIn = false;

	users.push({
		_id: randomID,
		username: username_users,
		email: email_users,
		password: password,
		createdAt: dateNow,
		isLoggedIn: isLoggedIn
	});
	return "ADDED";
};

console.log(signUp("sesssswbs@example.com", "12345678", "sebas_Carreram"));

console.log(users[users.length - 1]);
//
//
//
const signIn = (username, password) => {
	// username or email?
};
