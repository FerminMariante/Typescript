/*DESTRUCTURACIÓN DE OBJETOS*/
/*con la destructuración de objetos podemos obtener los datos de una manera más facil y rápida por ejemplo:*/
/*tenemos un objeto saiyajin*/
var saiyajin = {
    guerrero: "Broly",
    apodo: "Guerrero Legendario",
    poder: "desconocido"
};
/*normalmente obtendriamos los datos de la siguiente manera*/
// let nombre_3 = saiyajin.nombre;
// let apodo = saiyajin.apodo;
// let poder = saiyajin.poder;
/*pero con la destructuración podemos obtener los valores de la siguiente manera, no importa el orden
pero si es importante que los nombres de las variables sean iguales al del objeto.
En la destructuración podemos asignarle un alias a nuestro parámetro y esto se hace con " : " despues viene el alias
como en el casod de la variable apodo donde le asignamos el alias de nickname*/
var nickname = saiyajin.apodo, guerrero = saiyajin.guerrero, poder = saiyajin.poder;
console.log(nickname, guerrero, poder);
/*DESTRUCTURACIÓN DE ARREGLOS*/
/*En los arreglos la destructuración de objetos es secuencial y no importa que nombre o alias le asignemos al parámetro*/
var saijayines = ["Kakaroto", "Vegueta", "broly"];
var goku = saijayines[0], principe = saijayines[1], enojon = saijayines[2]; //puedo asignarle cualquier nombre, pero el orden es secuencial
console.log(goku, principe, enojon);
//si queremos extraer un objeto en específico del arreglo debemos rellenar con comas
var enojon_2 = saijayines[2];
console.log("imprimiendo el objeto específico " + enojon_2);
