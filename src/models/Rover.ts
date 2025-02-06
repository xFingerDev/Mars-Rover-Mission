import { Direction } from "./Directon";
import { Position } from "./Position";

class Rover {
  private isAlive = true;
  constructor(private position: Position, private direction: Direction) {}

  getPosition() {
    return this.position;
  }

  getDirection() {
    return this.direction;
  }

  getAlive() {
    return this.isAlive;
  }

  setAlive(isAlive: boolean) {
    this.isAlive = isAlive;
  }

  turnLeft() {
    const directions: Direction[] = [
      Direction.N,
      Direction.W,
      Direction.S,
      Direction.E,
    ];
    this.direction = directions[(directions.indexOf(this.direction) + 1) % 4];
  }

  turnRight() {
    const directions: Direction[] = [
      Direction.N,
      Direction.E,
      Direction.S,
      Direction.W,
    ];
    this.direction = directions[(directions.indexOf(this.direction) + 1) % 4];
  }

  private getNextPosition(): Position {
    const position = new Position(this.position.x, this.position.y);
    switch (this.direction) {
      case Direction.N:
        position.y += 1;
        break;
      case Direction.E:
        position.x += 1;
        break;
      case Direction.S:
        position.y -= 1;
        break;
      case Direction.W:
        position.x -= 1;
        break;
    }
    return position;
  }

  preForward() {
    return this.getNextPosition();
  }

  moveForward() {
    this.position = this.getNextPosition();
  }
}

export { Rover };
