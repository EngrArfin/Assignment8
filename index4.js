/* Ansert To the Question No-7 */
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? true
    : false;
}

let year = parseInt(prompt("Enter a year:"));

if (isNaN(year)) {
  console.log("Enter  year.");
} else {
  if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
}
