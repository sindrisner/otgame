// const startGame = () => {
const moveLeft = () => {
  let left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  left -= 100 * 2.4;
  if (left >= 0) {
    character.style.left = left + "px";
  }
};

const moveRight = () => {
  let left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  left += 100 * 2.4;
  if (left < 600 * 2.4) {
    character.style.left = left + "px";
  }
};

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveLeft();
  }
  if (event.key === "ArrowRight") {
    moveRight();
  }
});

window.addEventListener("deviceorientation", function (e) {
  const x = Math.round(e.beta);
  const y = Math.round(e.gamma);
  const z = Math.round(e.alpha);

  if (y == 17) {
    moveLeft();
  }

  if (y == 17) {
    moveRight();
  }

  //Parallax Effect

  // document.getElementsByClassName(
  //   "rocket"
  // )[0].style.transform = `translateY(-${x}%)`;
});

// Painzzz
var painz = document.getElementById("painz");
let counter = 0;
let gainzz = 0;
document.getElementById("painz").style.animation = "slide2 1.5s infinite";

painz.addEventListener("animationiteration", () => {
  var colors = [
    'url("img/blocker-stone.png")',
    'url("img/tre.png")',
    'url("img/blocker-ice.png")',
  ];
  var randomImage = Math.floor(Math.random() * 3) + 0;
  document.getElementById("painz").style.backgroundImage = colors[randomImage];
  var random = Math.floor(Math.random() * 6);
  left = random * 100 * 2.4;
  painz.style.left = left + "px";
});

setInterval(() => {
  var characterLeft = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(painz).getPropertyValue("left")
  );
  var blockTop = parseInt(
    window.getComputedStyle(painz).getPropertyValue("top")
  );

  if (
    characterLeft == blockLeft &&
    blockTop < 470 * 2.4 &&
    blockTop > 350 * 2.4
  ) {
    // alert("game over, Score:" + counter + "gainz" + gainzz);
    counter = 0;
    gainzz = 0;
  }
}, 1);

//Gainzzz

var gainz = document.getElementById("gainz");
document.getElementById("gainz").style.animation = "slide 1s infinite";

gainz.addEventListener("animationiteration", () => {
  // var colors = ["#ff0000", "#00ff00", "#0000ff"];
  // var random_color = colors[Math.floor(Math.random() * colors.length)];
  // document.getElementById("block1").style.backgroundColor = random_color;
  var random = Math.floor(Math.random() * 6);
  left = random * 100 * 2.4;
  gainz.style.left = left + "px";
});

setInterval(() => {
  var characterLeft = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(gainz).getPropertyValue("left")
  );
  var blockTop = parseInt(
    window.getComputedStyle(gainz).getPropertyValue("top")
  );
  if (
    characterLeft === blockLeft &&
    blockTop < 400 * 2.4 &&
    blockTop > 350 * 2.4
  ) {
    gainzz++;
  }
}, 100);
// };
window.addEventListener("deviceorientation", function (e) {
  const x = Math.round(e.beta);
  const y = Math.round(e.gamma);
  const z = Math.round(e.alpha);

  document.getElementsByClassName("xtxt")[0].innerText = "X-Axis = " + x;
  document.getElementsByClassName("ytxt")[0].innerText = "Y-Axis = " + y;
  document.getElementsByClassName("ztxt")[0].innerText = "Z-Axis = " + z;

  //Parallax Effect
});
