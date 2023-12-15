// // inititalizing varaiables and classes
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
// getting game over div
let over = document.querySelector(".gameOver");
// used to generate q horizontal and vertical reactangle ech per second
let time = 1000;
// use to store all rectangles in the screen
let arr = new Array();
// for mouse coordinates
let mouseX, mouseY;
// check if player has lost
let gameOver = false;
// id for interval
let createID, timeDecreaseID;
let speed = 1;
function update() {
  // clearing the screen before  each update
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < arr.length; i++) {
    // checking ig player has lost
    if (gameOver) {
      over.style.zIndex = 1;
      clearInterval(createID);
      clearInterval(timeDecreaseID);
    } else {
      // if vertical rectangle or horizaonal rectagle goes over the canvas height or width respectively remove that rectangle from array hence that object wont be of any use
      if (arr[i].x >= canvas.width || arr[i].y >= canvas.height) {
        arr[i] = null;
        arr.splice(i, 1);
      } else {
        // if the object is still in screen move untill the object reaches the canvas height or width
        arr[i].move(speed);
        // check if the mouse position intersects with a rectanglr and if it does , then return true
        gameOver = arr[i].collision(mouseX, mouseY);
      }
    }
    // drawing all the images in the array
    arr[i].draw();
  }
  window.requestAnimationFrame(update);
}
// this calls cerate rect every 'time' value
createID = setInterval(createRect, time);

// this decreases 'time' every 5 seconds(1000mil = 1 sec)
timeDecreaseID = setInterval(() => {
  clearInterval(createID);
  time -= 100;
  speed+=0.3;
  createID = setInterval(createRect, time);
}, 5000);

// this function creates and pushes two rectangles to the array var
function createRect() {
  arr.push(
    new VRect(Math.random() * canvas.width, -100, 10, 100, randomColor(),speed)
  );
  arr.push(
    new HRect(-100, Math.random() * canvas.height, 100, 10, randomColor(),speed)
  );
}

//this checks where the mous current location is
canvas.addEventListener("mousemove", (e) => {
  // https://copyprogramming.com/howto/html5-canvas-and-mouse-events-issue 
  // visit this website for clear understanding
  var box = canvas.getBoundingClientRect(), 
    scaleX = canvas.width / box.width, // 
    scaleY = canvas.height / box.height;
  mouseX = (e.clientX - box.left) * scaleX;
  mouseY = (e.clientY - box.top) * scaleY;
});


// this gernerates and return random color among red blue or green
function randomColor() {
  // this number amomng 0 ,1 and 2
  let num = Math.floor(Math.random() * 3);
  if (num == 0) {
    return "red";
  } else if (num == 1) {
    return "blue";
  }
  return "green";
}

// calling  functions
createRect();
update();
