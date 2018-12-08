/*tipos de variables en typescript*/

let nombre:string = "peter";
let numero:number = 12;
let booleano:boolean = true;
let hoy:Date = new Date();

hoy = new Date('2017-12-07');

console.log("La Fecha es "+hoy);

/*este tipo de variable acepta cualquier tipo de dato*/
let cualquiera:any;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;

/*con respecto a los objetos, typescript genera un tipo de variable personalizado y al intentar cambiar alguno de sus datos,
exige que se seteen los demás campos*/
let spiderman = {
  nombre: "peter",
  edad:20
}

spiderman = {
  nombre: "goku",
  edad:25
}
