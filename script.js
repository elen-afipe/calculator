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
    if(result.toString().length >= 12) {
      const [intPart, fracPart] = result.toString().split('.');
      if (intPart.length >= 12) {
        return result.toPrecision(7);
      } else {
        const n = 12 - intPart.length; 
        const factor = Math.pow(10, n)
        console.log(Math.round(result * factor) / factor)
        return Math.round(result * factor) / factor;
      }
    } else { 
      return(result)
    }
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
let firstNumIsRecorded = false;
let evaluated = false;
let allVariablesGiven = false;

let operationName;
let firstNumber = "";
let secondNumber = "";
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
  const string = displayContent + input
  if((string.length<13)){
    displayContent = displayContent + input;
    display.textContent = displayContent;
  }{
    return
  }
  
}

// send numbers to display when according buttons are clicked
for (let numberButton in numbersButtons) {
numbersButtons[numberButton].addEventListener("click", function(event) {
  if (!evaluated && (display.textContent === '0' || displayContent === 'ERROR')){
    numberInput = numbersButtons[numberButton].textContent;
    displayContent = "";
    console.log(numberInput)
    display.textContent = "";
      sendToDisplay(numberInput);
    }
   else if(!firstNumIsPresent){
  numberInput = numbersButtons[numberButton].textContent
  sendToDisplay(numberInput);
  operationEnabled = true;
    } 
    else {
        if (evaluated) {
          if (display.textContent === '0' || displayContent === 'ERROR'){
            numberInput = numbersButtons[numberButton].textContent
            displayContent = "";
            display.textContent = "";
              sendToDisplay(numberInput);
            }
            else{
    displayContent = "";
    display.textContent = "";
    numberInput = numbersButtons[numberButton].textContent
    sendToDisplay(numberInput);
    // set firstNumIsPresent to false to let user continue typing it.
    firstNumIsPresent = false;
    // set evaluated to false to return to this part after evaluation
    evaluated = false;
            }
      } 
    {return}
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
      if (operationEnabled && !firstNumIsRecorded){
      operationInput = operationButtons[operationButton].operation
      // when operation clicked update first number
      firstNumber = displayContent;
      
      // update operation
      operationName =  operationButton;
      console.log(operationName)
      // set displayContent to empty to capture second number later
      displayContent = "";
      firstNumIsRecorded = true
      }
      else if (operationEnabled && firstNumIsRecorded){
        operationInput = operationButtons[operationButton].operation
        // update operation
        operationName =  operationButton;
        console.log(operationName)
        // set displayContent to empty to capture second number later
        displayContent = "";
      }{return}
    });
  }
  
dotButton.addEventListener("click", function(){
  dotIsPresent = (displayContent.split("").includes(dotButton.textContent)) ? true : false
  NumIsPresent = (/\d/.test(displayContent)) ? true : false
  if(NumIsPresent) {
  if(!dotIsPresent){
    input =  dotButton.textContent
    sendToDisplay(input);
  }
  {return}
}
}) 

clearButton.addEventListener("click", () => { 
  displayContent = "";
  display.textContent = "";
  firstNumIsPresent = false;
})

evaluateButton.addEventListener("click", () => { 
  secondNumber = displayContent;
  // when "=" is clicked update second number
  console.log(`1num: ${firstNumber}, 2num: ${secondNumber},  operation: ${operationName}`)
  allVariablesGiven = (secondNumber!=='' && firstNumber!=='' && operationName !== "" && firstNumber !== 'ERROR' && secondNumber !== 'ERROR') ? true : false
  if (allVariablesGiven){
    displayContent = operate(firstNumber, operationName, secondNumber);
  //  update first number after evaluation

    firstNumber = displayContent; 
    display.textContent = displayContent;
    // set conditions after clicking "="
    //  firstNumIsPresent set to true so it is a starting point for operations
    
    firstNumIsPresent = true;
    firstNumIsRecorded = false;
    evaluated = true;
    allVariablesGiven = false;

  }
  {return}
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

backButton.addEventListener("click", () => { 

  if(display.textContent.length > 1 && display.textContent !=="ERROR"){
    let saveVar = display.textContent;
    console.log(saveVar);
    displayContent = "";
    display.textContent = "";
    console.log(display.textContent);

    input = saveVar.toString().substring(0, saveVar.length - 1)
    sendToDisplay(input)
  } else {return}
}) 

// correctly handle delete 
// correctly handle overflow
// correctrly handle operation with dot - is able to operate with clicked dot
