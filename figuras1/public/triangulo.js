import { Figura } from './figura.js';
export class Triangulo extends Figura {
    constructor(lado1, lado2, lado3) {
        const s = (lado1 + lado2 + lado3) / 2;
        const area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));
        const perimeter = lado1 + lado2 + lado3;
        super(area, perimeter);
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    esTriangulo() {
        return (this.lado1 + this.lado2 > this.lado3) &&
            (this.lado1 + this.lado3 > this.lado2) &&
            (this.lado2 + this.lado3 > this.lado1);
    }
    tipoTriangulo() {
        if (this.lado1 === this.lado2 && this.lado2 === this.lado3) {
            return 'Equilátero';
        }
        else if (this.lado1 === this.lado2 || this.lado1 === this.lado3 || this.lado2 === this.lado3) {
            return 'Isósceles';
        }
        else {
            return 'Escaleno';
        }
    }
}
