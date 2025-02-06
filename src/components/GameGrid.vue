<template>
  <div class="grid">
    <div v-for="row in props.gridSize" :key="row" class="row">
      <div
        v-for="col in props.gridSize"
        :key="col"
        class="cell"
        :class="{
          rover: isRober(col - 1, row - 1),
          obstacle: isObstacle(col - 1, row - 1),
        }"
        :title="`(X:${col - 1}, Y:${row - 1})`"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from "vue";
import { Obstacle } from "@/models/Obstacle";
const props = defineProps(["gridSize", "rover", "obstacles"]);
const isObstacle = (x: number, y: number) => {
  return positionObstacle.has(x + "," + y);
};

const positionObstacle = new Set<string>();

props.obstacles.forEach((obstacle: Obstacle) => {
  positionObstacle.add(
    obstacle.getPosition().x + "," + obstacle.getPosition().y
  );
});

const isRober = (x: number, y: number) => {
  return (
    props.rover?.getPosition()?.x === x && props.rover?.getPosition()?.y === y
  );
};
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(200, 2px);
  grid-template-rows: repeat(200, 2px);
  gap: 1px;
  margin-top: 20px;
}
.cell {
  width: 2px;
  height: 2px;
  background-color: #ffce74;
  margin-top: 1px;
}
.rover {
  background-color: #ff0044;
}
.obstacle {
  background-color: #7d673e;
}
</style>
