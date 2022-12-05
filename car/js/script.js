/**
 * 
   Crea un array composto da 10 automobili.
   Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

   Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
   Infine stampa separatamente i 3 array.
 */
const benzina=[];
const gpl=[];
const diesel=[];

const carsList= [
  {marca: "bmw",
  modello: "m5",
  alimentazione: "diesel"},

  {marca: "bmw",
  modello: "m5",
  alimentazione: "gpl"},

  {marca: "bmw",
  modello: "m5",
  alimentazione: "diesel"},

  {marca: "bmw",
  modello: "m5",
  alimentazione: "gpl"},

  {marca: "bmw",
  modello: "m5",
  alimentazione: "benzina"},

  {marca: "bmw",
  modello: "m5",
  alimentazione: "gpl"},

  {marca: "bmw",
  modello: "m5",
  alimentazione: "benzina"},

  {marca: "bmw",
  modello: "m5",
  alimentazione: "diesel"},


  {marca: "bmw",
  modello: "m5",
  alimentazione: "benzina"},


  {marca: "bmw",
  modello: "m5",
  alimentazione: "diesel"},
];

for(let i=0; i < carsList.length; i++){
  if (carsList[i].alimentazione== "benzina"){
    benzina.push(carsList[i]);
  } else if(carsList[i].alimentazione== "diesel"){
    diesel.push(carsList[i]);
  } else{
    gpl.push(carsList[i]);
  }
}

console.log(benzina);
console.log(diesel);
console.log(gpl);