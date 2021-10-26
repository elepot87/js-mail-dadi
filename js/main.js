// Mail
// - crea una lista contenente almeno 3 indirizzi email
// - chiedi all’utente la sua email,
// - controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
// - stampa un messaggio appropriato sull’esito del controllo.

const userEmail = [
  "eleonorapotente@gmail.com",
  "info@verdepastello.com",
  "alice@verdepastello.com",
  "falace@centroleonardo.net",
];

const inputEmail = document.getElementById("mail");
const checkEmail = document.querySelector(".btn");

// Controllo l'indirizzo dell'utente al click del bottone

checkEmail.addEventListener("click", function () {
  // Ottenere il valore dell'input inserito da utente
  const user = inputEmail.value.trim().toLowerCase();
  //   console.log(user);

  //   Controllare che non sia stringa vuota
  if (user === "") {
    alert("Inserire una mail per favore!");
  } else {
    //   Controllare se la mail inserita è nella lista(Array) userEmail
    let userFound = false;
    for (let i = 0; i < userEmail.length; i++) {
      if (userEmail[i] === user) {
        userFound = true;
        break;
      }
    }
    if (userFound === true) {
      alert("Sei nel database");
    } else {
      alert("Devi prima registrarti al sito!");
    }
  }
});

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const btnPlay = document.querySelector(".btn-dice");

btnPlay.addEventListener("click", function () {
  let num1 = Math.floor(Math.random() * 6 + 1);

  document.getElementById(
    "casuale1"
  ).innerHTML = `Numero casuale dell'utente ${num1}`;

  let num2 = Math.floor(Math.random() * 6 + 1);

  document.getElementById(
    "casuale2"
  ).innerHTML = `Numero casuale del computer ${num2}`;

  if (num1 > num2) {
    document.getElementById("sfida").innerHTML = `Hai vinto!`;
  } else if (num1 < num2) {
    document.getElementById("sfida").innerHTML = `Hai perso!`;
  } else {
    document.getElementById("sfida").innerHTML = `Pareggio!`;
  }
});
