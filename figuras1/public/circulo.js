import { Figura } from "./figura.js";
export class Circulo extends Figura {
    constructor(diameter, radio) {
        super(radio * Math.pow(Math.PI, 2), diameter * Math.PI);
        this.diameter = diameter;
        this.radio = radio;
    }
}
