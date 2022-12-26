
<template>
    <div class="single-planet-controls">
        <label>mass</label>
        <input type="number" v-model="planetSettings.mass">
        <label>x coordinate</label> -->
        <input v-model="planetSettings.xCoord" type="number" />
        <label>y coordinate</label>
        <input v-model="planetSettings.yCoord" type="number" />
        <label>x velocity</label>
        <input v-model="planetSettings.xVelocity" type="number" />
        <label>y velocity</label>
        <input v-model="planetSettings.yVelocity" type="number" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue';
const emit = defineEmits(['planetUpdated'])

const props = defineProps({
    planetValues: { type: Object }
});
const planetSettings = reactive({
    ...props.planetValues
})

watch(planetSettings, (newVal) => {
    emit("planetUpdated", newVal)
})




onMounted(() => {

    console.log(planetSettings)
})

</script>


<style scoped>
.single-planet-controls {
    border: 1px solid black;
    padding: 1em;
}
</style>