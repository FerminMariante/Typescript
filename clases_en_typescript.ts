
/*ejemplo de como crear clases en typescript*/

class Avenger{
  /*puedo setear valores por defecto a las propiedades de persona*/
  nombre:string = "Sin Nombre";
  equipo:string = undefined;
  nombreReal:string = undefined;

  puedePelear:boolean = false;
  peleasGanadas:number = 0;

  /* creando un constructor que instancie (reemplace los valores por defecto) de mi clase Avenger*/
 constructor(nombre:string,equipo:string,nombreReal:string){
   /*el this.nombre apunta al nombre de de la clase*/
   this.nombre = nombre;
   this.equipo = equipo;
   this.nombreReal = nombreReal;
 }
}

let vengador = new Avenger("Spiderman","Vengadores","Peter Parker");
//vengador.nombre = "Hulk";
// vengador.equipo = "Vengadores";
// vengador.nombreReal = "Peter Parker";
console.log(vengador);
