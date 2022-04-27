
// passaggi per creare un generatore una password ---

// chiedo il nome all'utente e lo salvo----
const nome= prompt("Quale è il tuo nome?");

// chiedo il cognome all'utente e lo salvo----
const cognome= prompt("Quale è il tuo cognome?")

//sommo il nome e cognome----
const nomecompleto = `${nome} ${cognome}`;
document.getElementById("title").innerHTML = "Ciao " + nomecompleto;


// chiedo il colore preferito all'utente e lo salvo----
const colore= prompt("Quale è il tuo colore preferito?")


//sommo il nome,cognome e colore prefito e numero 21 e salvo----
const somma= nome + cognome + colore + Number("21");
document.getElementById("password").innerHTML = somma;

