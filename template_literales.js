/* los templates literales ayudan a crear tipos de string personalizados*/
var empresa = "Mi Empresa";
var anos = 25;
//esta seria la manera normal de hacer un texto concatenando las variables
var texto = "el nombre de la empresa es " + empresa + " y tiene " + anos + " años de servicio";
console.log(texto);
/*con template literario sería de la siguiente forma, por otra parte los template literales nos permiten
crear string de multilinea considerando los espacios y saltos de linea que dejemos*/
var texto_template = "el nombre de la empresa es " + empresa + " y tiene " + anos + " a\u00F1os de experiencia";
console.log(texto_template);
var texto_template2 = "el nombre de la empresa es:\n " + empresa + " y tiene\n " + anos + " a\u00F1os de experiencia";
console.log(texto_template2);
/* dentro de los template literales específicamente ${aquí adentro se puede meter código de javascript} por ejemplo*/
function getEmpresa() {
    return empresa;
}
var texto_template3 = "nombre empresa " + getEmpresa();
console.log(texto_template3);
