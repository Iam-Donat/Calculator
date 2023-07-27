console.log('Hi, Its working 😊🫱🏾‍🫲🏾');


// Getting HTML ELements
const btns = document.querySelectorAll('.calculator button') // Get all buttons

// Display
const displayTop = document.querySelector('.top');
const displayBottom = document.querySelector('.bottom');

//Numbers and Operators
const numBtnValues = document.querySelectorAll('.value');
const operatorBtn = document.querySelectorAll('.operator');

// Action Keys
const decimalOp = document.querySelector('.decimal');
const equalBtn = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear')
const deleteBtn = document.querySelector('.delete');

// Initialize default Value
let firstOperand = '';
let secondOperand = '';
let currentOperand = '';
let operation = '';

// Functions
function numValuesHandler(num) { // numbers value handler
  console.log(num);
  // to control the lengthof the number
  if (firstOperand.length < 10 || operation === '') {
    firstOperand += num;
  } else {
    secondOperand += num;
  }
}

function operatorsHandler(operator) {
  console.log(operator);
  operation = operator;
}


// Events handlers 
numBtnValues.forEach(num => {
  num.addEventListener('click', (e) => {
    numValuesHandler(e.target.textContent);

    displayTop.textContent = firstOperand;
  })
});

operatorBtn.forEach(operator => {
  operator.addEventListener('click', (e) => {
    operatorsHandler(e.target.textContent);
    if (operation === '') {
      currentOperand = firstOperand;
      displayTop.textContent = `${currentOperand}  ${operation}`;
    } else {
      currentOperand = secondOperand;
      displayTop.textContent = `${firstOperand}  ${operation} ${currentOperand}`;
    }

  })
})



// Operations
// function add(a, b) {
//   return a + b
// }

// function substract(a, b) {
//   return a - b
// }

// function multiply(a, b) {
//   return a * b
// }

// function divide(a, b) {
//   return a / b
// }

// function operate(operator, a, b) {
//   a = Number(a)
//   b = Number(b)
//   switch (operator) {
//     case '+':
//       return add(a, b)
//     case '−':
//       return substract(a, b)
//     case '*':
//       return multiply(a, b)
//     case '/':
//       if (b === 0) return null
//       else return divide(a, b)
//     default:
//       return null
//   }
// }
