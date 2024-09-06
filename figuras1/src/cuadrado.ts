// cuadrado.ts
import { Figura } from './figura';

export class Cuadrado extends Figura {
    lado: number;

    constructor(lado: number) {
        super(lado * lado, 4 * lado);
        this.lado = lado;
    }
}
