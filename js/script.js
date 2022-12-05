// 1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
// 2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
// 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.

const student ={
  name: "Luigi",
  surname: "Ballo",
  age: 21
}

for (let key in student){
  console.log(key, ": ", student[key]);
}

const studentsList = [
  {name: "Luigi",
  surname: "Ballo",
  age: 21}
]

for(let i = 0; i < studentsList.length; i++){
  for (let key in studentsList[i]){
    console.log(key, ": ", studentsList[i][key]);
  }
}