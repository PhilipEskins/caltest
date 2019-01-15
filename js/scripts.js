$(document).ready(function(){
  function clic()
  {
    var number1 = parseInt(prompt("What is the first number?"));
    var number2 = parseInt(prompt("What is the second number?"));
    var operation = prompt("What would you like to do?");

    calculator(number1, number2, operation);
  }

  function calculator(n1, n2, oper) {
    var value[n1, n2, oper];
    return value
  }

  var number1 = value[0];
  var number2 = value[1];
  var operation = value[2];

  function add(n1, n2) {
    return n1 + n2;
  }

  function sub(n1, n2) {
    return n1 - n2;
  }

  function mult(n1, n2) {
    return n1 * n2;
  }
  function div(n1, n2) {
    return n1 / n2;
  }

  if (operation==="add") {
    document.write("Your total is " + add(number1, number2));
  } else if (operation==="sub") {
    document.write("Your total is " + sub(number1, number2));
  } else if (operation==="mult") {
    document.write("Your total is " + mult(number1, number2));
  } else if (operation==="div") {
    document.write("Your total is " + div(number1, number2));
  } else {
    document.write("Not a valid function");
  }

});
