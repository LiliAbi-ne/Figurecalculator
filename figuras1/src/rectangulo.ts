import { Figura } from './figura';

export class Rectangulo extends Figura{
    base: number;
    altura: number;

    constructor(base: number, altura:number){
        super(base*altura, 2*base + 2*altura);
        this.altura = altura;
        this.base = base;
    }
}