//entonces en cada función podemos declarar que vamos a recibir un objeto del tipo xmen
function enviarMision(xmen) {
    console.log("enviando a " + xmen.nombre + " a la misión secreta");
}
function enviarCuartel(xmen) {
    console.log("enviando al cuartel a " + xmen.nombre);
}
//podermos decir que wolverine es de tipo Xmen de nuestra interfaz
var wolverine = {
    nombre: "Ironman",
    poder: "regeneracion",
    arma: "mano con cuchillas",
    nivel: 10
};
enviarMision(wolverine);
enviarCuartel(wolverine);
