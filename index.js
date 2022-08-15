//create a close button to each list items
const li = document.getElementsByTagName("li");
for (i = 0; i < li.length; i++) {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li[i].appendChild(span);
}

//click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    //add a strike when clicked
    this.parentElement.style.textDecoration = "line-through";
  };
  close[i].ondblclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

//create a new list when click "Add"
function addList() {
  const li = document.createElement("li");
  const myInput = document.getElementById("myInput").value;
  const text = document.createTextNode(myInput);
  const myList = document.getElementById("myList");

  if (myInput === "") {
    // if input is blank
    document.querySelector("p").removeAttribute("hidden");
  } else {
    // not blank
    document.querySelector("p").setAttribute("hidden", false);
    // add list item
    li.appendChild(text);
    myList.appendChild(li);
    document.getElementById("myInput").value = "";
    // add close symbol
    const span = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    // click to strikethrough, double click to delete
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        this.parentElement.style.textDecoration = "line-through";
      };
      close[i].ondblclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
  }
}

//change symbol when refresh page
window.onload = function () {
  const mySymbol = new Array(
    "&#127826;",
    "&#127820",
    "&#127821",
    "&#127818",
    "&#9971",
    "&#9973",
    "&#127752",
    "&#127774",
    "&#127771",
    "&#127797",
    "&#127802",
    "&#127808",
    "&#127809",
    "&#127819",
    "&#127875",
    "&#128032",
    "&#127891",
    "&#127876"
  );
  const randomNum = Math.floor(Math.random() * mySymbol.length);
  document.querySelector("span").innerHTML = mySymbol[randomNum];
};
