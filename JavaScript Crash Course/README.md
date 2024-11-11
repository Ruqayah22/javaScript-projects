# JavaScript 
## from 
[JavaScript Crash Course For Beginners](https://www.youtube.com/watch?v=hdI2bqOjy3c&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=1&t=3s)

* JavaScript is a high level interpreted language. 
### And what high level means 
is there's a lot of abstraction, meaning that you don't have to deal with things like memory management on your machine, stuff like that, like you would with a low level language such as C or C++. 
### And interpreted just means 
that the program is executed directly without having to run through a compiler. So for instance, when you write, let's say, Java, which is not related to JavaScript, by the way. Sometimes beginners get the two confused, but Java is a completely different language. Java is actually a compiled language, which means when you write your code, you actually have to run it through something called the compiler in order for it to run on your machine. JavaScript, however, is a scripting language and it's interpreted. 
JavaScript also conforms to the ECMAScript specification. In fact, you could say JavaScript is ECMAScript. 

## the Mozilla Developer Network

[MDN](https://developer.mozilla.org/en-US/)

[MDN console](https://developer.mozilla.org/en-US/docs/Web/API/console)

[source code that used in the course](https://embed.plnkr.co/plunk/8ujYdL1BxZftGoS4Cf14)

## var let and const: 

1. var is globally scoped. So if we have, let's say, a conditional, like an if statement, and we set a variable, and then outside of that block, outside of that if statement, there's another variable with that same name that can be a conflict and it can cause problems. So for the most part, you don't want to use var anymore. 
2. the difference between let and const is with let, you can reassign the values. 
3. Const is short for constant, which means it can't be changed. It can't be directly reassigned. 
## the question, when do we use let and when do we use const? 
> Now, this is different for everybody. Some people will just use let. What I do and what I find a lot of other people do is always use const unless you know you're going to reassign the value. I think this makes your code more robust, more secure, less prone to errors. Just use const unless you know you're going to reassign it. So an example of something I would reassign would be like a score in a game. So I would do something like let score. Maybe just initialize it and then something happens and then we want to change the score directly. So score may equal 10 and then I'll down here and console log score and we get 10. Now we can't do this with const. Even if we don't reassign it, I can't even initialize it with const. You see we get this error missing initializer because you have to add a value if you use const. OK, but for the most part, you're not going to directly reassign your values like this. And when you're dealing with arrays and objects and stuff like that, you can change the values within the array or object. You just can't reassign the entire thing. 
## data types:
* strings. 
* numbers. 
* Boolean
* null 
* undefined 
> What null means is basically empty. It's a variable, but there's nothing in it. 

> undefined, which we can explicitly define. We can explicitly define undefined, or we can just initialize something, but we have to use let. If I just say let z like that with no value, that's going to be undefined as well. 
### test the type:
` console.log(typeof variableName) `

### Array:
`const number = new Array();`

> when you see this new keyword and then something after it, this is a constructor. So we're constructing an array and we can pass in. 

another way to write it:
```
const fruits = ['apple', 'oranges', 'pears'];
console.log(fruits);
```
to add elements to the array:
```
const fruits = ['apple', 'oranges', 'pears'];

fruits[3] = 'grapes'; //add to the end.

fruits.push('mangos'); //add to the end also.

fruits.unshift('strawberries'); //add to the beginning.

fruits.pop(); //to remove the last element from the array.

console.log(fruits);

console.log(Array.isArray(fruits)); //to check it is array or not.

console.log(Array.indexOf('oranges')); //to get the index of a certain value, 

```
OBJECT LITERALS
```

const person = {
  firstName: 'John',
  lastName: 'Don';
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  }
}

// Get the object
console.log(person)

console.log(person.firstName, person.lastName)

// Get single value
console.log(person.name)

// Get array value from the object
console.log(person.hobbies[1]);

// Get embedded object
console.log(person.address.city);

// Add property
person.email = 'jdoe@gmail.com';

```

// Array of objects
```
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isComplete: false
  },
  {
    id: 2,
    text: 'Dinner with wife',
    isComplete: false
  },
  {
    id: 3,
    text: 'Meeting with boss',
    isComplete: true
  }
];

console.log(todos);

// Get specific object value
console.log(todos[1].text);

// Format as JSON
console.log(JSON.stringify(todos)); //this is how we would send data to a server. 
```

### JSON 
> is a data format, and it's used a lot within full stack development and using APIs when you're sending data to a server. You usually send it in JSON format and receive it in JSON format. And it's very similar to object literals. 

### format JSON
- to format array to json.
- just going to paste in our array and say format JSON.
[JSON Formatter](https://www.freeformatter.com/json-formatter.html)

### LOOPS
1. for loop 
``` 
// For
for(let i = 0; i <= 10; i++){
  console.log(`For Loop Number: ${i}`);
}
```
* (let i = 0;) The first is going to be the assignment of the the iterator or the variable. 
* And then we use semicolons to separate these. 
* (i <= 10;) Next is going to be the condition that needs to be met. 
* (i++) And then lastly is just the increment. 
* So it's going to happen is whatever we put in here ({...}) is going to run until this is (for(let i = 0; i <= 10; i++)) true. 

2. While loop
``` 
// While
let i = 0
while(i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}
```
* The difference with a lot while loops is we set the variable outside of the loop. 
* you want to make sure that you increment the i. If you don't, this will be a never ending loop because this condition will never be met. 

### Loop Through Arrays
```
// For Loop
for(let i = 0; i < todos.length; i++){
  console.log(` Todo ${i + 1}: ${todos[i].text}`);
}

// For...of Loop
for(let todo of todos) { 
  console.log(todo.text);
}
// todos is the name of the array, and the todo is the element the we will used it.
```
### HIGH ORDER ARRAY METHODS (show prototype)
```
// forEach() - Loops through array

todos.forEach(function(todo, i, myTodos) {
  console.log(`${i + 1}: ${todo.text}`);
  console.log(myTodos);
});

// map() - Loop through and create new array (which will allow us to create a new array from an array)

const todoTextArray = todos.map(function(todo) {
  return todo.text;
});

console.log(todoTextArray);

// filter() - Returns array based on condition
const todo1 = todos.filter(function(todo) {
  // Return only todos where id is 1
  return todo.id === 1; 
});

const todoCompleted = todos.filter(function(todo) {
  return todo.isComplete === true; 
}).map(function(todo) {
  return todo.text;
});

``` 
```
1. x = 10; -> assign a value to it.
2. x == 10; -> double equal, this will not match the data types. It's just the value. 
3. x === 10; -> triple equal, this will match the data types and the value.
```

### CONDITIONALS
1. If/Else Statement
```
// Simple If/Else Statement
const x = 30;

if(x === 10) {
  console.log('x is 10');
}

if(x === 10) {
  console.log('x is 10');
} else {
  console.log('x is greater than 10');
}

if(x === 10) {
  console.log('x is 10');
} else if(x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10')
}
const x = 4;
const y = 11;

if(x > 5 || y > 10){
  console.log('x is more the 5 or y is more the 10');
}
// || it is mean or, one of them is to be true. 

if(x > 5 && y > 10){
  console.log('x is more the 5 or y is more the 10'); 
}
// && it is mean and, they both have to be true. 

// Ternary operator / Shorthand if
const z = color === 'red' ? 10 : 20;

const x = 11;

const color = x > 10 ? 'red' : 'blue';

console.log(color);

// const variable = the condition ? if this is true : if it's not true.  
* question mark is actually the ternary operator.  
* : is mean Else.

```

2. Switch
```
color = 'blue';

switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:  
    console.log('color is not red or blue')
    break;
}

```
### FUNCTIONS
```
function addNumbers(num1 = 1, num2 = 1){
  // console.log(num1 + num2);
  return num1 + num2;
}
// addNumbers(5,5);
console.log(addNumbers(5,5));

function greet(greeting = 'Hello', name) {
  if(!name) {
    // console.log(greeting);
    return greeting;
  } else {
    // console.log(`${greeting} ${name}`);
    return `${greeting} ${name}`;
  }
}

// greeting = 'Hello' it mean the default value.

// ARROW FUNCTIONS
const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
console.log(greet('Hi'));
```

### OOP (object oriented programming)

1. ES5

```
// Constructor Function
function Person(firstName, lastName, dob) {
  // Set object properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // Set to actual date object using Date constructor
  // this.getBirthYear = function(){
  //   return this.dob.getFullYear();
  // }
  // this.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`
  // }
}

// Get Birth Year
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
}

// Get Full Name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}


// Instantiate an object from the class
const person1 = new Person('John', 'Doe', '7-8-80');
const person2 = new Person('Steve', 'Smith', '8-2-90');

console.log(person2);

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
```
2. ES6 (ES6 CLASSES)

```
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  // Get Birth Year
  getBirthYear() {
    return this.dob.getFullYear();
  }

  // Get Full Name
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person1 = new Person('John', 'Doe', '7-8-80');
console.log(person1.getBirthYear());

```
* A **method** is a function inside of a class.
* constructor() is a method. 
* So that's why it's called __syntactic sugar__. You're doing the same thing. You're just doing it in a different way. That's a little prettier and a little easier to write and read. 

### DOM 

- __window object__ is the parent object of the browser.
`console.log(window)`

```
 console.log(window);
 // alert(1)
 window.alert(1); 
 ```
 > Since window is the very top level, we don't actually have to do window dot for anything that is in window. 

> __Local storage__ So that's a way to store stuff in your browser. That's part of the window object. 

> **The document** is what I want to show you, though. This is the this is what makes up the DOM, the document object model. All right. 

**_document_** is what we want to use to select things from the document. 

` document.getElementById('id')`
> that is used to grab single elements is get element by ID.
`document.querySelector('')`
* which is is much newer than get element by id Now.
* which is a javascript library that made it easy to select other things than IDs, so things like classes, tags themselves, pretty much anything. 
* Query Selector works just like jQuery for the most part in terms of selecting single elements. 
* if we want to grab: a class, a tag like h1 ...

`document.querySelectorAll('')` 
* So query selector all is meant to select more than one. 
* what this gives us is something called the node list, which is very similar to an array. In fact, we can run array methods on it. 
* We can do like for each is and stuff like that and you'll see each one has different methods and properties that we can use on it. 
* Query selector all, you could put an ID, a class, a tag, anything. 

` document.getElementsByClassName('')`
* which of course can only be classes, so we could just pass in item, not dot item, because it's going to be a class no matter what. 
* It's not a node list. It's an HTML collection. OK, now the difference with this is an HTML collection. You actually can't use array methods on you have to manually convert it to an array if you want to run array methods on it. 
* I wouldn't use this. I would stick to query selector all. 

` document.getElementsByTagName('li')`
* again, we get an HTML collection. 

> so you generally want to use __query selector__ and __query selector all__. Sometimes I use **get element by ID**, but generally I don't use these. 
##  MANIPULATING THE DOM
```
const ul = document.querySelector(".items");
ul.remove(); // remove all the elements 

ul.lastElementChild.remove(); // remove the last element

ul.firstElementChild.textContent = "Hello"; // change the first element to what we write here 

ul.children[1].innerText = "Brad"; // select by index which element we want to change it .

ul.lastElementChild.innerHTML = "<h1>Hello</h1>"; //if you want to add HTML dynamically, you can do it with inner HTML. 
```
change any CSS property 

```
const btn = document.querySelector(".btn");
btn.style.background = 'red';

```
> Now, you might be saying, why would I do this? We have CSS. but you can have events and functions and you can make this dynamic. So you can have like click on one thing and have the color of something else change or have the the size change or anything at all. So you can really manipulate things in your user interface in real time. 

### EVENTS
```
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log('click');
  });
```
> if we want to create an event listener, we do add event listener. And this takes in two things: So **the first** is going to be the event (the event we want, which in this case I'm going to I want to click.). __The second__ is going to be a function. that you want to run when this event happens. (So when the button is clicked). I'm actually going to use an __arrow function__. You can just, you know, put in a regular function, but I'm going to use an arrow function. 

`e.preventDefault();`
> Notice that it flashes really fast and it just it goes away. The reason for that is this is a submit button. And when you submit a form, it actually submits to the file. So if you have either a click on a submit button or you have a form submit, you have to stop the prevent. I mean, you have to prevent the default behavior. So the way that you do that is you take that event parameter and you call prevent. OK, call that method and that will stop it. 

``` 
console.log(e);
console.log(e.target);
console.log(e.target.className);
console.log(e.target.id);
```
> All right. So let's actually take a look at the event object. So click shows us the event object, which has a bunch of stuff on it, even gives you like the position of the mouse and stuff like that. But if we look at target. 
> So right here target this this will give us the actual element. So if I do II dot target, and I click it again. It'll actually give me the element that the event is on, which is the button. Okay, and we can get things like the class. So I could say, give me the class name. Class name. Save, and then I'll go ahead and click, and we get BTN. 
> you can also get the ID, if there is one, there isn't an id on it, so we're not going to get anything, but you can get all the different attributes of the event you click. 

```
document.getElementById('my-form').style.background = '#ccc';
```
> So let's say when we click, we want to change some stuff up. So I'm going to do document dot query selector and let's grab the form. So it has an ID. of my form and let's change the background. 

``` 
document.querySelector('body').classList.add('bg-dark');
```
> We could we could even add a class. 

<!-- make a horizontal line -->
----
<!-- 
***
___ 
-->
### <u>How To Run JavaScript file:</u>
`~ node fileName`
