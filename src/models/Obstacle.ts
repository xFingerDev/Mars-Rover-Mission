import { Position } from "./Position";

class Obstacle {
  constructor(private position: Position) {}

  getPosition() {
    return this.position;
  }
}

export { Obstacle };
