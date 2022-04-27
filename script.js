
// passaggi per creare un generatore una password ---

// chiedo il nome all'utente e lo salvo----
const nome= prompt("Quale è il tuo nome?");
console.log(nome);

// chiedo il cognome all'utente e lo salvo----
const cognome= prompt("Quale è il tuo cognome?")
console.log(cognome);

//sommo il nome e cognome----
const nomecompleto = `${nome} ${cognome}`;
document.getElementById("title").innerHTML = nomecompleto;
console.log(nomecompleto);

// chiedo il colore preferito all'utente e lo salvo----
const colore= prompt("Quale è il tuo colore preferito?")
console.log(colore);

//sommo il nome,cognome e colore prefito e numero 21 e salvo----
const somma= nome + cognome + colore + 21;
document.getElementById("password").innerHTML = somma + 21;
console.log(somma + 21)

