<template>
  <div>
    <h1>Mars Rover Mission</h1>
    <p class="byMe">By: Raul Segui Tejeda</p>
  </div>

  <GameManager />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GameManager from "./components/GameManager.vue";

export default defineComponent({
  name: "App",
  components: {
    GameManager,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
h1 {
  color: #fda600;
  text-shadow: #2c3e50 2px 2px;
  margin-bottom: 0%;
}

.byMe {
  font-size: "smaller";
  margin-top: 0%;
}
</style>
