// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
var listaNumeri = [];
var numero = 0;
for (i = 0; i < 101; i++) {
  var numeroPush = numero + i;
  listaNumeri.push(numeroPush);
  console.log(listaNumeri);
  if (numeroPush % 3 == 0 && numeroPush % 5 == 0) {
    listaNumeri[numeroPush] = "FizzBuzz";
  } else if (numeroPush % 5 == 0) {
  listaNumeri[numeroPush] = "Buzz";
} else if (numeroPush % 3 == 0 ) {
listaNumeri[numeroPush] = "Fizz";
console.log(listaNumeri);
  }
}
listaNumeri.shift();
console.log(listaNumeri);
