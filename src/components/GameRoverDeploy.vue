<template>
  <div>
    <label>Initial Position (x, y, direction):</label>
    <input v-model.number="x" type="number" placeholder="X" />
    <input v-model.number="y" type="number" placeholder="Y" />

    <select v-model="direction">
      <option
        v-for="itype in Object.keys(Direction).filter(k => typeof Direction[k as any] === 'number')"
        :key="itype"
        :value="Direction[itype as keyof typeof Direction]"
      >
        {{ itype.toString() }}
      </option>
    </select>
  </div>
  <button @click="deployRover">Deploy Rover</button>
</template>

<script setup lang="ts">
import { Direction } from "@/models/Directon";
import { Position } from "@/models/Position";
import { Rover } from "@/models/Rover";
import { ref, defineEmits } from "vue";
const emit = defineEmits(["deployRover"]);

const x = ref(100);
const y = ref(100);
const direction = ref<Direction>(0);

const deployRover = () => {
  const position = new Position(x.value, y.value);
  const rover = new Rover(position, direction.value);
  emit("deployRover", rover);
};
</script>
<style scoped>
input,
button {
  margin: 5px;
}
</style>
