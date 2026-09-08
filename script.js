let btn = document.getElementById("catchme")
let counter = 0
btn.addEventListener("mouseenter", () => {
  counter = (counter + 1) % 5;
  let x = counter * 200 + 100;
  btn.style.left = x + "px"
}
)
btn.addEventListener("click", () => {alert("You did it!")});
while (true) {
  let x = counter * 200 + 100;
  btn.style.left = x + "px"
  btn.style.position = "absolute !important";
}
