// Objetos Literales

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 343512345,
    lat: 14.3431,
    lng: 43.34321
  }
};

//console.table( {persona} );
const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( {persona} );
console.log( {persona2} );


