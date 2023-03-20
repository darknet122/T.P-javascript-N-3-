//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']; 

console.log(meses);
document.write(meses);

document.write('<h2>Lista de meses</h2>')
document.write('<ul>')
for(let listaMeses=0; listaMeses < meses.length; listaMeses++){
    document.write(`<li>${ meses[listaMeses] }</li>`)
}
document.write('</ul>')