/* en una función los parámetros obligatorios tienen que ser enviados para que la función se ejecute
los parámetros opcionales pueden o no ser enviados*/
/* funcion nombreFuncion(parametro_obligatorio,parametro_pordefecto,parametro_opcional)
si se envía el parámetro opcional estoy obligado a enviar la variable por defecto porque sinó el valor de la variable
opcional se le asigna a la variable por defecto ya que va en orden correlativo*/
function activar(quien:string, objeto:string = "alarma", lugar?:string){

  let mensaje:string;
  if(lugar){
    mensaje = `${quien} ha activado la ${objeto} desde ${lugar}`;
  }
  else{
    mensaje = `${quien} ha activado la ${objeto}`;
  }
  console.log(mensaje);
}

let persona = "Gordon";
//enviando solo la variable obligatoria
activar(persona);

//enviando la variable opcional
activar(persona,"batiseñal","sydney");
