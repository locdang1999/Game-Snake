class snake {
  constructor(game) {
    this.game = game;
    this.x = GAME_WIDTH / 2;
    this.y = GAME_HEIGHT / 2;

    this.angle = 0;

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

  update() {
    this.x++;
  }

  draw() {
    this.game.screen.drawCircle({ x: this.x, y: this.y });
  }
}
