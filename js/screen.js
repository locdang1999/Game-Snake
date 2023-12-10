class screen {
  constructor(game) {
    this.game = game;
    this.top = 0;
    this.bottom = 0;
    this.left = 0;
    this.right = 0;
  }

  update() {
    this.top = this.game.snake.y - SCREEN_HEIGHT / 2;
    this.bottom = this.game.snake.y + SCREEN_HEIGHT / 2;
    this.left = this.game.snake.x - SCREEN_WIDTH / 2;
    this.right = this.game.snake.x + SCREEN_WIDTH / 2;
  }

  drawCircle(pos, styleNm) {
    let styles = {};
    styles["snake"] = {
      color: "#F65A5A",
      borderColor: "red",
      width: 20,
    };

    styles["shadow"] = {
      borderColor: "rgb(180, 180, 180,0.1)",
      color: "rgb(180, 180, 180, 0.1)",
      width: 26,
    };

    styles["eye"] = {
      borderColor: "rgb(180, 180, 180,0.1)",
      color: "black",
      width: 5,
    };

    let styleProperties = styles[styleNm];

    this.game.ctx.beginPath();
    this.game.ctx.arc(
      pos.x - this.left,
      pos.y - this.top,
      styleProperties.width,
      0,
      Math.PI * 2
    );
    this.game.ctx.fillStyle = styleProperties.color;
    this.game.ctx.fill();
    this.game.ctx.strokeStyle = styleProperties.borderColor;
    this.game.ctx.stroke();
  }
}
