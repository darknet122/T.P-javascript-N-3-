//7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
let numero = pedirNumero();
escribirTablaMultiplicar(numero);

function pedirNumero(){
    return parseFloat(window.prompt("escribe un numero para la tabla"));
}    

function escribirTablaMultiplicar(n1){

	document.write("<h2>Tabla de multiplicar del "+ n1 +"</h2>");

	document.write("<ul>");

	for(i = 1;i<=10;i++){
		document.write("<li>");
		document.write(n1 + "x " + i + "= " + n1 * i);
		document.write("</li>");
	}

	document.write("</ul>");
}

