// Lecture 40 Part 2

// var x = 2;
// a();

// function a() {
//     var x = 51;
//     b();
// }

// function b() {
//     console.log(x);
// }

// Lecture 42 Part 2

// var x;
// console.log(x);

// Lecture 44

// Defining a default value for the arguement just in case if the function is invoked without passing any parameters.
// function food(randomfood = "Chicken") {
//     console.log("I love " + randomfood);
// }
// food("Sushi");
// food(); // This will invoke the function by triggering the function to use the default value i.e. Chicken

// Lecture 45

// var person = new Object();
// person.fname = "Mark";
// person.lname = "Zuckerberg";
// // person = { color: "Blue", country: "California" };
// console.log(person);

// person.favourites = new Object();
// person.favourites.color = "Blue";
// person.favourites.place = "California";
// console.log(person);

// var person = new Object();
// person["fname"] = "Mark";
// console.log(person.fname);
// console.log(person["fname"]);

// Lecture 46 (Functions are also a Object Data Type)

// function multiply(x, y) {
//     return x * y;
// }
// console.log(multiply(5, 3));
// multiply.version = "v.1.0.0"; // Declaring a name and value pair for our function just like Object.
// console.log(multiply);
// console.log(multiply.version);

// Making Function factory

// function makemultiplier(multiply) {
//     var result = function(anothermultiplier) {
//         return multiply * anothermultiplier;
//     };
//     return result;
// }

// var x = makemultiplier(3);
// console.log(x(9));

// Lecture 47 Part 2

// Passing by Reference

// function passByReference(value) {
//     console.log("Original Value inside function : ");
//     console.log(value);
//     value.a = 5;
//     console.log("Changed value inside function: ");
//     console.log(value);
// }

// console.log("--------------Passing by reference");
// var x = { a: 7 };
// passByReference(x);
// console.log("Original value after invoking the function : ");
// console.log(x);

// // Passing by Value

// function passByReference(value) {
//     console.log("Original Value inside function : ");
//     console.log(value);
//     value = 5;
//     console.log("Changed value inside function: ");
//     console.log(value);
// }

// console.log("--------------Passing by Value");
// var x = 7;
// passByReference(x);
// console.log("Original value after invoking the function : ");
// console.log(x);

// Lecture 48

// function test() {
//     console.log(this);
// }
// test();

// Function constructor

// function Circle(radius) { 
//     console.log("Inside the Constructor");
//     // console.log(this);
//     this.radius = radius;
//     // Creating a function contructor method.
//     this.getArea = function() {
//         return Math.PI * Math.pow(this.radius, 2);
//     };

// }
// var circle_object = new Circle(10);
// console.log("Outside the Constructor");
// // console.log(this);
// console.log("Radius of the circle = " + circle_object.radius);
// console.log("Area of the circle with radius " + circle_object.radius + " : " + circle_object.getArea());

// Prototype

// function Person(age) {
//     this.age = age;
// }
// // Declaring a prototype
// Person.prototype.getAge = function() {
//     console.log(this.age);
// };

// var person_obj = new Person(18);
// console.log(person_obj);
// person_obj.getAge();

// Lecture 52 

// IIFE

(function(name) {
    var arr = [
        "This is a array",

        {
            person: { name: name, age: 18, color: "None" }
        },

        function(myname) {
            return ("This is my Name : " + myname);
        }
    ];

    // Output statements.
    console.log(arr);
    console.log(arr[1].person.age);
    console.log(arr[2]("Kushagra"));
})("John");