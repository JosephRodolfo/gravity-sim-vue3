import { System } from "../services/planets";
import { Timer } from "../services/timer";

export class Controller {

    constructor(timer: Timer, system: System) {
        this.timer = timer;
        this.system = system;
    }
    timer: Timer;
    system: System;

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
