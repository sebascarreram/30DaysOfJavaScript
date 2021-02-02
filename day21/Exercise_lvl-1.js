// Question 1
// Create an index.html file and put four p elements as above: Get the first paragraph by
// using document.querySelector(tagname) and tag name
//

//const getFirst = document.querySelector('p');

console.log("~~~~~~~~~~~~~~")
// Question 2
// Get get each of the the paragraph using document.querySelector('#id') and by their id
//

//const getFirst = document.querySelector('#first-paragraph');

console.log("~~~~~~~~~~~~~~")
// Question 3
// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
//
// const getAll = document.querySelectorAll("p");
//
console.log("~~~~~~~~~~~~~~")
// Question 4
// Loop through the nodeList and get the text content of each paragraph
//
// getAll.forEach(el => console.log(el))
//
console.log("~~~~~~~~~~~~~~")
// Question 5
// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
//
const txt = document.querySelectorAll('p');
txt[0].textContent = "Welcome"

console.log("~~~~~~~~~~~~~~")
// Question 6
// Set id and class attribute for all the paragraphs using different attribute setting methods
//

const idClass = document.querySelectorAll('p')
idClass[2].setAttribute('id', 'third-paragraph')

