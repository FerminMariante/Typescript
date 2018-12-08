/*function saludar(nombre:string){
  console.log("Hola "+nombre.toUpperCase());
}

var wolverine = {
  nombre:"Logan"
};

saludar(wolverine.nombre);*/

//uso del let, podemos tener 2 variables nombradas mensaje, pero estan en diferentes ámbitos
let mensaje = "Hola";

if (true){
  let mensaje = "adios";
}

console.log(mensaje);

// uso de constantes, es un tipo de variable que debe ser inicializada al momento de ser declarada
//y no puede o no permite ser modificada, a menos que este en otro ámbito

const OPCIONES = "todas";

if(true){
  const OPCIONES = "ninguna";
}
