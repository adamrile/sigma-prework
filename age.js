let askDate = prompt("Enter a date in the form 'YYYY-MM-DD'");
function calculateDifference(askDate) {
  const today = new Date(); //given in milliseconds
  const givenDateMS = Date.parse(askDate); //convert the date inputted into milliseconds
  const timeInMs = today - givenDateMS;
  const timeInYears = timeInMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(timeInYears);
}
const difference = calculateDifference(askDate);
console.log(difference);
