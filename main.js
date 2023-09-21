/**
 * Objetivos:
 * Estructura HTML.
 * Funciones.
 * Objetos.
 * Arrays.
 * Algun metodo de los arrays.
 */

// Clase item.
class Item{
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// Items del game.
const pocion = new Item("Pocion de vida", 100, "pocion.png");
const espada = new Item("Espada", 180, "espada.png");
const escudo = new Item("Escudo", 90, "escudo.png");

// Array de inventario.
const inventario = [];

//Oro del juego
let oro = 500;

// Elementos del DOM
const elOro = document.querySelector("#oro span");
elOro.innerText = oro;

// Funcion de comprar.
function comprar(itemDelJuego){
    if (oro - itemDelJuego.precio >= 0) {
        inventario.push(itemDelJuego);
        oro -= itemDelJuego.precio;
        actualizaarHTML();
    }else{
        alert(`No tenes el oro suficiente para comprar ${itemDelJuego.nombre}.`);
    }
}

function actualizaarHTML(){
    elOro.innerText = oro;
}