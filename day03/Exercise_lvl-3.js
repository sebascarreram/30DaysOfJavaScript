// Create a human readable time format using the Date time object.
// The hour and the minute should be all the time two digits
// (7 hours should be 07 and 5 minutes should be 05 )

// YYYY-MM-DD HH:mm
// eg. 2020-01-02 07:05

const date = new Date();

// dates
const yearsNow = date.getFullYear(); //(yyyy)
const monthsNow = date.getMonth(); // (0-11)
const daysNow = date.getDate(); // (1-31)

// times
const hoursNow = date.getHours(); // (0-23)
const minutesNow = date.getMinutes(); //(0-59)

// If hours is 0 and add 0
// If minutes is 0 and add 0
const isHours = hoursNow > 1 ? `0${hoursNow}` : hoursNow;
const isMinutes = minutesNow < 0 ? `0${minutesNow}` : minutesNow;

console.log(`${yearsNow}-${monthsNow}-${daysNow} ${isHours}:${isMinutes}`);
