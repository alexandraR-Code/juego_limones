function generarAleatorio(min,max){
    let random=Math.random();//0-1
    //Ejemplo: max es 600, min es 5
    let numero = random * (max - min); //0- max 0-595
    let numeroEntero = Math.ceil(numero); 
    // Ejemplo : 0 
    numeroEntero = numeroEntero + min; // 0- 600
    return numeroEntero;
}