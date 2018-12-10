/*ejemplo de como crear clases en typescript*/
var Avenger = /** @class */ (function () {
    /* creando un constructor que instancie (reemplace los valores por defecto) de mi clase Avenger*/
    function Avenger(nombre, equipo, nombreReal) {
        /*puedo setear valores por defecto a las propiedades de persona*/
        this.nombre = "Sin Nombre";
        this.equipo = undefined;
        this.nombreReal = undefined;
        this.puedePelear = false;
        this.peleasGanadas = 0;
        /*el this.nombre apunta al nombre de de la clase*/
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var vengador = new Avenger("Spiderman", "Vengadores", "Peter Parker");
//vengador.nombre = "Hulk";
// vengador.equipo = "Vengadores";
// vengador.nombreReal = "Peter Parker";
console.log(vengador);
