
<template>
    <div>
        <canvas ref="canvasRef" class="main-canvas" height="500" width="500"></canvas>
    </div>
</template>

<script setup lang="ts">

import { canvasDrawer } from '../services/canvasDrawing';
import { onMounted, ref, watch } from 'vue';
import { Circles } from '../services/circles';
const props = defineProps({
    circles: { type: Array<Circles> }
});
const canvasRef = ref<HTMLCanvasElement>();

onMounted(() => {
    const myContext = canvasRef.value?.getContext('2d');
    drawSequence(myContext!)
})

watch([props], () => {
    const myContext = canvasRef.value?.getContext('2d');
    drawSequence(myContext!)
})

function drawSequence(context: CanvasRenderingContext2D) {
    canvasDrawer.clearBackground(context);
    props.circles!.forEach((circle: Circles) => {
        canvasDrawer.drawCircle(circle.x / circle.scaleMultiplier, circle.y / circle.scaleMultiplier, circle.radius, context);
    })

}

</script>


<style scoped>
.main-canvas {
    background-color: lightgray;
}
</style>