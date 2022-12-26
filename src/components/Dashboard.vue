
<template>
    <div>
        <MainCanvas :circles="circleProps"></MainCanvas>
        <Controls @reset="reset"></Controls>

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

const { eccentricity, semiMajorAxis, speed, running, twoBodySettingsPlanet1, twoBodySettingsPlanet2 } = storeToRefs(store);

const circleProps: Array<Circles> | any = ref([])
const planet1 = new Planet(twoBodySettingsPlanet1.value.mass, twoBodySettingsPlanet1.value.xCoord, twoBodySettingsPlanet1.value.yCoord, twoBodySettingsPlanet1.value.xVelocity, twoBodySettingsPlanet1.value.yVelocity);
const planet2 = new Planet(twoBodySettingsPlanet2.value.mass, twoBodySettingsPlanet2.value.xCoord, twoBodySettingsPlanet2.value.yCoord, twoBodySettingsPlanet2.value.xVelocity, twoBodySettingsPlanet2.value.yVelocity);
const system = new System(planet1, planet2);
const controller = new Controller(timer, system);

onMounted(() => {
    controller.start(speed.value, () => {
        circleProps.value = controller.getCircles
    }
    );

})
function reset() {
    controller.reset();
}

watch([speed, running], () => {
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
