7
// **functions
// **on event listeners like onClick


function calculate(operator) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
 //parseFloat converts string into float number
 //value targets the value of the input element

  console.log(`num1: ${num1}`);
  console.log(`num2: ${num2}`);

  if (isNaN(num1) || isNaN(num2)) {
    alert('NAN - Please enter valid numbers');
    return;
  }
  //above condition checks if the entered user input is a number or not

  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        alert('Cannot divide by zero');
        return;
      }
      result = num1 / num2;
      break;
      
    default:
      alert('Invalid operator');
      return;
  }

  document.getElementById('result').innerHTML = `Result: ${result}`;
  console.log('Result:',result);
}