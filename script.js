/*var formsub = document.getElementById("btn");
formsub.addEventListener("click", addToLocal);
console.log("1");

function addToLocal(e) {
  e.preventDefault();

  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var input3 = document.getElementById("input3").value;
  var input4 = document.getElementById("input4").value;

  console.log(input1);
  console.log(input2);

  localStorage.setItem("name", input1);
  localStorage.setItem("Age", input2);
  localStorage.setItem("Mobile", input3);
  localStorage.setItem("Email", input4);
}*/

/*function create3rdPost(callback) {
  setTimeout(() => {
    console.log("Post Three");
    //If callback function is passed call it
    if (callback) {
      callback();
    }
  }, 3000);
}

// Do not touch this function at all
function create4thPost() {
  setTimeout(() => {
    console.log("Post Four");
  }, 2000);
}

//You have to  modify the syntax below to reach the desired output
create3rdPost(create4thPost);*/

let promise = create(); //we design this fnction such that it will return a promise
promise.then(function (data) {
  console.log("");
});
