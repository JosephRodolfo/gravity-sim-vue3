
<template>
    <div>
        <SinglePlanetControls @planetUpdated="handlePlanetUpdated" :planetValues="planetSettings.planet1Settings"></SinglePlanetControls>
        <!-- <SinglePlanetControls @planetUpdated="" :planetValues="planetSettings.planet2Settings"></SinglePlanetControls> -->
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import SinglePlanetControls from './SinglePlanetControls.vue';
import { twoBodyDefaultSettings } from '../defaults/defaults';
import { useSettingsStore } from '../stores/store';
const store = useSettingsStore();

const planetSettings = reactive({
    ...twoBodyDefaultSettings,
})

function handlePlanetUpdated(update: any) {
store.setPlanetSettings(update)
}



</script>


<style scoped>

</style>