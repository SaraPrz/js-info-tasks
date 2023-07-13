/*1.Hello, object */
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// console.log(user);

//*********************************************************************************** */

/* 2.Check for emptiness */
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.Should work like that
// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false
// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// isEmpty(schedule);

/********************************************************************************** */ 

/* 3. We have an object storing salaries of our team:*/
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);

/***************************************************************************************************************************************** */ 

/* 4. Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
For instance: */
// before the call
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             let multiply = 0;
//             multiply = obj[key] * 2;
//             console.log(multiply);
//         }
//     }
// }

// multiplyNumeric(menu);