import { Figura } from "./figura";

export class Circulo extends Figura{
    diameter: number;
    radio: number;
    constructor(diameter:number, radio: number)
    {super(  radio * Math.pow(Math.PI,2), diameter*Math.PI);
        this.diameter = diameter;
        this.radio = radio;
    }
}