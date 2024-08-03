__Answer to the question no: 1__
ES6 introduced many new features and improvements to JavaScript.
    New Features in ES6:
    •	let and const: Block-scoped variables.
    let x = 10;
    const y = 20;
    •	Arrow Functions: Shorter syntax for writing functions.
    const add = (a, b) => a + b;
    •	Template Literals: String literals allowing embedded expressions.
    const name = "John";
    console.log(`Hello, ${name}!`);
    •	Default Parameters: Functions can have default parameter values.
    function greet(name = "Guest") {
      console.log(`Hello, ${name}!`);
    }
    •	Destructuring Assignment: Extract values from arrays or properties from objects.
    const [a, b] = [1, 2];
    const { name, age } = { name: "John", age: 30 };
    •	Classes: Syntactic sugar over JavaScript's existing prototype-based inheritance.
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      greet() {
        console.log(`Hello, my name is ${this.name}.`);
      }
    }
    •	Modules: Import and export statements for modular code.
    // module.js
    export const pi = 3.14;
    export function multiply(a, b) {
      return a * b;
    }
    
    // main.js
    import { pi, multiply } from './module.js';

__Answer to the question no: 2__
Event Bubbling:  
Event bubbling is a concept in JavaScript where an event that occurs in a nested element first triggers the innermost target element, then bubbles up to its parent elements.
Example:
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Bubbling</title>
</head>
<body>
  <div id="outer" style="padding: 50px; border: 2px solid blue;">
    Outer Div
    <div id="inner" style="padding: 50px; border: 2px solid red;">
      Inner Div
    </div>
  </div>

  <script>
    document.getElementById("inner").addEventListener("click", function() {
      console.log("Inner Div Clicked");
    });

    document.getElementById("outer").addEventListener("click", function() {
      console.log("Outer Div Clicked");
    });
  </script>
</body>
</html>
In this example, if you click on the Inner Div, you will see both "Inner Div Clicked" and "Outer Div Clicked" messages in the console because the event bubbles up from the inner div to the outer div.
Event Delegation : 
Event delegation is a technique that takes advantage of event bubbling to handle events at a higher level in the DOM, rather than attaching individual event handlers to each descendant.
Example:
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Delegation</title>
</head>
<body>
  <ul id="parent" style="border: 2px solid green; padding: 20px;">
    <li class="item">Item 1</li>
    <li class="item">Item 2</li>
    <li class="item">Item 3</li>
    <li class="item">Item 4</li>
    <li class="item">Item 5</li>
  </ul>

  <script>
    document.getElementById("parent").addEventListener("click", function(event) {
      if (event.target && event.target.matches("li.item")) {
        console.log("List item clicked: " + event.target.textContent);
      }
    });
  </script>
</body>
</html>
In this example, the event listener is attached to the parent <ul> element. When any <li> with the class item is clicked, the event bubbles up to the parent, and the event handler logs the clicked item's text. This way, you don't need to add separate event listeners to each <li> element.

__Answer to the question no: 3__
•	Local Storage: Stores data with no expiration date, data is not sent to the server with every request.
localStorage.setItem('key', 'value');
console.log(localStorage.getItem('key'));
•	Session Storage: Stores data for the duration of the page session, data is not sent to the server with every request.
sessionStorage.setItem('key', 'value');
console.log(sessionStorage.getItem('key'));
•	Cookies: Stores data that can be sent to the server with every request, can have expiration dates.
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC";
console.log(document.cookie);

__Answer to the question no: 4__
•	display: inline: Does not start on a new line and only takes up as much width as necessary.
.inline {
  display: inline;
}
•	display: inline-block: Similar to inline but allows setting width and height.
.inline-block {
  display: inline-block;
  width: 100px; height: 50px;
}
•	display: block: Starts on a new line and takes up the full width available.
.block {
  display: block;
}

__Answer to the question no: 5__
CSS3 introduced many new features and enhancements to CSS.
New Features in CSS3:
•	Flexbox: Layout model for arranging elements.
.container {
  display: flex;
}
•	Grid Layout: Two-dimensional layout system.
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
•	Transitions: Smoothly animate property changes.
.box {
  transition: background-color 0.5s ease;
}
.box:hover {
  background-color: blue;
}
•	Transforms: Move, rotate, scale, and skew elements.
.rotate {
  transform: rotate(45deg);
}
•	Animations: Create complex animations with keyframes.
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}
.animate {
  animation: slide 2s forwards;
}
•	Multiple Backgrounds: Apply multiple backgrounds to an element.
.multiple-backgrounds {
  background: url(image1.png), url(image2.png);
}
•	Media Queries: Apply styles based on device characteristics.
@media (max-width: 600px) {
  .responsive {
    background-color: lightblue;
  }
}
