/eslint-env browser/

//STEP 1
document.getElementById("btn1").onclick = function () {
    alert("Task 1 - I have been clicked");
  };
//STEP 2
const button2 = document.getElementById("btn2");
button2.onclick = function () {
  alert("Task 2 - I have been clicked");
};
//STEP 3
function task3Callback() {
    alert("Task 3 - I have been clicked");
  }
document.getElementById("btn3").addEventListener("click", task3Callback);
//STEP 4
document.getElementById("btn4").addEventListener("click", function () {
    alert("Task 4 - I have been clicked ");
  });
//STEP 5
function task5Callback() {
    alert("Task 5 - I have been clicked");
  }
document.addEventListener("DOMContentLoaded", function () {
document.getElementById("btn5").addEventListener("click", task5Callback);
  });