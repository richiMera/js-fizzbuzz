// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
var listaNumeri = [];
// var numero = 1;
for (i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    listaNumeri.push( "FizzBuzz")
  } else if (i % 5 == 0) {
    listaNumeri.push( "Buzz")
  } else if (i % 3 == 0 ) {
    listaNumeri.push( "Fizz")
  } else {
    listaNumeri.push(i);
  }
}
// listaNumeri.shift();
console.log(listaNumeri);
