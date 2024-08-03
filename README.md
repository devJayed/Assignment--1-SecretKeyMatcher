__Answer to the question no: 1__ </br>
ES6 introduced many new features and improvements to JavaScript.
    New Features in ES6:</br>
    let and const: Block-scoped variables.</br>
    let x = 10;</br>
    const y = 20;</br>
    Arrow Functions: Shorter syntax for writing functions.</br>
    const add = (a, b) => a + b;</br>
    Template Literals: String literals allowing embedded expressions.</br>
    const name = "John";</br>
    console.log(`Hello, ${name}!`);</br>
    Default Parameters: Functions can have default parameter values.</br>
    function greet(name = "Guest") {</br>
      console.log(`Hello, ${name}!`);</br>
    }</br>
    Destructuring Assignment: Extract values from arrays or properties from objects.</br>
    const [a, b] = [1, 2];</br>
    const { name, age } = { name: "John", age: 30 };</br>
    Classes: Syntactic sugar over JavaScript's existing prototype-based inheritance.</br>
    class Person {</br>
      constructor(name, age) {</br>
        this.name = name;</br>
        this.age = age;</br>
      }</br>
      greet() {</br>
        console.log(`Hello, my name is ${this.name}.`);</br>
      }</br>
    }</br>
    Modules: Import and export statements for modular code.</br>
    // module.js</br>
    export const pi = 3.14;</br>
    export function multiply(a, b) {</br>
      return a * b;</br>
    }</br>
    
    // main.js </br>
    import { pi, multiply } from './module.js';</br>

__Answer to the question no: 2__</br>

Event Bubbling:</br>
Event bubbling is a concept in JavaScript where an event that occurs in a nested element first triggers the innermost target element, then bubbles up to its parent elements.</br>

Example:
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
</html></br>
In this example, if you click on the Inner Div, you will see both "Inner Div Clicked" and "Outer Div Clicked" messages in the console because the event bubbles up from the inner div to the outer div.</br>

Event Delegation:</br>
Event delegation is a technique that takes advantage of event bubbling to handle events at a higher level in the DOM, rather than attaching individual event handlers to each descendant.</br>

Example:</br>
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
</html></br>
In this example, the event listener is attached to the parent <ul> element. When any <li> with the class item is clicked, the event bubbles up to the parent, and the event handler logs the clicked item's text. This way, you don't need to add separate event listeners to each <li> element.</br>
    
__Answer to the question no: 3__</br>

Local Storage: Stores data with no expiration date, data is not sent to the server with every request.</br>
localStorage.setItem('key', 'value');
console.log(localStorage.getItem('key'));
Session Storage: Stores data for the duration of the page session, data is not sent to the server with every request.</br>
sessionStorage.setItem('key', 'value');
console.log(sessionStorage.getItem('key'));
Cookies: Stores data that can be sent to the server with every request, can have expiration dates.</br>
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC";</br>
console.log(document.cookie);</br>

__Answer to the question no: 4__</br>

display: inline: Does not start on a new line and only takes up as much width as necessary.</br>
.inline {</br>
  display: inline;</br>
}</br>
display: inline-block: Similar to inline but allows setting width and height.</br>
.inline-block {</br>
  display: inline-block;</br>
  width: 100px; height: 50px;</br>
}</br>
display: block: Starts on a new line and takes up the full width available.</br>
.block {</br>
  display: block;</br>
}</br>

__Answer to the question no: 5__</br>

CSS3 introduced many new features and enhancements to CSS.</br>
New Features in CSS3:</br>
Flexbox: Layout model for arranging elements.</br>
.container {</br>
  display: flex;</br>
}</br>
Grid Layout: Two-dimensional layout system.</br>
.container {</br>
  display: grid;</br>
  grid-template-columns: repeat(3, 1fr);</br>
}</br>
Transitions: Smoothly animate property changes.</br>
.box {
  transition: background-color 0.5s ease;
}
.box:hover { </br>
  background-color: blue;
}
Transforms: Move, rotate, scale, and skew elements.</br>
.rotate {
  transform: rotate(45deg);
}
Animations: Create complex animations with keyframes.</br>
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}
.animate {
  animation: slide 2s forwards;
}
Multiple Backgrounds: Apply multiple backgrounds to an element.</br>
.multiple-backgrounds {
  background: url(image1.png), url(image2.png);
}
Media Queries: Apply styles based on device characteristics.</br>
@media (max-width: 600px) {
  .responsive {
    background-color: lightblue;
  }
}
