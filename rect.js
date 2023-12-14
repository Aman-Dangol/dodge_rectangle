class Rect {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = 1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  collision(mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height  ) {
      return true;
    }
    return false;
  }
}

class VRect extends Rect {
  move() {
    this.y += this.speed;
  }
}
class HRect extends Rect {
  move() {
    this.x += this.speed;
  }
}
