/*DESTRUCTURACIÓN DE OBJETOS*/
/*con la destructuración de objetos podemos obtener los datos de una manera más facil y rápida por ejemplo:*/
/*tenemos un objeto saiyajin*/
let saiyajin = {
  guerrero:"Broly",
  apodo:"Guerrero Legendario",
  poder:"desconocido"
}

/*normalmente obtendriamos los datos de la siguiente manera*/
// let nombre_3 = saiyajin.nombre;
// let apodo = saiyajin.apodo;
// let poder = saiyajin.poder;

/*pero con la destructuración podemos obtener los valores de la siguiente manera, no importa el orden
pero si es importante que los nombres de las variables sean iguales al del objeto.
En la destructuración podemos asignarle un alias a nuestro parámetro y esto se hace con " : " despues viene el alias
como en el casod de la variable apodo donde le asignamos el alias de nickname*/
let {apodo:nickname, guerrero , poder}= saiyajin;

console.log(nickname,guerrero,poder);

/*DESTRUCTURACIÓN DE ARREGLOS*/

/*En los arreglos la destructuración de objetos es secuencial y no importa que nombre o alias le asignemos al parámetro*/

let saijayines:string[] = ["Kakaroto","Vegueta","broly"];

let [goku,principe,enojon]= saijayines;//puedo asignarle cualquier nombre, pero el orden es secuencial

console.log(goku,principe,enojon);

//si queremos extraer un objeto en específico del arreglo debemos rellenar con comas
let [ , , enojon_2] = saijayines;
console.log("imprimiendo el objeto específico "+ enojon_2);
