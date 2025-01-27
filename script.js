const add = function (firstNumber, secondNumber) {
    return(firstNumber + secondNumber)
};

const subtract = function(firstNumber, secondNumber) {
	return (firstNumber - secondNumber);
};

const multiply = function(firstNumber, secondNumber) {
  return (firstNumber * secondNumber);
};

const divide = function(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    return "ERROR"} 
  else {
  return (firstNumber / secondNumber);
  }
};

const operations = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide
}

const operate = function(firstNumber, operationName, secondNumber) {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  const operation = operations[operationName];
  result = operation(firstNumber, secondNumber);
  return(result)
};

const display = document.querySelector(".display")
const clearButton = document.querySelector(".clear") 
const backButton = document.querySelector(".back") 
const divideButton = document.querySelector(".divide")
const sevenButton = document.querySelector(".seven");
const eightButton = document.querySelector(".eight");
const nineButton = document.querySelector(".nine");
const multiplyButton = document.querySelector(".multiply");
const fourButton = document.querySelector(".four");
const fiveButton = document.querySelector(".five");
const sixButton = document.querySelector(".six");
const subtractButton = document.querySelector(".subtract");
const oneButton = document.querySelector(".one");
const twoButton = document.querySelector(".two");
const threeButton = document.querySelector(".three");
const addButton = document.querySelector(".add");
const minusButton = document.querySelector(".minus");
const zeroButton = document.querySelector(".zero");
const dotButton = document.querySelector(".dot");
const evaluateButton = document.querySelector(".evaluate");
const percentButton = document.querySelector(".percent");

// add operation symbols as property for display 
addButton.operation = "+"
divideButton.operation = "/"
multiplyButton.operation = "*"
subtractButton.operation = "-"

// set initial conditions
let dotIsPresent = false;
let operationEnabled = false;
let displayOverflow = false;
let firstNumIsPresent = false;
let evaluated = false;

let operationName;
let firstNumber;
let secondNumber;
let displayContent = "";
    
const numbersButtons = {
  zero: zeroButton,
  one: oneButton,
  two: twoButton,
  three: threeButton,
  four: fourButton,
  five: fiveButton,
  six: sixButton,
  seven: sevenButton,
  eight: eightButton,
  nine: nineButton
}


const sendToDisplay = function (input) {
  displayContent = displayContent + input;
  display.textContent = displayContent;
}

// send numbers to display when according buttons are clicked
for (let numberButton in numbersButtons) {
numbersButtons[numberButton].addEventListener("click", function(event) {
    if(!firstNumIsPresent){
  numberInput = numbersButtons[numberButton].textContent
  sendToDisplay(numberInput);
  operationEnabled = true;
    } else {
        if (evaluated) {
    displayContent = "";
    display.textContent = "";
    numberInput = numbersButtons[numberButton].textContent
    sendToDisplay(numberInput);
    // set firstNumIsPresent to false to let user continue typing it.
    firstNumIsPresent = false;
    // set evaluated to false to return to this part after evaluation
    evaluated = false;
      } {return}
    }
  })
  }

console.log(operationEnabled)
const operationButtons = {
  add: addButton,
  divide: divideButton,
  multiply: multiplyButton,
  subtract: subtractButton
}

  for (let operationButton in operationButtons) {
    operationButtons[operationButton].addEventListener("click", function(event) {
      if (operationEnabled){
      operationInput = operationButtons[operationButton].operation
      // when operation clicked update first number
      firstNumber = displayContent;
      // sendToDisplay(operationInput);

      // update operation
      operationName =  operationButton;

      // set displayContent to empty to capture second number later
      displayContent = "";
      }
      {return}
    });
  }
  
dotButton.addEventListener("click", function(){
  dotIsPresent = (displayContent.split("").includes(dotButton.textContent)) ? true : false
  if(!dotIsPresent){
    input =  dotButton.textContent
    sendToDisplay(input);
  }
  {return}
}) 

clearButton.addEventListener("click", () => { 
  displayContent = "";
  display.textContent = "";
  firstNumIsPresent = false;
})

evaluateButton.addEventListener("click", () => { 
  // when "=" is clicked update second number
  secondNumber = displayContent;
  displayContent = operate(firstNumber, operationName, secondNumber);
//  update first number after evaluation
  firstNumber = displayContent; 
  display.textContent = displayContent;
  firstNumIsPresent = true;
  evaluated = true;
})

percentButton.addEventListener("click", () => { 
  input =  displayContent
  displayContent = "";
  display.textContent = "";
  sendToDisplay(input/100);
})

minusButton.addEventListener("click", () => { 
  input =  displayContent;
  displayContent = "";
  display.textContent = "";
  sendToDisplay(Number(0 - input));
})

// stop evaluation before we have operation and both numbers
// let user change operation and save the last one
// cut long symbols to avoid display overflow