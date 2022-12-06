/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */

const people = [
  {
    name : "gino",
    surname : "pino",
    age : 12
  },
  {
    name : "gino",
    surname : "pino",
    age : 18
  },
  {
    name : "pillo",
    surname : "pino",
    age : 18
  },
  {
    name : "gino",
    surname : "pino",
    age : 18
  },
  {
    name : "Sino",
    surname : "pino",
    age : 24
  },
  {
    name : "gino",
    surname : "pino",
    age : 12
  },
  {
    name : "gina",
    surname : "pino",
    age : 24
  },
  {
    name : "gino",
    surname : "pino",
    age : 18
  },
  {
    name : "gino",
    surname : "pino",
    age : 12
  },
  {
    name : "gint",
    surname : "pino",
    age : 24
  },
  {
    name : "gino",
    surname : "pino",
    age : 18
  },
  
];

people.filter((person) => {
  if (person.age >= 18){
    console.log(`${person.name} ${person.surname} può guidare`)
  } else{
    console.log(`${person.name} ${person.surname} NON può guidare`)
  }
})

