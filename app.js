

// Higher Order Function kya hota hai?

// high order func aesa func hota h jo ksi dusry func ko accept krey ya return krey

// Kya map() ek higher order function hai?

// G bilkul map aik high order func hai

// Kya forEach() value return karta hai?

// G bilkul forEach value return krta h

// Ek example do Higher Order Function ka.

// function greet() {
//     console.log('Hello Bhai!');
    
// }function myFunc(callback) {
//     callback();
// }

// myFunc(greet);

// filter() ka use kis liye hota hai?

// Condition k mutabiq values dena

// reduce() ka basic purpose kya hai?

// reduce ka basic purpose array ki sari values ko combine krky ek single value bnata h

// find() aur filter() me kya difference hai?

// find() condition match karne wala pehla item return karta hai.
// filter() condition match karne wale saare items return karta hai, ek naye array mein.

// map() aur forEach() me kya difference hai?

// map() naya array return karta hai
// forEach undefined return krta hai

// Array Higher Order Methods
// map()
// [1,2,3,4] array ke tamam numbers ko double karne ke liye map() use karo.

// let arr = [1,2,3,4];

// let result = arr.map(function(num) {
//     return num * 2;
    
// })

// console.log(result);

// Ek array of names ko uppercase me convert karo using map().


// let arr = ['Haroon'];

// let result = arr.map(function(name) {
//     return name.toUpperCase();
// }) 

// console.log(result);

// Prices array me har price me 10 add karo using map().

// let prices = [10, 20, 30];

// let result = prices.map(function(price) {
//     return price + 10;
// })

// console.log(result);

// Students names ke sath "Mr." add karo using map().

// let students = ['Haroon'];

// let result = students.map(function(student) {
//     return "Mr. " + student 
// })

// console.log(result);

// Numbers array ko square me convert karo.

// let numbers = [10, 20, 30];

// let result = numbers.map(function(num) {
//     return num * num;
// })

// console.log(result);

// filter
// [1,2,3,4,5,6] me se sirf even numbers filter karo.

// let numbers = [1, 2, 3, 4, 5, 6];

// let result = numbers.filter(function(num) {
//     return num % 2 === 0;
// });

// console.log(result);

// Names array me sirf wo names filter karo jinki length 5 se zyada ho.

// let names = ['Haroon', 'Rahim'];

// let result = names.filter(function(name) {
//     return name.length > 5;
// })

// console.log(result);

// Ek prices array me sirf prices greater than 100 filter karo.

// let prices = [100, 200, 300];

// let result = prices.filter(function(price) {
//     return price > 100;
// })

// console.log(result);

// forEach()
// Array ke tamam elements console me print karo using forEach().

// let numbers = [1, 2, 3, 4, 5];

// let result = numbers.forEach(function(num) {
//     console.log(num);
       
// })

// Ek fruits array ko numbering ke sath print karo.

// let fruits = ['Apple', 'Mango', 'Banana', 'Orange'];

//    fruits.forEach(function(fruit, index) {
//     console.log(`${index + 1}. ${fruit}`);
    
// })

// Users array me har user ko welcome message do.

// let users = ['Haroon', 'Ali', 'Bilal'];

// users.forEach(function(user) {
//     console.log(`${'welcome '}` + `${user}`);
    
// })

// Ek array ka total manually forEach() se nikalo.

// let numbers = [10, 20, 30];

// let total = 0;

// numbers.forEach(function(num) {
//     total = total + num;
// })

// console.log('Total:', total);

// Har student ka naam uppercase me print karo.

// let students = ['Haroon','Ali', 'Bilal'];

// students.forEach(function(stud) {
//     console.log(stud.toUpperCase());
    
// })

// find()
// [10,20,30,40] me se first number greater than 25 find karo.

// let numbers = [10, 20, 30, 40];

// let result = numbers.find(function(num) {
//    return num > 25;
// })

// console.log(result);

// Users array me "Ali" naam ka user find karo.

// let users = ['Haroon', 'Ali', 'Bilal'];

// let result = users.find(function(user) {
//     return user === 'Ali';
// })

// console.log(result);

// Ek products array me first expensive product find karo.

// let products = [
//     {name: "Pen", price: 20},
//     {name: "Book", price: 150},
//     {name: "Beg", price: 1000},
//     {name: "Laptop", price: 50000},
// ];

// let result = products.find(function(product) {
//     return product.price > 500;
// })

// console.log(result);

// Ek array me first even number find karo.

// let numbers = [1, 2, 3, 4, 5];

// let result = numbers.find(function(num) {
//     return num % 2 === 0;
// })

// console.log(result);

// reduce()
// [1,2,3,4] ka sum reduce() se nikalo.

// let numbers = [1, 2, 3, 4];

// let result = numbers.reduce(function(num, total) {
//     return total + num;
// })

// console.log(result);

// Prices array ka total calculate karo.

// let price = [100, 200, 300];

// let result = price.reduce(function(price, total) {
//      return price + total;
// })

// console.log(result);

// Numbers array ka maximum value find karo using reduce().

// let numbersArr = [10, 20, 30];

// let result = numbersArr.reduce(function(num, total) {
//     if(num > total) {
//       return num;
//     }else {
//         return total;
//     }
// }, numbersArr[0]);

// console.log(result);

// Ek words array ko single sentence me convert karo.

// let words = ['I', 'am', 'learning', 'javascript'];

// let result = words.reduce(function(word, total) {
//     return word + total;
// })

// console.log(result);

// Shopping cart ka total bill calculate karo.

// let shoppingCart = [
//     {name: "Shirt", price: 1000},
//     {name: "Shoes", price: 3000},
//     {name: "Cap", price: 500},
// ];

// let sum = shoppingCart.reduce(function(sum, product) {
//     return sum + product.price;
// }, 0)

// console.log(sum);

// findLastIndex()
// [1,2,3,2,4,2] me last 2 ka index find karo.

// let numbers = [1,2,3,2,4,2];

// let result = numbers.findLastIndex(function(num) {
//     return num;
// })

// console.log(result);

// Last even number ka index find karo.

// let numbers = [1,2,3,4];

// let result = numbers.findLastIndex(function(num) {
//      return num % 2 === 0;
// })

// console.log(result);

// Ek names array me last "Ali" ka index find karo.

// let names = ['Haroon', 'Bilal', 'Ali'];

// let result = names.findLastIndex(function(name) {
//     return name;
// })

// console.log(result);

// Ek products array me last expensive product ka index nikalo.

// let products = [
//     { name: "Mobile", price: 20000 },
//     { name: "Laptop", price: 80000 },
//     { name: "Mouse", price: 1000 },
//     { name: "Camera", price: 60000 }
// ];

// let index = products.findLastIndex(function(product) {
//     return product.price > 50000;
// });

// console.log(index); // 3

// Array me last negative number ka index find karo.

// let numbers = [1, -2, 3, -4, 5];

// let result = numbers.findLastIndex(function(num) {
//     return num < 0;
// })

// console.log(result);

// Objects
// Object kya hota hai JavaScript me?

// Object ek aisa data structure hai jisme hum kisi cheez ki multiple properties ko key-value pairs ki form mein store karte hain.

// Ek student object banao jisme name aur age ho.

// let studentObj = {
//     name: "Haroon", age: 22
// };

// Object ki property access karne ke 2 methods likho.

// Dot notation
// Bracket notation

// Object me new property add karo.

// let studentObj = {
//     name: "Haroon", age: 22
// };

// studentObj.gender = "Male";

// console.log(studentObj);

// Object ki property delete karo.

// let studentObj = {
//     name: "Haroon", age: 22
// };

// studentObj.gender = "Male";

// delete studentObj.gender

// console.log(studentObj);

// Ek car object banao jisme brand aur model ho.

// let car = {
//     brand: 'Toyotta',
//     model: "Corolla"
// };

// console.log(car);

// Object ke andar function ka example do.

// let user = {
//     name: "Haroon",

//     greet: function() {
//         console.log("Hello " + this.name);
//     }
// };

// user.greet(); // Hello Haroon

// this keyword object me kya karta hai?

// property get krta h

// Object keys kaise nikalte hain?

// let car = {
//     brand: 'Toyotta',
//     model: "Corolla"
// };

// console.log(Object.keys(car));

// Object values kaise nikalte hain?

// let car = {
//     brand: 'Toyotta',
//     model: "Corolla"
// };

// console.log(Object.values(car));

// Nested Objects
// Ek object ke andar object ka example banao.

// let user = {
//     name: "Haroon",
//     age: 22,

//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     }
// };

// User object ke andar address object create karo.

// let userObj = {
//     name: "Haroon",
//     age:  22,
// }

// userObj.address = "Karachi"

// Nested object ki city access karo.

// let user = {
//     name: "Haroon",
//     age: 22,

//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     }
// };

// console.log( user.address.city);

// Student object me marks object add karo.

// let userObj = {
//     name: "Haroon",
//     age:  22,
// }

// userObj.marks = 100;

// console.log(userObj);

// Company object me employee object create karo.

// let company = {
//     name: "Google",

//     employee: {
//         name: "Haroon",
//         age: 22,
//         salary: 100000
//     }
// };

// console.log(company);
// console.log(company.employee.name);   // Haroon
// console.log(company.employee.salary); // 100000

// Array of Objects
// Array of objects kya hota hai?

// JavaScript mein Array of Objects ka matlab hai ek array ke andar multiple objects store karna.
// agar humein multiple students ka data store karna ho, to hum Array of Objects use kar sakte hain.

// Students ka array banao jisme har student ka name aur marks ho.

// let students = [
//     {
//         name: "Haroon",
//         marks: 85
//     },
//     {
//         name: "Ali",
//         marks: 90
//     },
//     {
//         name: "Ahmed",
//         marks: 75
//     }
// ];

// console.log(students);

// Array of objects me se sirf names print karo.

//  let students = [
//     {
//         name: "Haroon",
//         marks: 85
//     },
//     {
//         name: "Ali",
//         marks: 90
//     },
//     {
//         name: "Ahmed",
//         marks: 75
//     }
// ];

// students.forEach(function(student) {
//      console.log(student.name);
     
// });

// Passed students filter karo from array of objects.

// const students = [
//     { name: "Ali", marks: 80 },
//     { name: "Ahmed", marks: 35 },
//     { name: "Sara", marks: 90 },
//     { name: "Usman", marks: 40 }
// ];

// const passedStudents = students.filter(function(student) {
//     return student.marks >= 40;
// });

// console.log(passedStudents);

// map() use karke students names uppercase me convert karo.

// const students = [
//     { name: "Ali", marks: 80 },
//     { name: "Ahmed", marks: 35 },
//     { name: "Sara", marks: 90 },
//     { name: "Usman", marks: 40 }
// ];

// const result = students.map(function(stud) {
//      return stud.name.toUpperCase();
// })

// console.log(result);

// Highest marks wala student find karo.

//  const students = [
//     { name: "Ali", marks: 80 },
//     { name: "Ahmed", marks: 35 },
//     { name: "Sara", marks: 90 },
//     { name: "Usman", marks: 40 }
// ];

// const highestMarks = students.reduce(function(prev, curr) {
//     if (prev.marks > curr.marks) {
//        return prev;
//     }else {
//         return curr;
//     }
// })

// console.log(highestMarks);

// Ek products array me total stock calculate karo.

// const products = [
//     { name: "Mobile", stock: 10 },
//     { name: "Laptop", stock: 5 },
//     { name: "Keyboard", stock: 20 },
//     { name: "Mouse", stock: 15 }
// ];

// const totalStock = products.reduce(function(total, product) {
//     return total + product.stock;
// }, 0);

// console.log(totalStock); // 50

// Array of objects me new object push karo.

//  const students = [
//     { name: "Ali", marks: 80 },
//     { name: "Ahmed", marks: 70 }
// ];

// students.push({ name: "Sara", marks: 95 });

// console.log(students);

// User object ko array me find karo.

//  const users = [
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Ahmed" },
//     { id: 3, name: "Sara" }
// ];

// const user = users.find(function(user) {
//     return user.id === 2;
// });

// console.log(user);

// Array of objects ko loop se print karo.

// const users = [
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Ahmed" },
//     { id: 3, name: "Sara" }
// ];

// for(var i = 0; i < users.length; i++) {
//     console.log(users[i]);
    
// }