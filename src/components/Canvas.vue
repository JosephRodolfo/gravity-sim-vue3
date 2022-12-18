
<template>
    <div>
        <canvas ref="canvasRef" class="main-canvas" height="500" width="500"></canvas>

    </div>
</template>

<script setup lang="ts">
// eccentricity e: circle is 0, line 1
// a semi-major axis, half diameter long axis of ellipse
import { onMounted, ref } from 'vue';
import { useSettingsStore } from '../stores/store';
import { timer } from '../services/timer';
const store = useSettingsStore();
const { eccentricity, semiMajorAxis, speed } = store;
const canvasRef = ref<HTMLCanvasElement>();
function drawCentralCircle(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.arc(250, 250, 10, 0, 2 * Math.PI);
    context.stroke();
}


// let timer: number | null = null;
let currentAngle: number = 0;
onMounted(() => {
    const myContext = canvasRef.value?.getContext('2d');
    timer!.start(()=>{startTimer(myContext!, eccentricity, semiMajorAxis)}, speed);

});

function startTimer(context: CanvasRenderingContext2D, eccentricity: number, semiMajorAxis: number) {
        requestAnimationFrame(() => {
            currentAngle++;
            gameLoop(currentAngle, context!, eccentricity, semiMajorAxis);
        })
}

// function toggleTimer(_e: MouseEvent) {
//     const myContext = canvasRef.value?.getContext('2d');
//     if (!timer) {
//         startTimer(currentAngle, myContext!, eccentricity, semiMajorAxis);
//         return;
//     }
//     clearInterval(timer);
//     timer = null;
// }

function gameLoop(startAngle: number = 0, context: CanvasRenderingContext2D, eccentricity: number, semiMajorAxis: number) {
    clearBackground(context!);
    let angle = startAngle;
    if (startAngle === 359) angle = 0;
    drawCentralCircle(context);
    const radians = toRadians(angle);
    const distance = calculateDistanceCurried(eccentricity)(semiMajorAxis)(radians)
    drawOrbitingCircle(250, 250, distance, radians, context);
}
function drawOrbitingCircle(x1: number, y1: number, length: number, radians: number, context: CanvasRenderingContext2D) {
    const x2 = x1 + Math.cos(radians) * length;
    const y2 = y1 + Math.sin(radians) * length;
    context.beginPath();
    context.arc(x2, y2, 10, 0, 2 * Math.PI);
    context.stroke();
}

function calculateDistanceCurried(e: number) {
    return (a: number) => {
        return (theta: number) => {
            return a * (1 - e ^ 2) / (1 + e * Math.cos(theta))
        }
    }
}

function toRadians(angle: number): number {
    return angle * (Math.PI / 180);
}

function clearBackground(context: CanvasRenderingContext2D): void {
    const { width, height } = context.canvas;
    context.rect(0, 0, width, height);
    context.fillStyle = 'lightgray';
    context.fill();
}



</script>


<style scoped>
.main-canvas {
    background-color: lightgray;
}
</style>
