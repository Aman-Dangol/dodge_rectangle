let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let time = 1000;
console.log(canvas.width, canvas.height);
let arr = new Array();
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  arr.forEach((i) => {
    i.move();
  });
  window.requestAnimationFrame(update);
}
createRect();
setInterval(createRect, time);
update();

function createRect() {
  console.log("new rect");
  console.log(Math.random()*canvas.height);
  arr.push(new VRect(Math.random() *canvas.width, -100, 10, 100,randomColor()));
  arr.push(new HRect(-100, Math.random() *canvas.height, 100, 10, randomColor()));
}

function randomColor(){
let num = Math.floor(Math.random()*3);
if (num == 0) {
    return "red"
}
else if (num == 1) {
    return "blue"
}
return "green"
}