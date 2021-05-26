const form = document.getElementById("form")
var num1 = 0;
var num2 = 0;
function generateProblem(){
  num1 = Math.floor(Math.random() * 101);
  num2 = Math.floor(Math.random() * 101);
  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;
}
generateProblem()

form.addEventListener("submit", submit)
function submit(event) {
  event.preventDefault()
  var correct_answer = num1 + num2
  var form_answer = document.getElementById("answer").value
  var user_answer = parseInt(form_answer, 10)
  document.getElementById("evaluation").innerHTML = num1;
  if (user_answer == correct_answer){
    document.getElementById("answer").value = "";
    document.getElementById("evaluation").innerHTML = "That's correct!";
    generateProblem()
  }
  else{
    document.getElementById("answer").value = "";
    document.getElementById("evaluation").innerHTML = "That's incorrect! Try again.";
  }
}
