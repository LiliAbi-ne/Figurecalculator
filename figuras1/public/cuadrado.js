// cuadrado.ts
import { Figura } from './figura.js';
export class Cuadrado extends Figura {
    constructor(lado) {
        super(lado * lado, 4 * lado);
        this.lado = lado;
    }
}
