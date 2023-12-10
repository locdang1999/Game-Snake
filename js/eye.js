const EYE_DISTANCE = 10;
const EYE_ANGLE = 0.8;
class eye {
  constructor(snake) {
    this.snake = snake;
  }

  update() {}

  draw() {
    let eyeLeftPos = {
      x: this.snake.x + Math.cos(this.snake.angle - EYE_ANGLE) * EYE_DISTANCE,
      y: this.snake.y + Math.sin(this.snake.angle - EYE_ANGLE) * EYE_DISTANCE,
    };

    this.snake.game.screen.drawCircle(eyeLeftPos, "eye");

    let eyeRightPos = {
        x: this.snake.x + Math.cos(this.snake.angle + EYE_ANGLE) * EYE_DISTANCE,
        y: this.snake.y + Math.sin(this.snake.angle + EYE_ANGLE) * EYE_DISTANCE,
      };
  
      this.snake.game.screen.drawCircle(eyeRightPos, "eye");
  }
}
