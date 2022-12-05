/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */

const zucchineList =[
  {varietà: "gialla",
  peso: "1",
  lunghezza: "12"},

  {varietà: "gialla",
  peso: "1.3",
  lunghezza: "12"},

  {varietà: "gialla",
  peso: "1",
  lunghezza: "12"},

  {varietà: "gialla",
  peso: "1.3",
  lunghezza: "12"},

  {varietà: "gialla",
  peso: "1.2",
  lunghezza: "12"},

  {varietà: "gialla",
  peso: "1.3",
  lunghezza: "12"},

  {varietà: "gialla",
  peso: "1",
  lunghezza: "12"},

  {varietà: "gialla",
  peso: "1.3",
  lunghezza: "12"},

  {varietà: "gialla",
  peso: "1.2",
  lunghezza: "12"},

  {varietà: "gialla",
  peso: "3",
  lunghezza: "12"},
];

let sum = 0;

for(let i= 0; i < zucchineList.length; i++){
  // console.log(zucchineList[i].peso);
  sum += parseInt(zucchineList[i].peso);
}
console.log(sum);

console.log(sum/zucchineList.length)