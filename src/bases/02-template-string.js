// Template String

const nombre = 'Camilo';
const apellido = 'López';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

function getSaludo( nombre = '' ) {
  return `Hola ${ nombre }`;
}

console.log( `Este es el texto: ${ getSaludo( nombreCompleto ) }` );
