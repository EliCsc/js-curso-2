//1.Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio';

//2.Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function mensaje() {
    alert('El botón fue clicado');
}

//3.Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function ciudad() {
    let ciudad = prompt("cual es tu ciudad favorita de Brasil");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

//4.Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function amor() {
    alert("Yo amo JS");
}

//5.Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
//las funciones de tipo "prompt" devuelven valores de tipo string por lo que debo convertirlos 
//a number antes de realizar operaciones matematicas
function sumar() {
    let numero1 =prompt("me das un numero entre 1 y 10");
    let numero2 = prompt("me das un segundo numero por favor");
   alert(`La suma de tus numeros es ${Number(numero1) + Number(numero2)}`);

}

