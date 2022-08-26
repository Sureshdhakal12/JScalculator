
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }
  clear(){
    this.currentOperand=''
    this.previousOperand=''
    this.opeartion=undefined
  }
  delete(){

  }
  appendNumber(){

  }
  chooseOperation(){

  }
  compute(){

  }
  updateDisplay(){

  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const opeartionButtons = document.querySelectorAll("[data-operation]");
const equalsButtons = document.querySelector("[data-equals]");
const deleteButtons = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelectorAll(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelectorAll(
  "[data-current-operand]"
);

const Calculator= new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {

})
