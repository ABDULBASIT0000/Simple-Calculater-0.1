#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome To Simple Calculator !!!");
// Asking Questions from Users through Inquirer
let answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstnumber" },
    { message: "Enter Second Number", type: "number", name: "secondnumber" },
    {
        message: "Select One Operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "division", "Percentage"]
    },
]);
// Conditional statements If-Else
if (answers.operator === "Addition") {
    console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstnumber - answers.secondnumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstnumber * answers.secondnumber);
}
else if (answers.operator === "division") {
    console.log(answers.firstnumber / answers.secondnumber);
}
else if (answers.operator === "Percentage") {
    console.log(answers.firstnumber % answers.secondnumber);
}
else {
    console.log("Invalid");
}
