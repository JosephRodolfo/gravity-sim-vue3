import { Circles } from "./circles";

export interface AllBodies {
    reset: Function,
    time: number,
    getCircles: Array<Circles>
}