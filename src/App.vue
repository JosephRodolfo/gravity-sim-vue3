<script setup lang="ts">
import MainCanvas from './components/Canvas.vue';
import Controls from './components/Controls.vue';
</script>

<template>
  <div>
    <MainCanvas></MainCanvas>
    <Controls></Controls>

  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
