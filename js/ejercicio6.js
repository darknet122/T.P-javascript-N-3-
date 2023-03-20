/* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:




Input:
lado A = 24
lado B = 5

Output: 58
*/
let lado1 = lado2 = 0;
let perimetro = 0;
lado1 = preguntarunDato();
lado2 = preguntarunDato();

escribeunPerimetro(lado1,lado2);

function preguntarunDato(){
    return parseFloat(window.prompt("escribe la longitud de un número"));
}    
function escribeunPerimetro(a,b){
    let perimetro = 2*(a+b);
    document.write("El lado 1 es " + a);    
    document.write("<br>");
    document.write("El lado 2 es " + b);
    document.write("<br>");
    document.write("El perimetro de un rectángulo de lados " + a + " y " + b +" es "+perimetro);
}