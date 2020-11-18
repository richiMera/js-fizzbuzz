// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
var numero;
// var numero = 1;
for (i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    numero = "FizzBuzz";
  } else if (i % 5 == 0) {
  numero = "Buzz";
  } else if (i % 3 == 0 ) {
    numero = "Fizz";
  } else {
    numero = i;
  }
  document.getElementById('buzzer').innerHTML += numero + "<br>";
}
