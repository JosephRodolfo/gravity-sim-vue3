import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';
import { twoBodyDefaultSettings } from '../defaults/defaults';
export const useSettingsStore = defineStore('gravitySettings', () => {
    const speed = ref(40);
    const eccentricity = ref(0);
    const semiMajorAxis = ref(30);
    const running = ref(true);
    const selector = ref('one');

    const { planet1Settings, planet2Settings } = twoBodyDefaultSettings;
    // const { mass: planet1Mass, xCoord: planet1Xcoord, yCoord: planet1YCoord, xVelocity: planet1xVelocity, yVelocity: planet1yVelocity } = planet1Settings;
    // const { mass: planet2Mass, xCoord: planet2Xcoord, yCoord: planet12Coord, xVelocity: planet2xVelocity, yVelocity: planet2yVelocity } = planet2Settings;



    const twoBodySettingsPlanet1 = reactive({
        ...planet1Settings
    });
    const twoBodySettingsPlanet2 = reactive({
        ...planet2Settings
    });


    function reset() {

    }
interface PlanetSettings {
mass: number,
    xCoord: number,
    yCoord: number,
    xVelocity: number,
    yVelocity: number,
}


function setPlanetSettings(newSettings: PlanetSettings) {

    Object.keys(newSettings).forEach((setting)=>{
     if (newSettings[setting as keyof PlanetSettings] === twoBodySettingsPlanet1[setting as keyof PlanetSettings]){
         // twoBodySettingsPlanet1[string].value = newSettings[string]
     }

    })

     }

    
    function toggleOrbit() {
        running.value = !running.value;
    }

    function setSpeed(newSpeed: number) {
        speed.value = newSpeed;
    }
    function setEccentricity(newEccentricity: number) {
        eccentricity.value = newEccentricity;
    }
    function setSelector(newSelector: string) {
        selector.value = newSelector;
    }

    function setSemiMajorAxis(newSemiMajorAxis: number) {
        semiMajorAxis.value = newSemiMajorAxis;
    }


    return { speed, eccentricity, semiMajorAxis, running, selector, twoBodySettingsPlanet1, twoBodySettingsPlanet2, toggleOrbit, setSpeed, setEccentricity, setSemiMajorAxis, setSelector, reset, setPlanetSettings }
})
