import { AllBodies } from "../services/allBodies";
import { System } from "../services/planets";
import { Timer } from "../services/timer";

export class Controller {

    constructor(timer: Timer, system: AllBodies) {
        this.timer = timer;
        this.system = system;
    }
    timer: Timer;
    system: AllBodies;

    increment() {
        this.system.time+=1
    }
    start(speed: number, cb: Function){
        this.timer.start(()=>{
            this.increment();
            cb();

        }, speed)
    }
    stop() {
        this.timer.stop();
    }
    reset() {
        this.system.reset();
    }
    get getCircles() {
        return this.system.getCircles;
    }
}
