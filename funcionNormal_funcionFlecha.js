/* funcion normal*/
var normal = function (a) {
    return a;
};
/*función de flecha*/
var funcionFlecha = function (a) { return a; };
/*ambas funciones hacen exactamente lo mismo, reciben como parámetro a y retornan el valor de a */
console.log(normal("funcion_Normal"));
console.log(funcionFlecha("funcion_Flecha"));
/*ejemplo de funcion normal y de flecha con 2 o más parámetros*/
var normal_1 = function (a, b) {
    return a + b;
};
var funcionFlecha_1 = function (a, b) { return a + b; };
console.log("El valor funcion normal es: " + normal_1(1, 2));
console.log("El valor funcion flecha es: " + funcionFlecha_1(1, 2));
/*ejemplo de una función normal y de flecha con más de una linea de código*/
var normal_2 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
/*como tiene mas de una linea de código, la función de flecha debe llevar llaves ya que si no llevara
se consideraría como el retorno*/
var funcionFlecha_2 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(normal_2("vegueta"));
console.log(funcionFlecha_2("vegueta_2"));
/*ejemplo de setimeout con funcion normal dentro de un objeto*/
/*esta función imprime undefined en el valor de nombre_1, a menos que setiemos el valor de nombre a nivel global*/
var nombre_1 = "Pedrito";
var hulk = {
    nombre_1: "Hulkcito",
    smash: function () {
        /*cuando se ejecuta un setimeout dentro de un objeto que este caso es hulk,
        el this apunta al objeto global, no a donde me encuentro.
        Para este caso es útil usar una función de flecha*/
        setTimeout(function () {
            console.log(this.nombre_1 + " Smash!!!"); //esto imprime pedrito smash!!! ya que pedrito es el valor de nombre_1 global que es a donde apunta el this
        }, 1500);
    }
};
hulk.smash();
/*ejemplo de setimeout con funcion de flecha dentro de un objeto
como se usa la función de flecha, el this apunta a la variable nombre_2 dentro del objeto y no
a la variable nombre_2 global*/
var nombre_2 = "Majin Boo";
var saijayin = {
    nombre_2: "Goku",
    smash_2: function () {
        var _this = this;
        setTimeout(function ( /*siempre poner los paréntesis aunque la función no reciba parámetros*/) { return console.log(_this.nombre_2 + " usó la Genkidama!!!"); }, 1500);
    }
};
//ejecuto la función smash_2
saijayin.smash_2();
/*UNA DE LAS PRINCIPALES CARACRTERÍSTICAS DE LAS FUNCIONES DE FLECHA, ES QUE EL THIS
NO SE VE AFECTADO CUANDO SE UTILIZA UNA FUNCIÓN DENTRO DE OTRA*/
