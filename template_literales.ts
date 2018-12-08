/* los templates literales ayudan a crear tipos de string personalizados*/

let empresa:string = "Mi Empresa";
let anos:number = 25;
//esta seria la manera normal de hacer un texto concatenando las variables
let texto = "el nombre de la empresa es "+ empresa + " y tiene "+anos+" años de servicio";

console.log(texto);


/*con template literario sería de la siguiente forma, por otra parte los template literales nos permiten
crear string de multilinea considerando los espacios y saltos de linea que dejemos*/

let texto_template = `el nombre de la empresa es ${empresa} y tiene ${anos} años de experiencia`;

console.log(texto_template);

let texto_template2 = `el nombre de la empresa es:
 ${empresa} y tiene
 ${anos} años de experiencia`;
 console.log(texto_template2);

 /* dentro de los template literales específicamente ${aquí adentro se puede meter código de javascript} por ejemplo*/

 function getEmpresa() {
     return empresa
 }

 let texto_template3 = `nombre empresa ${getEmpresa()}`;
 console.log(texto_template3);
