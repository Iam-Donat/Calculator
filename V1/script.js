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
const percentage = document.querySelector('.percentage');

// Initialize default Value
let firstOperand = '';
let secondOperand = '';
let operation = '';

// Functions
function numValuesHandler(num) { // numbers value handler
  // console.log(num);
  // to control the length of the number
  const MAX_LENGTH = 10;
  if (firstOperand.length < MAX_LENGTH) {
    firstOperand += num;
  }
}

function operatorsHandler(operator) {
  // console.log(operator);
  operation = operator;
  secondOperand = firstOperand;
  firstOperand = '';
}

function operationHandler() {

  displayTop.textContent = `${secondOperand} ${operation}  ${firstOperand}`;

  secondOperand = Number(secondOperand);
  firstOperand = Number(firstOperand);

  switch (operation) {
    case '+':
      secondOperand += firstOperand;
      break;
    case '-':
      secondOperand -= firstOperand;
      break;
    case '*':
      secondOperand *= firstOperand;
      break;
    case '/':
      if (firstOperand === 0) {
        displayBottom.textContent = 'Error';
        return;
      }
      secondOperand /= firstOperand;
      break;
  }

  displayBottom.textContent = secondOperand;

}


// Events handlers
numBtnValues.forEach(num => {
  num.addEventListener('click', (e) => {
    numValuesHandler(e.target.textContent);

    displayBottom.textContent = firstOperand


  })
});

operatorBtn.forEach(operator => {
  operator.addEventListener('click', (e) => {
    operatorsHandler(e.target.textContent);

    displayTop.textContent = `${secondOperand}  ${operation}`;
    displayBottom.textContent = firstOperand;

  })
})

clearBtn.addEventListener('click', () => {
  firstOperand = '';
  secondOperand = '';
  operation = '';
  displayTop.textContent = firstOperand;
  displayBottom.textContent = firstOperand;
});

equalBtn.addEventListener('click', () => {
  operationHandler();
});

deleteBtn.addEventListener('click', handleDelete);

function handleDelete() {
  firstOperand = firstOperand.slice(0, -1);
  displayBottom.textContent = firstOperand;
}
