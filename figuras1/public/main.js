var _a;
import { Circulo } from './circulo.js';
import { Cuadrado } from './cuadrado.js';
import { Rectangulo } from './rectangulo.js';
import { Triangulo } from './triangulo.js';
//CUADRADO
function calcularCuadrado(event) {
    event.preventDefault();
    const ladoInput = document.getElementById("ladoInput");
    const lado = parseFloat(ladoInput.value);
    if (!isNaN(lado) && lado > 0) {
        const cuadrado = new Cuadrado(lado);
        document.getElementById("cuaPeriText").innerText = "Perímetro: " + cuadrado.calcularPerimeter();
        document.getElementById("cuaAreaText").innerText = "Área: " + cuadrado.calcularArea();
    }
    else {
        alert("Por favor, ingrese un valor válido para el lado.");
    }
}
document.getElementById("bttnCua").addEventListener("click", calcularCuadrado);
//RECTANGULO
function calcularRectangulo(event) {
    event.preventDefault();
    const baseInput = document.getElementById("baseInput");
    const base = parseFloat(baseInput.value);
    const alturaInput = document.getElementById("alturaInput");
    const altura = parseFloat(alturaInput.value);
    if (!isNaN(base) && base > 0) {
        const rectangulo = new Rectangulo(base, altura);
        document.getElementById("rectPeriText").innerText = "Perimetro: " + rectangulo.calcularPerimeter();
        document.getElementById("rectAreaText").innerText = "Area: " + rectangulo.calcularArea();
    }
    else {
        alert("Por favor, ingrese un valor válido para el lado.");
    }
}
document.getElementById("bttnRectan").addEventListener("click", calcularRectangulo);
//CIRCULO
function calcularCirculo(event) {
    event.preventDefault();
    const radioInput = document.getElementById("radioInput");
    const radio = parseFloat(radioInput.value);
    const dianetroInput = document.getElementById("dianetroInput");
    const diametro = parseFloat(dianetroInput.value);
    if (!isNaN(radio) && radio > 0) {
        const circulo = new Circulo(radio, diametro);
        document.getElementById("cirPeriText").innerText = "Perimetro: " + circulo.calcularPerimeter();
        document.getElementById("cirareaText").innerText = "Area: " + circulo.calcularArea();
    }
    else {
        alert("Por favor, ingrese un valor válido para el lado.");
    }
}
document.getElementById("bttnCircle").addEventListener("click", calcularCirculo);
//TRIANGULO
function calcularTriangulo(event) {
    event.preventDefault();
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);
    if (!isNaN(lado1) && lado1 > 0 && !isNaN(lado2) && lado2 > 0 && !isNaN(lado3) && lado3 > 0) {

        const triangulo = new Triangulo(lado1, lado2, lado3);

        if (!triangulo.esTriangulo()) {
            alert("Los lados no forman un triángulo.");
            return;
        }
        document.getElementById("triPeriText").innerText = "Perímetro: " + triangulo.calcularPerimeter();
        document.getElementById("triAreaText").innerText = "Área: " + triangulo.calcularArea();
        document.getElementById("triTipoText").innerText = "Tipo: " + triangulo.tipoTriangulo();
    } else {
        alert("Por favor, ingrese valores válidos para los lados.");
    }


};
document.getElementById("bttnTri").addEventListener("click", calcularTriangulo);
