//nuestra interfaz se llamará Xmen y tiene ciertos tipos de parámetros
interface Xmen{
  nombre:string,
  poder:string,
  arma:string,
  nivel:number
}

//entonces en cada función podemos declarar que vamos a recibir un objeto del tipo xmen
function enviarMision (xmen:Xmen){
  console.log("enviando a "+xmen.nombre + " a la misión secreta");
}

function enviarCuartel (xmen:Xmen){
  console.log("enviando al cuartel a "+xmen.nombre);
}
//podermos decir que wolverine es de tipo Xmen de nuestra interfaz
let wolverine:Xmen = {
   nombre:"Ironman",
   poder:"regeneracion",
   arma: "mano con cuchillas",
   nivel: 10
};

enviarMision(wolverine);
enviarCuartel(wolverine);
