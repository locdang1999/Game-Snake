class background {
  constructor(game) {
    this.game = game;
  }

  update() {}

  drawLine(startPos, endPos) {
    this.game.ctx.strokeStyle = "#d9d9d9";
    this.game.ctx.lineWidth = 3;
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(startPos.x, startPos.y);
    this.game.ctx.lineTo(endPos.x, endPos.y);
    this.game.ctx.stroke();
  }

  draw() {
    //draw verticle lines
    let firstLineX = GRID_SIZE - (this.game.snake.x % GRID_SIZE);
    let curentLineX = firstLineX;

    while (curentLineX <= SCREEN_WIDTH) {
      this.drawLine(
        { x: curentLineX, y: 0 },
        { x: curentLineX, y: SCREEN_HEIGHT }
      );
      curentLineX += GRID_SIZE;
    }

    //draw horizontal lines
    let firstLineY = GRID_SIZE - (this.game.snake.y % GRID_SIZE);
    let curentLineY = firstLineY;

    while (curentLineY <= SCREEN_WIDTH) {
      this.drawLine(
        { x: 0, y: curentLineY },
        { x: SCREEN_WIDTH, y:  curentLineY}
      );
      curentLineY += GRID_SIZE;
    }

    // this.drawLine({ x: 100, y: 100 }, { x: 200, y: 200 });
  }
}
