'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arreglo = [1], div = 2;
    while(num > 1){
      if(num % div === 0){
      num /= div;
      arreglo.push(div);
    } else div++;
  }
  return arreglo;
}
console.log(factorear(5));
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
 //var array = [1,20,2,141,3,5];
 let desorden = true;
 while(desorden){
  desorden = false;
  for(let i = 0; i < array.length; i++){
    if(array[i] > array[i+1]){
      let aux = array[i];
      array[i] = array[i+1];
      array[i+1] = aux;
      desorden = true;
    }
  }
 }
 return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // Tomamos un elemento y vemos si atrás hay algún número mayor
  // Si es mayor lo cambiamos pero sigue viendo si el anterior es mayor
  // Recorro la lista 
  // Mientras tenga un numero que sea > atrás va a seguir yendo hacia atrás
  //
  for(let i = 1; i < array.length; i++){
    let aux = array[i];
    let iaux = i - 1;
    while(array[iaux] > aux && iaux !== -1){
      array[i] = array[iaux];
      array[iaux] = aux; 
      iaux--;
      i--;
    }
  }
  return array;
  }

console.log(insertionSort([5, 4, 16, 24, 3]));


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // Voy a comparar cada elemento con los que tiene a su derecha
  // Al arrancar a comparar mi primer elemento va a ser el "menor" hasta que vea otro menor
  // Cuando encuentro otro menor pasará a ser el menor
  // Cuando llegue al final del array habrá quedado un valor y lo vamos a cambiar por la posición que 
  // disputábamos.

  let menor, indiceaux;
  for(let i = 0; i < array.length -1; i++){
    menor = array[i];
    indiceaux = i;
    for(let i2 = i+1; i2 < array.length; i2++){
      if(menor > array[i2]){
        indiceaux = i2;
        menor = array[i2];
      }
    }
    array[indiceaux] = array[i]
    array[i] = menor;
  }
  return array;
}

console.log(selectionSort([40, 2, 7, 15, 20, 30, 6, 1, 4]));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
