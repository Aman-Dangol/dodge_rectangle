class VRect {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = 1;
  }
  move() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, (this.y += this.speed), this.width, this.height);
  }
}

class HRect {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = 1;
  }
  move() {
    ctx.fillStyle = this.color;
    ctx.fillRect((this.x += this.speed), this.y, this.width, this.height);
  }
}
