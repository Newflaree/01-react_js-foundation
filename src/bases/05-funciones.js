// Funciones

const saludar = function( nombre ) {
  return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
  return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

console.log( saludar( 'Juan' ) );
console.log( saludar2( 'Pedro' ) );
console.log( saludar2( 'Alonso' ) );

const getUser = () => {
  return {
    uid: '1234',
    username: 'El_lolero30'
  }
}

const getUser2 = () => ({
  uid: '1234',
  username: 'El_lolero30'
})

console.log( getUser() );
console.log( getUser2() );

// Tarea
// 1. Transformar a función de flecha.
// 2. Debe de retornar un objeto implícito.
// 3. Probar

function getUsuarioActivo( nombre ) {
  return {
    uid: 'ASDF234',
    username: nombre
  }
} 

const usuarioActivo = getUsuarioActivo( 'Camilo' );
console.log( usuarioActivo );

// Resolución
const getUsuarioActivo2 = ( nombre ) => ({
  uid: 'ASDF234',
  username: nombre
});

const usuarioActivo2 = getUsuarioActivo2( 'Camilo Arroy' );
console.log( usuarioActivo2 );
