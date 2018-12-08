
/* funcion normal*/
let normal = function (a){
  return a;
}

/*función de flecha*/
let funcionFlecha = a => a;

/*ambas funciones hacen exactamente lo mismo, reciben como parámetro a y retornan el valor de a */
console.log(normal("funcion_Normal"));
console.log(funcionFlecha("funcion_Flecha"));


/*ejemplo de funcion normal y de flecha con 2 o más parámetros*/

let normal_1 = function (a:number, b:number){
  return a+b;
}


let funcionFlecha_1 = (a:number , b:number) => a+b;

console.log("El valor funcion normal es: "+normal_1(1,2));

console.log("El valor funcion flecha es: "+funcionFlecha_1(1,2));


/*ejemplo de una función normal y de flecha con más de una linea de código*/

let normal_2 = function(nombre:string){
  nombre = nombre.toUpperCase();
  return nombre;
}
/*como tiene mas de una linea de código, la función de flecha debe llevar llaves ya que si no llevara
se consideraría como el retorno*/
let funcionFlecha_2 = (nombre:string)=>{
  nombre = nombre.toUpperCase();
  return nombre;
}

console.log(normal_2("vegueta"));
console.log(funcionFlecha_2("vegueta_2") );


/*ejemplo de setimeout con funcion normal dentro de un objeto*/
/*esta función imprime undefined en el valor de nombre_1, a menos que setiemos el valor de nombre a nivel global*/
let nombre_1 = "Pedrito";

let hulk = {
  nombre_1: "Hulkcito",
  smash(){
    /*cuando se ejecuta un setimeout dentro de un objeto que este caso es hulk,
    el this apunta al objeto global, no a donde me encuentro.
    Para este caso es útil usar una función de flecha*/
    setTimeout(function(){
      console.log(this.nombre_1+" Smash!!!");//esto imprime pedrito smash!!! ya que pedrito es el valor de nombre_1 global que es a donde apunta el this
    },1500);

  }
}

hulk.smash();

/*ejemplo de setimeout con funcion de flecha dentro de un objeto
como se usa la función de flecha, el this apunta a la variable nombre_2 dentro del objeto y no
a la variable nombre_2 global*/

let nombre_2 = "Majin Boo";

let saijayin = {
  nombre_2: "Goku",
  smash_2(){
     setTimeout((/*siempre poner los paréntesis aunque la función no reciba parámetros*/)=> console.log(this.nombre_2+" usó la Genkidama!!!"),1500);
  }
}
//ejecuto la función smash_2
saijayin.smash_2();

/*UNA DE LAS PRINCIPALES CARACRTERÍSTICAS DE LAS FUNCIONES DE FLECHA, ES QUE EL THIS
NO SE VE AFECTADO CUANDO SE UTILIZA UNA FUNCIÓN DENTRO DE OTRA*/
