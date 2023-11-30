/*console.log("hello");
console.log(document);
console.log(document.body);
console.log(document.URL);
console.log(document.all);

document.title = "new title";
*/

/*var heade = document.getElementById("main-header");
heade.style.border = "solid 2px black";

var items = document.getElementsByClassName("list-group-item");
items[2].style.background = "green";
for (let i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
}

var itemlist = document.querySelector("#items");*/
//parentnode
//console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor = "grey";
//console.log(itemlist.parentNode.parentNode.parentNode);

//parentElement
//console.log(itemlist.parentElement);
//itemlist.parentElement.style.backgroundColor = "grey";
//console.log(itemlist.parentElement.parentElement.parentElement);

//childNode
//console.log(itemlist.childNodes); useless
//childElement
//console.log(itemlist.children);
//itemlist.children[1].style.backgroundColor = "red";

//firstchild firstElementChild
//lastchild lastElementChild

// create a new element
/*var newdiv = document.createElement("div");
newdiv.className = "hello1";
newdiv.id = "heelo1";
newdiv.setAttribute("title", "title");
var newtext = document.createTextNode("hello world");
newdiv.appendChild(newtext);
var container = document.querySelector("header .container");
var ins = document.querySelector("header h1");
container.insertBefore(newdiv, ins);
console.log(newdiv);*/

var btn = document.getElementById("item1");
var list = document.getElementById("items");
btn.addEventListener("click", add);

function add(e) {
  e.preventDefault();
  var content = document.getElementById("item").value;
  var newitem = document.createElement("li");
  newitem.setAttribute("class", "list-group-item");
  newitem.appendChild(document.createTextNode(content));

  var deleteBtn = document.createElement("Button");
  deleteBtn.setAttribute("class", "btn btn-danger btn-sm float-right delete");
  deleteBtn.appendChild(document.createTextNode("X"));
  newitem.appendChild(deleteBtn);

  list.appendChild(newitem);

  console.log("1");
}
