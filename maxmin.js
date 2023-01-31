let continueLoop = true;

do {
  let input = prompt("enter an array: ");
  try {
    let array = JSON.parse(input);
    //console.log(array)

    let newArr = [];
    array.sort((a, b) => a - b);
    //console.log(array)

    let min = array[0];
    let max = array[array.length - 1];

    newArr.push(min);
    newArr.push(max);
    console.log(newArr);
  } catch (error) {
    console.log("Invalid input, try using a valid JSON", error.message);
  }
  let userChoice = prompt("Would you like to enter another array? y or n?");
  if (userChoice === "y") {
    (continueLoop === userChoice) === "y";
  } else if (userChoice === "n") {
    console.log("Alright, see you soon!");
    break;
  } else {
    console.log("Invalid input, Try again");
  }
} while (continueLoop);
