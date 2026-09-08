let btn = document.getElementById("catchme")
let counter = 0
btn.onhover = () => {
  counter = (counter + 1) % 5;
  x = counter * 200 + 100;
  btn.style.left = x + "px"
}
