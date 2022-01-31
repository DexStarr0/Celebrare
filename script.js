// menu
var nav = document.querySelector("nav");
var card = document.querySelector("body");

function Menu() {
  nav.classList.toggle("menu_fn");
}
function fullsize() {
  var screenwid = window.innerWidth;
  if (screenwid >= 1100) {
    card.classList.add("fullsize");
  }
}

function smallsize() {
  console.log("ayush");
  card.classList.remove("fullsize");
}
