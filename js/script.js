// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
var listaNumeri = [];

for (i = 1; i < 102; i++) {
  listaNumeri.push(i);
  console.log(listaNumeri);
  if (i % 3 == 0 && i % 5 == 0) {
    listaNumeri[i] = "FizzBuzz";
} else if (i % 5 == 0) {
  listaNumeri[i] = "Buzz";
} else if (i % 3 == 0 ) {
listaNumeri[i] = "Fizz";
console.log(listaNumeri);
}
console.log(listaNumeri);


}
