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

// const numbers = {
//   firstNumber: inputFirstNumber,
//   secondNumber: inputSecondNumber,
// }

const operate = function(firstNumber, operationName, secondNumber) {
  const operation = operations[operationName];
  result = operation(firstNumber, secondNumber);
  result.toString().substring(0, 13);
  // numbers[firstNumber] = result
  return(result)
};


// console.log(operate(1, 'divide', 99));

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
const equalsButton = document.querySelector(".equals");

// add operation symbols as property for display 
addButton.operation = "+"
divideButton.operation = "/"
multiplyButton.operation = "*"
subtractButton.operation = "-"

// set initial conditions
let dotIsPresent = false;
let operationIsPresent = false;
let displayOverflow = false;

    
const numbersButtons = {
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

let displayContent = "";

const sendToDisplay = function (input) {
  displayContent =  displayContent + input;
  display.textContent = displayContent;
  // display.textContent.toString.substring(0, 13)
}


// send numbers to display when according buttons are clicked
const enableNumberButtons = function(){
for (let numberButton in numbersButtons) {
  numbersButtons[numberButton].addEventListener("click", function(event) {
  numberInput = numbersButtons[numberButton].textContent
  sendToDisplay(numberInput);
  });
}
}


const operationsButtons = {
  add: addButton,
  divide: divideButton,
  multiply: multiplyButton,
  subtract: subtractButton
}
const enableOperationsButtons = function(){
  for (let operationButton in operationsButtons) {
    operationsButtons[operationButton].addEventListener("click", function(event) {
      operationInput = operationsButtons[operationButton].operation
    sendToDisplay(operationInput);
    });
  }
  }

// const disableNumberButtons = function(){
//   for (let numberButton in numbersButtons) {
//     numbersButtons[numberButton].removeEventListener("click", function(event) {
//     numberInput = numbersButtons[numberButton].textContent
//     sendToDisplay(numberInput);
//     });
//   }
// }

// const checkDisplayOverflow = function (){
//   if (displayContent.length >= 12){
//     return true;
//   }
//   {return false}
// }

const operateDisplayWithButtons = function (){
// displayOverflow = checkDisplayOverflow();
if (!displayOverflow){
enableNumberButtons();
enableOperationsButtons();
console.log("enabled")
}
// else {disableNumberButtons()
//   console.log("disabled")
// }
}

operateDisplayWithButtons()

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
})



// backButton.addEventListener("click", () => { 
//   displayContent.
//   display.textContent = "";
// })

// set all buttons add event listener
// set variables to collect first number, operation, and second number
// when user clicks