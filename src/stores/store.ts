import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
export const useSettingsStore = defineStore('gravitySettings', () => {
    const speed = ref(100);
    const eccentricity = ref(0);
    const semiMajorAxis = ref(30);
    const running = ref(true);

    return { speed, eccentricity, semiMajorAxis, running }
  })
  