let secreteKey = "";
function generateSecretKey() {
  secreteKey = "";
  const length = 6;
  const charset = "0123456789";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    secreteKey += charset[randomIndex];
  }
  document.getElementById("secreteKey").innerText = secreteKey;
  //   console.log(secreteKey);
}
// console.log(secreteKey);

// Right sides
const display = document.getElementById("result");
let expression = "";

function addNumber(num) {
  if (expression.length >= 6) {
    return;
  }
  expression += num;
  display.innerHTML = expression;
  //   console.log(num);
}

// Just delete last digit
function clearLastDigit() {
  expression = expression.slice(0, -1); // for -1, count from last digit
  // console.log(typeof expression);
  display.innerHTML = expression;
}

function clearDisplay() {
  expression = "";
  display.innerHTML = "0";
}
// match function of the two string
function match() {
  let variable = document.getElementById("var");
  variable.innerText = "";
  //   console.log(secreteKey);
  //   console.log(expression);
  if (secreteKey == expression) {
    // console.log("Matched");
    variable.innerText = "Your Secret Key is Matched";
  } else {
    variable.innerText = "Your Secret Key is not Matched";
  }
}
