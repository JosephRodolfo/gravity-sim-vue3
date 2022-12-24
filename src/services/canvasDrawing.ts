class CanvasDrawing {
    constructor() {

    }
    drawCircle(x: number, y: number, radius: number, context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.stroke();
    }
    clearBackground(context: CanvasRenderingContext2D): void {
        const { width, height } = context.canvas;
        context.rect(0, 0, width, height);
        context.fillStyle = 'lightgray';
        context.fill();
    }


}
export const canvasDrawer = new CanvasDrawing;