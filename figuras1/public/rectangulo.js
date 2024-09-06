import { Figura } from './figura.js';
export class Rectangulo extends Figura {
    constructor(base, altura) {
        super(base * altura, 2 * base + 2 * altura);
        this.altura = altura;
        this.base = base;
    }
}
