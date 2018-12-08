/*function saludar(nombre:string){
  console.log("Hola "+nombre.toUpperCase());
}

var wolverine = {
  nombre:"Logan"
};

saludar(wolverine.nombre);*/
//uso del let, podemos tener 2 variables nombradas mensaje, pero estan en diferentes ámbitos
var mensaje = "Hola";
if (true) {
    var mensaje_1 = "adios";
}
console.log(mensaje);
// uso de constantes, es un tipo de variable que debe ser inicializada al momento de ser declarada
//y no puede o no permite ser modificada, a menos que este en otro ámbito
var OPCIONES = "todas";
if (true) {
    var OPCIONES_1 = "ninguna";
}
