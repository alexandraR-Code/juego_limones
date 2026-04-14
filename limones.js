let canvas= document.getElementById("areaJuego");
let ctx= canvas.getContext("2d");

const ALTURA_SUELO = 40;
const ALTURA_PERSONAJE = 60;
const ANCHO_PERSONAJE = 40;
const ANCHO_LIMON = 20;
const ALTURA_LIMON = 20;

let personajeX = canvas.width/2;
let personajeY = canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);
let limonX = canvas.width/2;
let limonY = 5;
let puntaje = 0;
let vidas = 3;
let velocidadCaida = 200;
let tiempo = 30;
let detenerJ;
let intervaloTiempo; 
let intervaloLimon;

function iniciarJuego(){
    clearInterval(intervaloLimon);
    clearInterval(intervaloTiempo);

    mostrarEnSpan("txtTiempo", tiempo);
    mostrarEnSpan("txtVidas", vidas);
    mostrarEnSpan("txtPuntaje", puntaje);

    intervaloLimon= setInterval(bajarLimon, velocidadCaida);
    intervaloTiempo = setInterval(restarTiempo, 1000);


    aparecerLimon();



}
function dibujarSuelo(){
    ctx.fillStyle ="green";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width, ALTURA_SUELO);
}
function dibujarPersonaje(){
    ctx.fillStyle = "pink";
    ctx.fillRect(personajeX, personajeY, ANCHO_PERSONAJE, ALTURA_PERSONAJE);
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
    ctx.clearRect(0,0,canvas.width,canvas.height);
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
    detectarAtrapado();
    detectarPiso();
}
function detectarAtrapado(){
    if(limonX + ANCHO_LIMON > personajeX &&
        limonX < personajeX + ANCHO_PERSONAJE &&
        limonY + ALTURA_LIMON > personajeY &&
        limonY < personajeY + ALTURA_PERSONAJE){
        //alert("Atrapado!");
        aparecerLimon();
        puntaje = puntaje + 1;
        mostrarEnSpan("txtPuntaje", puntaje);
    }
}

function detectarPiso(){
    if(limonY + ALTURA_LIMON == canvas.height -ALTURA_SUELO){
       aparecerLimon();
       vidas = vidas -1; 
       mostrarEnSpan("txtVidas", vidas);
       mostrarEnSpan("txtPuntaje", puntaje);
       if (vidas <=0){
        finalizarJuego("GAME OVER");
       }else{
        aparecerLimon();
       }
    }
}


function aparecerLimon(){
    limonX= generarAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY=0;
    actualizarPantalla();
}



function restarTiempo(){
    tiempo = tiempo - 1;
    mostrarEnSpan("txtTiempo", tiempo);
    if(tiempo <= 0){
       finalizarJuego("Se acabo el tiempo")    
    }
}
function finalizarJuego (){
    clearInterval(detenerJ);
    clearInterval(intervaloTiempo);
    alert("GAME OVER! " + " Puntaje final: " + puntaje);
    location.reload();
}

function aleatoria(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function mostrarEnSpan(idSpan, valor) {
    let componente = document.getElementById(idSpan)
    if(componente)componente.textContent = valor;
}
function reiniciarJuego(){
    location.reload();
}



   

