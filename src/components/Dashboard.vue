
<template>
    <div>
        <MainCanvas :circles="circleProps"></MainCanvas>
        <Controls></Controls>

    </div>
</template>
<script setup lang="ts">
import MainCanvas from './Canvas2.vue';
import Controls from './Controls.vue';
import { Controller } from '../controllers.ts/controllers';
import { onMounted, ref, watch } from 'vue';
import { timer } from '../services/timer';
import { System, Planet } from '../services/planets';
import { twoBodyDefaultSettings } from '../defaults/defaults';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '../stores/store';
import { Circles } from '../services/circles';
const store = useSettingsStore();

const { eccentricity, semiMajorAxis, speed, running } = storeToRefs(store);

const circleProps: Array<Circles> | any = ref([])
const planet1 = new Planet(twoBodyDefaultSettings.planet1Settings.mass, twoBodyDefaultSettings.planet1Settings.xCoord, twoBodyDefaultSettings.planet1Settings.yCoord, twoBodyDefaultSettings.planet1Settings.xVelocity, twoBodyDefaultSettings.planet1Settings.yVelocity);
const planet2 = new Planet(twoBodyDefaultSettings.planet2Settings.mass, twoBodyDefaultSettings.planet2Settings.xCoord, twoBodyDefaultSettings.planet2Settings.yCoord, twoBodyDefaultSettings.planet2Settings.xVelocity, twoBodyDefaultSettings.planet2Settings.yVelocity);
const system = new System(planet1, planet2);
const controller = new Controller(timer, system);

onMounted(() => {
    controller.start(speed.value, () => {
        circleProps.value = controller.getCircles
    }
    );

})

watch([speed, running], () => {
    console.log(running)
    if (!running.value) {
        controller.stop();

    } else {
        controller.start(speed.value, () => {
            circleProps.value = controller.getCircles

        })
    }



})


</script>


<style scoped>

</style>
