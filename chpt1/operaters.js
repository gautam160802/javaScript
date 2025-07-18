// // conditional statements

// // let age = 16;
// // if (age > 18) {
// //   console.log("YOu can vote");
// // }
// // console.log("you cant");

// // let color;
// // if (mode === "dark-mode") {
// //   color = "vlack";
// // } else {
// //   color = "whilt";
// // }

// // let num = 109;
// // if (num % 2 == 0) {
// //   console.log("done");
// // }
// // console.log("na");

// // let age = 77;
// // age > 18 ? console.log("adult") : "na";

// // // switch and break
// // const expr = "Papayas";
// // switch (expr) {
// //   case "Oranges":
// //     console.log("Oranges are $0.59 a pound.");
// //     break;
// //   case "Mangoes":
// //   case "Papayas":
// //     console.log("Mangoes and papayas are $2.79 a pound.");
// //     // Expected output: "Mangoes and papayas are $2.79 a pound."
// //     break;
// //   default:
// //     console.log(`Sorry, we are out of ${expr}.`);
// // }
// // const foo = 0;
// // switch (foo) {
// //   case -1:
// //     console.log("negative 1");
// //     break;
// //   case 0: // Value of foo matches this criteria; execution starts from here
// //     console.log(0);
// //   // Forgotten break! Execution falls through
// //   case 1: // no break statement in 'case 0:' so this case will run as well
// //     console.log(1);
// //     break; // Break encountered; will not continue into 'case 2:'
// //   case 2:
// //     console.log(2);
// //     break;
// //   default:
// //     console.log("default");
// // }
// // Logs 0 and 1

let number = prompt("Enter a number");
if (number % 5 === 0) {
  console.log(number, "done");
}
