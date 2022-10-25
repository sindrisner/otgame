// const startGame = () => {
const moveLeft = () => {
  let left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  left -= 100;
  if (left >= 0) {
    character.style.left = left + "px";
  }
};

const moveRight = () => {
  let left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  left += 100;
  if (left < 600) {
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

const moveLeftGeo = (number) => {
  let left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  left -= number;
  if (left >= 0) {
    character.style.left = left + "px";
  }
};

const moveRightGeo = (number) => {
  let left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  left += number;
  if (left >= 200 && left < 600) {
    character.style.left = left + "px";
  }
};

window.addEventListener("deviceorientation", function (e) {
  const x = Math.round(e.beta);
  const y = Math.round(e.gamma);
  const z = Math.round(e.alpha);

  moveRightGeo(y);

  //Parallax Effect

  // document.getElementsByClassName(
  //   "rocket"
  // )[0].style.transform = `translateY(-${x}%)`;
});

// Painzzz
var painz = document.getElementById("painz");
let counter = 0;
let gainzz = 0;
document.getElementById("painz").style.animation = "slide2 3s infinite";

painz.addEventListener("animationiteration", () => {
  var colors = [
    'url("img/blocker-stone.png")',
    'url("img/tre.png")',
    'url("img/blocker-ice.png")',
  ];
  var randomImage = Math.floor(Math.random() * 3) + 0;
  document.getElementById("painz").style.backgroundImage = colors[randomImage];
  var random = Math.floor(Math.random() * 6);
  left = random * 100;
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

  if (characterLeft == blockLeft && blockTop < 470 && blockTop > 350) {
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
  left = random * 100;
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
  if (characterLeft === blockLeft && blockTop < 400 && blockTop > 350) {
    gainzz++;
  }
}, 100);
// };
