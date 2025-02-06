<template>
  <div>
    <label>Commands (F, L, R):</label>
    <input
      v-model="commandsInput"
      type="text"
      placeholder="Enter commands (F, L, R)"
    />
    <button @click="executeCommands">Execute</button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const commandsInput = ref("");

const emit = defineEmits(["move"]);

const moveForward = () => {
  emit("move", "forward");
};

const turnLeft = () => {
  emit("move", "turnLeft");
};

const turnRight = () => {
  emit("move", "turnRight");
};

const executeCommands = () => {
  for (let command of commandsInput.value.toUpperCase()) {
    switch (command) {
      case "F":
        moveForward();
        break;
      case "L":
        turnLeft();
        break;
      case "R":
        turnRight();
        break;
    }
  }
  commandsInput.value = "";
};
</script>
<style scoped>
input,
button {
  margin: 5px;
}
</style>
