/*
	Chiedere all'utente il nome e inserirlo nella variabile firstName
	Chiedere all'utente il cognome e inserirlo nella variabile lastName
	Chiedere all'utente il colore preferito e inserilo nella variabile prefColor
	Generare la password concatenando le variabili firstName, lastName e prefColor nella variabile PassWord
	Selezionare l'ID dello span che dovrà contenere la variabile PassWord
	Mostrare nella pagina un messaggio con lo span che comunica il contenuto della variabile PassWord
	(La password viene "trasformata" in caratteri minuscoli dal CSS)
*/

const firstName = prompt('Inserire il proprio nome:');
const lastName = prompt('Inserire il proprio cognome');
const prefColor = prompt('Inserire il proprio colore preferito');
const PassWord = firstName + lastName + prefColor + '23';
document.getElementById('first-name').innerHTML = firstName;
document.getElementById('last-name').innerHTML = lastName;
document.getElementById('color').innerHTML = prefColor;
document.getElementById('pw-gen').innerHTML = PassWord;