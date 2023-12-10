class snake {
  constructor(game) {
    this.game = game;
    this.x = GAME_WIDTH / 2;
    this.y = GAME_HEIGHT / 2;

    this.angle = 0;
    this.tailPosition = [];
    this.eye = new eye(this);
    this.createTail();

    this.listenMouseEvent();
  }

  listenMouseEvent() {
    this.game.canvas.addEventListener("mousemove", (e) => {
      var rect = this.game.canvas.getBoundingClientRect();
      this.processMouseMove({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    });
  }

  processMouseMove(mousePos) {
    console.log(mousePos);
    this.angle = Math.atan2(
      mousePos.y - SCREEN_HEIGHT / 2,
      mousePos.x - SCREEN_WIDTH / 2
    );
  }

  createTail() {
    for (let i = 0; i < 200; i++) {
      this.tailPosition.push({
        x: this.x - i * SNAKE_SPEED,
        y: this.y,
      });
    }
  }

  update() {
    // Update position
    // this.x++;
    let newTailPosition = {
      x: (this.x += Math.cos(this.angle) * SNAKE_SPEED),
      y: (this.y += Math.sin(this.angle) * SNAKE_SPEED),
    };

    this.tailPosition.unshift(newTailPosition);
    this.tailPosition.pop();

    this.x = newTailPosition.x;
    this.y = newTailPosition.y;
  }

  draw() {
    // Draw shadow
    for (let i = this.tailPosition.length - 1; i > 1; i--) {
      this.game.screen.drawCircle(
        { x: this.tailPosition[i].x, y: this.tailPosition[i].y },
        "shadow"
      );
    }

    // Draw body
    for (let i = this.tailPosition.length - 1; i > 1; i--) {
      if (i % 8 != 0) {
        continue;
      }
      this.game.screen.drawCircle(
        { x: this.tailPosition[i].x, y: this.tailPosition[i].y },
        "snake"
      );
      // this.game.screen.drawCircle({ x: pos.x, y: pos.y }, "snake");
    }

    // Draw head
    this.game.screen.drawCircle({ x: this.x, y: this.y }, "snake");

    // Draw eyes
    this.eye.draw();
  }
}
