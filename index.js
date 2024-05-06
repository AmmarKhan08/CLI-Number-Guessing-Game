#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number.
// 2) user input for guessing number.
// 3) compare user input with computer generated number and show result.
// if only write math.random then it will be given numbers in decimals in below line.
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
