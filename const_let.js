console.log("Archivo de Let y Const");
//el let permite manejar la declaración de variables en caso de que 2 variables se llamen igual, typescript al compilar
//se encarga de renombrar 2 variables que tengan el mismo nombre dejando un archivo de javascript con una variable
//llamada palabra y la otra palabra_1
var palabra = "esdrújula";
if (true) {
    var palabra_1 = "grave";
    console.log("el valor de la palabra es " + palabra_1);
    //el valor de palabra debería de ser grave ya que se encuentra en el scope dentro del if
}
console.log("el valor de la palabra es " + palabra);
//el valor de palabra debería de ser esdrujula ya que se encuentra en el ámbito global
/*uso de const que quiere decir constante, este es un tipo de variable que puede ser declarada
y evita que se cambie su valor, las variables const deben ser instanciadas al momento de ser declaradas. al igual
que las variables let una constante puede tener otro valor dentro de un scope distinto */
var CONFIGURACION = "todas";
if (true) {
    var CONFIGURACION_1 = "ninguna";
}
console.log("el valor de la constante configuración es " + CONFIGURACION);
