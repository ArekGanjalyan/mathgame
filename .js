var answer = 0;

function createProblem() {
  var num1: Math.floor(Math.random() * 11);
  var num2: Math.floor(Math.random() * 11);
  answer = num1 + num2
  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;
}

createProblem()
 
