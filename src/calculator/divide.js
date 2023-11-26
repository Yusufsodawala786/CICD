/**
 * Division
 */
function divide(firstNum, secondNum) {
    if(secondNum == 0)
    {
        return "Error: Cannot divide by zero";
    }
    else{
        return firstNum / secondNum;
    }
  }
  
  module.exports = divide
  