class Rect {
  constructor(x, y, width, height, color,s) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = s;
  }
  draw() {
    ctx.strokeStyle = "white";
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
  collision(mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height  ) {
      return true;
    }
    return false;
  }
}

// class used for vertical rectangles(|)
class VRect extends Rect {
  move() {
    // since its going to move only vertically , hence , increasing only vertical axis
    this.y += this.speed;
  }
}
class HRect extends Rect {
  // since its going to move only horizaonal axis , hence increasing horizontal axis
  move() {
    this.x += this.speed;
  }
}
