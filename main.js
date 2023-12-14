// // inititalizing varaiables and classes
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let container = document.querySelector(".container")
let over = document.querySelector(".gameOver")
let time = 5000;
let arr = new Array();
let mouseX, mouseY;
let gameOver = false;
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < arr.length; i++) {
    if (gameOver) {
        over.style.display = "block";
        container.style.display = "none";
    } else {
      if (arr[i].x >= canvas.width) {
        arr.splice(i, 1);
      } else {
        arr[i].move();
        arr[i].draw();
        gameOver = arr[i].collision(mouseX, mouseY);
      }
    }
  }
  window.requestAnimationFrame(update);
}

// setInterval(createRect, 5000);
function createRect() {
  arr.push(
    new VRect(Math.random() * canvas.width, -100, 10, 100, randomColor())
  );
  arr.push(
    new HRect(-100, Math.random() * canvas.height, 100, 10, randomColor())
  );
}

canvas.addEventListener("mousemove", (e) => {
  var box = canvas.getBoundingClientRect(), // abs. size of element
    scaleX = canvas.width / box.width, // relationship bitmap vs. element for x
    scaleY = canvas.height / box.height;
  mouseX = (e.clientX - box.left) * scaleX;
  mouseY = (e.clientY - box.top) * scaleY;
});

function randomColor() {
  let num = Math.floor(Math.random() * 3);
  if (num == 0) {
    return "red";
  } else if (num == 1) {
    return "blue";
  }
  return "green";
}

function remove(i) {}

function checkPosition() {}
// calling  functions

createRect();
// setInterval(createRect, time);
update();
