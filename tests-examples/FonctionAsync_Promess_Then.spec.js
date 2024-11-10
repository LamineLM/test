async function test () {
    const name = prompt('Please enter your name.');
    return name
}

test().then (
   (result) => {console.log(result)} 
)




/*
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function greeting(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  rl.question('Please enter your name: ', (name) => {
    callback(name);
    rl.close(); // Fermer l'interface readline après avoir reçu l'entrée utilisateur
  });
}

processUserInput(greeting);
*/

/*
Fonction asynchrone (async) : Une fonction marquée avec async retourne toujours une promesse. La valeur retournée par la fonction sera utilisée pour résoudre cette promesse.
Promesse (Promise) : Un objet représentant la réussite ou l'échec éventuel d'une opération asynchrone.
Méthode .then() : Utilisée pour spécifier ce qui doit être fait lorsque la promesse est résolue.
*/