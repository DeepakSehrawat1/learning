/*console.log("hello");
console.log(document);
console.log(document.body);
console.log(document.URL);
console.log(document.all);

document.title = "new title";
*/

var heade = document.getElementById("main-header");
heade.style.border = "solid 2px black";

var items = document.getElementsByClassName("list-group-item");
items[2].style.background = "green";
for (let i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
}
