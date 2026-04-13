let canvas= document.getElementById("areaJuego");
let ctx= canvas.getContext("2d");

const ALTURA_SUELO = 40;
const ALTURA_PERSONAJE = 60;
const ANCHO_PERSONAJE = 40;
const ANCHO_LIMON = 20;
const ALTURA_LIMON = 20;

let personajeX = canvas.width/2;
let limonX = canvas.width/2;
let limonY = 5;

function iniciarJuego(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();


}
function dibujarSuelo(){
    ctx.fillStyle ="green";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width, ALTURA_SUELO);
}
function dibujarPersonaje(){
    ctx.fillStyle = "pink";
    ctx.fillRect(personajeX, canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE), ANCHO_PERSONAJE, ALTURA_PERSONAJE);
}
function moverIzquierda(){
    personajeX = personajeX - 10;
    actualizarPantalla();  
}
function moverDerecha(){
    personajeX = personajeX + 10;
    actualizarPantalla();
}

function actualizarPantalla(){
    dibujarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
    
}
function dibujarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function dibujarLimon(){
    ctx.fillStyle = "green";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON); 
}
function bajarLimon(){
    limonY = limonY + 10;
    actualizarPantalla();
}