
 
 
 class Planet {
    constructor(mass: number, xCoord: number, yCoord: number, xVelocity: number, yVelocity: number) {
        this.mass = mass;
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
    }
    mass: number;
    xCoord: number;
    yCoord: number;
    xVelocity: number;
    yVelocity: number;
    updateXVelocity(xAcceleration: number, time: number) {
        this.xVelocity += (xAcceleration * time);
    }
    updateYVelocity(yAcceleration: number, time: number) {
        this.yVelocity += (yAcceleration * time);
    }
    updatePosition(time: number) {
        this.xCoord += (this.xVelocity * time);
        this.yCoord += (this.yVelocity * time);
    }

}

 class System {
    constructor(planet1: Planet, planet2: Planet) {
        this.planet1 = planet1;
        this.planet2 = planet2;
        this.time = 0;
    }
    planet1: Planet;
    planet2: Planet;
    time: number;

    get dx() {
        return this.planet1.xCoord - this.planet2.xCoord;
    }
    get dy() {
        return this.planet1.yCoord - this.planet2.yCoord;
    }
    get distance() {
        return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    }
    get gravitationalForce() {
        return (6.67430e-11 * this.planet1.mass * this.planet2.mass) / (this.distance * this.distance);
    }

    calculateAcceleration(gravitationalForce: number, uniDistance: number, rDistance: number, mass: number) {
        return (gravitationalForce * uniDistance) / (mass * rDistance);
    }
    get ax1() {
        return this.calculateAcceleration(this.gravitationalForce, this.dx, this.distance, this.planet1.mass);
    }
    get ay1() {
        return this.calculateAcceleration(this.gravitationalForce, this.dy, this.distance, this.planet1.mass);
    }
    get ax2() {
        return this.calculateAcceleration((this.gravitationalForce * -1), this.dx, this.distance, this.planet2.mass);
    }
    get ay2() {
        return this.calculateAcceleration((this.gravitationalForce * -1), this.dy, this.distance, this.planet2.mass);
    }
    get getCircles() {
        this.planet1.updateXVelocity(this.ax1, this.time);
        this.planet1.updateYVelocity(this.ay1, this.time);
        this.planet2.updateXVelocity(this.ax2, this.time);
        this.planet2.updateYVelocity(this.ay2, this.time);
        this.planet1.updatePosition(this.time);
        this.planet2.updatePosition(this.time);
       return [{ x: this.planet1.xCoord, y: this.planet1.yCoord, radius: 10 }, { x: this.planet2.xCoord, y: this.planet2.yCoord, radius: 10 } ]
    }
    setTime(time: number) {
        this.time = time;
    }
    reset(){
        this.time = 0;
    }

}

// const planet1 = new Planet(999999999999999, 30000, 20000, .9, -.1);
// const planet2 = new Planet(-9000000000000000, 250000, 250000, 0.0, 0.0);
export { System, Planet };