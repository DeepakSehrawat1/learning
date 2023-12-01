var form = document.getElementById("form_group");
var itemlist = document.getElementById("items");
itemlist.addEventListener("click", removebtn);

form.addEventListener("submit", addelement);

function addelement(e) {
  e.preventDefault();
  var item1 = document.getElementById("amount").value;
  var item2 = document.getElementById("job").value;
  var item3 = document.getElementById("category").value;

  let myobj = {
    expense: item1,
    type: item2,
    category: item3,
  };

  var eqstr = JSON.stringify(myobj);
  localStorage.setItem(item2, eqstr);

  var items = document.getElementById("items");

  //creating li
  var newitem = document.createElement("li");

  //attaching to li
  newitem.appendChild(document.createTextNode(`${item1}`));
  newitem.appendChild(document.createTextNode(`${item2}`));
  newitem.appendChild(document.createTextNode(`${item3}`));

  //creating del btn
  var delbtn = document.createElement("button");
  delbtn.id = "delete";
  delbtn.appendChild(document.createTextNode("delete"));
  newitem.appendChild(delbtn);

  //creating edit btn
  var editbtn = document.createElement("button");
  editbtn.id = "edit";
  editbtn.appendChild(document.createTextNode("edit"));
  newitem.appendChild(editbtn);

  items.appendChild(newitem);

  document.getElementById("amount").value = " ";
  document.getElementById("job").value = " ";
  document.getElementById("category").value = " ";
}

function removebtn(e) {
  e.preventDefault();
  if (e.target.id === "delete") {
    var li = e.target.parentElement;
    itemlist.removeChild(li);
  } else if (e.target.id === "edit") {
    var li = e.target.parentElement.childNodes;
    console.log(li[0].data);

    document.getElementById("amount").value = li[0].data;
    document.getElementById("job").value = li[1].data;
    document.getElementById("category").value = li[2].data;

    var le = e.target.parentElement;
    itemlist.removeChild(le);
  }
}
