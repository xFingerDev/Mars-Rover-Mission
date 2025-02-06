<template>
  <div class="container">
    <GameRoverDeploy v-if="!roverInstance" @deployRover="deployRover" />
    <GameCommand v-if="roverInstance" @move="moveRover" />

    <p v-if="roverInstance?.getAlive() === false">
      Obstacle encountered at (X:{{ roverInstance.preForward().x }}, Y:{{
        roverInstance.preForward().y
      }})
    </p>
    <p v-else-if="roverInstance">
      Rover Position: (X:{{ roverInstance.getPosition().x }}, Y:{{
        roverInstance.getPosition().y
      }}, D:{{ Direction[roverInstance.getDirection()] }})
    </p>

    <GameGrid
      v-if="roverInstance !== null"
      :gridSize="gridSize"
      :obstacles="obstacles"
      :rover="roverInstance"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import GameGrid from "./GameGrid.vue";
import GameCommand from "./GameCommand.vue";
import GameRoverDeploy from "./GameRoverDeploy.vue";
import { generateObstacles } from "@/utils/GenerateObstacles";
import { Direction } from "@/models/Directon";
import { Rover } from "@/models/Rover";
import { Obstacle } from "@/models/Obstacle";
import { Position } from "@/models/Position";
const gridSize = ref(200);
const roverInstance = ref<Rover | null>(null);
const obstacles = ref<Obstacle[]>([]);
const positionObstacle = new Set<string>();

const moveRover = (command: "forward" | "turnLeft" | "turnRight") => {
  if (!roverInstance.value || !roverInstance.value.getAlive()) {
    return;
  }

  switch (command) {
    case "forward":
      if (!validateRover()) {
        roverInstance.value.setAlive(false);
        return;
      }

      roverInstance.value.moveForward();
      break;

    case "turnLeft":
      roverInstance.value.turnLeft();
      break;

    case "turnRight":
      roverInstance.value.turnRight();
      break;
  }
};

const validateRover = (): boolean => {
  const position = roverInstance.value!.preForward();

  return !(positionIsObstacle(position) || positionIsOutsideOfset(position));
};

const positionIsObstacle = (position: Position) => {
  return positionObstacle.has(position.x + "," + position.y);
};

const positionIsOutsideOfset = (position: Position) => {
  return (
    position.x < 0 ||
    position.y < 0 ||
    gridSize.value <= position.x ||
    gridSize.value <= position.y
  );
};

const deployRover = (rover: Rover) => {
  roverInstance.value = rover;
  obstacles.value = generateObstacles(gridSize.value, 300);
  positionObstacle.clear();
  obstacles.value.forEach((obstacle) => {
    positionObstacle.add(
      obstacle.getPosition().x + "," + obstacle.getPosition().y
    );
  });
};
</script>
<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}
</style>
