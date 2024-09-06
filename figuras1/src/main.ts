import { Circulo } from './circulo';
import { Cuadrado } from './cuadrado';
import { Rectangulo } from './rectangulo';
import { Triangulo } from './triangulo';


//CUADRADO
function calcularCuadrado(event: Event) {
    event.preventDefault(); 

    const ladoInput = document.getElementById("ladoInput") as HTMLInputElement;
    const lado = parseFloat(ladoInput.value);

    if (!isNaN(lado) && lado > 0) {
        const cuadrado = new Cuadrado(lado);
        document.getElementById("cuaPeriText")!.innerText = "Perímetro: " + cuadrado.calcularPerimeter();
        document.getElementById("cuaAreaText")!.innerText = "Área: " + cuadrado.calcularArea();
    } else {
        alert("Por favor, ingrese un valor válido para el lado.");
    }
}

document.getElementById("bttnCua")!.addEventListener("click", calcularCuadrado);


//RECTANGULO
function calcularRectangulo(event: Event){
    event.preventDefault();

    const baseInput = document.getElementById("baseInput") as HTMLInputElement;
    const base = parseFloat(baseInput.value);
    const alturaInput = document.getElementById("alturaInput") as HTMLInputElement;
    const altura = parseFloat(alturaInput.value);
    if (!isNaN(base)&& base > 0){
        const rectangulo = new Rectangulo(base, altura);
        document.getElementById("rectPeriText")!.innerText = "Perimetro: " + rectangulo.calcularPerimeter();
        document.getElementById("recAreaText")!.innerText = "Area: " + rectangulo.calcularArea();

    }else{
        alert("Por favor, ingrese un valor válido para el lado.");
    }

}
document.getElementById("bttnRectan")!.addEventListener("click", calcularRectangulo);

//CIRCULO
function calcularCirculo(event: Event){
    event.preventDefault();

    const radioInput = document.getElementById("radioInput") as HTMLInputElement;
    const radio = parseFloat(radioInput.value);
    const dianetroInput = document.getElementById("dianetroInput") as HTMLInputElement;
    const diametro = parseFloat(dianetroInput.value);
    if (!isNaN(radio)&& radio > 0){
        const circulo = new Circulo(radio, diametro);
        document.getElementById("cirPeriText")!.innerText = "Perimetro: " + circulo.calcularPerimeter();
        document.getElementById("cirareaText")!.innerText = "Area: " + circulo.calcularArea();

    }else{
        alert("Por favor, ingrese un valor válido para el lado.");
    }

}
document.getElementById("bttnCircle")!.addEventListener("click", calcularCirculo);

//TRIANGULO


document.getElementById('calcular')?.addEventListener('click', () => {
  const lado1 = parseFloat((document.getElementById('lado1') as HTMLInputElement).value);
  const lado2 = parseFloat((document.getElementById('lado2') as HTMLInputElement).value);
  const lado3 = parseFloat((document.getElementById('lado3') as HTMLInputElement).value);
  

  const triangulo = new Triangulo(lado1, lado2, lado3);

  if (!triangulo.esTriangulo()) {
    (document.getElementById('resultado') as HTMLDivElement).innerText = "Los lados no forman un triángulo.";
    return;
  }


  const tipo = triangulo.tipoTriangulo();
  const area = triangulo.area;
  const perimetro = triangulo.perimeter;
  
  (document.getElementById('resultado') as HTMLDivElement).innerHTML = `
    Tipo de triángulo: ${tipo} <br>
    Área: ${area.toFixed(2)} <br>
    Perímetro: ${perimetro.toFixed(2)}
  `;
});
