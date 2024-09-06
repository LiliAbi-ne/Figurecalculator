export class Figura {
    area: number;
    perimeter: number;
    constructor (a: number, p:number){
        this.area = a;
        this.perimeter = p;
    }
   calcularArea():number {
    return this.area;
   }
   calcularPerimeter(): number{
    return this.perimeter;
   }
}