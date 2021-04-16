function main() {
  console.log("Let's roll some dice baby!");
  console.log("--------------------------");

  // rolls(iterates) 10 times
  for (let i = 0; i < 10; i++) {

    const die1 = die.roll();
    const die2 = die.roll();

    let message = `${die.display(die1)} + ${die.display(die2)} == ${die1 + die2}`

    if (die1 === die2) {
      message += " DOUBLES!"
    }
    console.log(message)
  }
}

// die contains 2 functions: roll() which returns the numerical value of that roll (dieValue), 
// display() which will accept a num parameter that will eventually be the value returned by roll() (dieValue) and then
// converts it to dieface unicode chars 
const die = {
  roll() {
    // dieValue is a random integer between 1 and 6
    const dieValue = 1 + Math.floor(Math.random() * 6)
    return dieValue
  },
  // display allows the user to see the image of the dice in the console
  // by setting the value to Unicode Characters
  display(num) {
    let dieString = ""
    switch (num) {
      case 1:
        dieString = "\u2680";
        break;
      case 2:
        dieString = "\u2681";
        break;
      case 3:
        dieString = "\u2682";
        break;
      case 4:
        dieString = "\u2683";
        break;
      case 5:
        dieString = "\u2684";
        break;
      case 6:
        dieString = "\u2685";
        break;
    }
    console.log(num)
    return dieString
  }

}

main();
