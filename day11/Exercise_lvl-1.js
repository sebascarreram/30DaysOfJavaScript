const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

console.log("~~~~~~~~~~~~~");
// Question 1
// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp
//
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log({"Euler": e, "Pi": pi, "Gravity": gravity,"Human body temp" :humanBodyTemp, "Water Boiling Temp": waterBoilingTemp})
console.log("~~~~~~~~~~~~~");
// Question 2
// Destructure and assign the elements of countries array to fin, est, sw, den, nor
//
const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor)
console.log("~~~~~~~~~~~~~");
// Question 3
// Destructure the rectangle object by its properties or keys.
//
const { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter)
