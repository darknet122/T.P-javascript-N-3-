/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

*/
let ciudad = [];
do {
  let nombreCiudad = prompt("Ingrese un nombre de una ciudad");
  while (nombreCiudad === null || nombreCiudad === "") {
    alert("No se ingreso niguna ciudad");
    nombreCiudad = prompt("Ingrese un nombre de una ciudad");
  }
  ciudad.push(nombreCiudad);
} while (confirm("¿Desea seguir?"));


document.write(`El arreglo de ciudades tiene ${ciudad.length} elementos`);
document.write(`<br>`);
document.write(`<ul>`);
document.write(`<li>El elemento de la primera posicion es: ${ciudad[0]}</li>`);
document.write(`<li>El elemento de la tercera posicion es: ${ciudad[2]}</li>`);
document.write(`<li>El elemento de la ultima posicion es: $${ciudad[ciudad.length - 1]}}</li>`);
document.write(`</ul>`);
document.write(`<br>`);
document.write("Ultima posicion Paris");

document.write('<h1> Arreglo de ciudades </h1>');
document.write('<ul>')
for(let ciudades=0; ciudades < ciudad.length; ciudades++){
    document.write(`<li>${ ciudad[ciudades] }</li>`)
}
document.write('</ul>')

ciudad.splice(1,0,'Barcelona')
document.write('<h1> Arreglo de ciudades con agregados </h1>');
ciudad.push("Paris");
document.write('<ul>')
for(let ciudades=0; ciudades < ciudad.length; ciudades++){
    document.write(`<li>${ ciudad[ciudades] }</li>`)
}
document.write('</ul>')
