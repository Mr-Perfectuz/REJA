// Module package CORE

// Module package EXTERNAL

const moment = require("moment");
const time = moment().format("YYYY-MM-DD");
console.log(time);

const validator = require("validator");
const email = validator.isEmail("foo@bar.com");
console.log(email);

// setInterval(() => {
//   console.log(`Current time ${time}`);
// });

// const inquirer = require("inquirer");
// inquirer
//   .createPromptModule([
//     { type: "input", name: "raqam", message: "raqamni kiriting" },
//   ])
//   .then((answer) => {
//     console.log(answer);
//   })
//   .catch((err) => console.log(err));

// Module package FILE
