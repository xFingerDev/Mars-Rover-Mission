import { Obstacle } from "@/models/Obstacle";
import { Position } from "@/models/Position";

function generateObstacles(gridSize: number, count: number): Obstacle[] {
  const obstacles: Set<string> = new Set(); //Prevent duplicate obstacles
  while (obstacles.size < count) {
    const x = Math.floor(Math.random() * gridSize);
    const y = Math.floor(Math.random() * gridSize);
    obstacles.add(`${x},${y}`);
  }

  return Array.from(obstacles).map((str) => {
    const [x, y] = str.split(",").map(Number);
    return new Obstacle(new Position(x, y));
  });
}

export { generateObstacles };
