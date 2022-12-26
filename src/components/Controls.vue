
<template>
    <div>
        <label>Eccentricity</label>
        <input  v-model="inputEccentricity" :defaultValue="0" type="number" placeholder="eccentricity" />
        <label>Semimajor axis</label>
        <input type="number" v-model="inputSemiMajorAxis" :defaultValue="30" placeholder="semimajor axis" />
        <label type="number">Speed</label>
        <input v-model="inputSpeed" :defaultValue="100" type="number" placeholder="speed" />
        <button @click="handleToggleClick">Toggle orbit</button>
        <select v-model="inputSelector">
            <option value="one">One Body</option>
            <option value="two">Two Body</option>

        </select>
        <button @click="$emit('reset')">Reset</button>
        <div class="two-body-controls">
            <TwoBodyControlsVue></TwoBodyControlsVue>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSettingsStore } from '../stores/store';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import TwoBodyControlsVue from './TwoBodyControls.vue';

const store = useSettingsStore();
const { speed, eccentricity, semiMajorAxis, selector } = storeToRefs(store);

function handleToggleClick() {
    store.toggleOrbit();
}
const inputSpeed = computed({
    get() {
        return speed.value;
    },
    set(newSpeed: number) {

        store.setSpeed(newSpeed);
    }
});
const inputEccentricity = computed({
    get() {
        return eccentricity.value;

    },
    set(newEccentricity: number) {
        store.setEccentricity(newEccentricity);
    }
})
const inputSemiMajorAxis = computed({
    get() {
        return semiMajorAxis.value;
    },
    set(newSemiMajorAxis: number) {
        store.setSemiMajorAxis(newSemiMajorAxis);
    }
})
const inputSelector = computed({
    get() {
        return selector.value;
    },
    set(newSelector: string) {
        store.setSelector(newSelector);
    }
})

</script>


<style scoped>

</style>