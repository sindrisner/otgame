// let counterDisplayElem = document.getElementById("counter-display");
let counterMinusElem = document.getElementById("counter-minus");
let counterPlusElem = document.getElementById("counter-plus");

let count = -1;

// updateDisplay();
console.log(count);
counterPlusElem.addEventListener("click", () => {
  count++;
  var colors = [
    'url("img-buttons/Group45.png")',
    'url("img-buttons/Group46.png")',
    'url("img-buttons/Group47.png")',
  ];

  document.getElementById("buuble").style.backgroundImage = colors[count];

  if (count > 1) {
    counterPlusElem.style.backgroundImage = 'url("img-buttons/Play.png")';
    document.getElementById("playHerf").herf = "./game.html";
  }
});

// counterMinusElem.addEventListener("click", () => {
//   count--;
//   updateDisplay();
// });

// function updateDisplay() {
//   counterDisplayElem.innerHTML = count;
// }

window.addEventListener("deviceorientation", handleOrientation);

function handleOrientation(event) {
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;

  console.log(alpha);
  console.log(beta);
  console.log(gamma);
}
