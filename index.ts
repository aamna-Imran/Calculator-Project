import inquirer from "inquirer";

let answers = await inquirer.prompt([
{
    type :"number",
    name : "num1",
    message : "please enter your first number : "
},
{
    type :"number",
    name : "num2",
    message : "please enter your second number : "
},
{
    type :"list",
    name : "operator",
    choices : ["Addition(+)","subtraction(-)","multiplication(*)","division(/)"],
    message : "please select your operator : "
}
])

if (answers.operator === "Addition(+)"){
    console.log(`your answer is : ${answers.num1 + answers.num2}`)
} else if (answers.operator === "subtraction(-)"){
    console.log(`your answer is : ${answers.num1 - answers.num2}`)
} else if (answers.operator === "multiplication(*)"){
    console.log(`your answer is : ${answers.num1 * answers.num2}`)
} else if (answers.operator === "division(/)"){
    console.log(`your answer is : ${answers.num1 / answers.num2}`)
} else {
    console.log("please enter valid operator")
}
