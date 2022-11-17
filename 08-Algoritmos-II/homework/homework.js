'use strict'
// No cambies los nombres de las funciones.

// Implementar el método conocido como quickSort para ordenar de menor a mayor
// el array recibido como parámetro
// Devolver el array ordenado resultante
// Tu código:
// Elegir un elemento de la lista de elementos a ordenar, al que llamaremos pivote.
// Mover los demás elementos de la lista a cada lado del pivote: 
// Izquierda --> Menores 
// Derecha --> Mayores
// Los iguales al pivote a la izquierda
// Al hacer eso serían la  el pivote ocupa exactamente el lugar que le corresponderá en la lista ordenada.
// La lista queda separada en dos sublistas, una formada por los elementos a la izquierda del pivote, y otra por los elementos a su derecha.
// Repetir este proceso de forma recursiva para cada sublista mientras éstas contengan más de un elemento. Una vez terminado este proceso todos los elementos estarán ordenados.
function quickSort(array) {
  let pivote = array[0], menores = [], medio = [], mayores = [];
  if(array.length <= 1) return array;
  for(const num of array){
    pivote > num && menores.push(num);
    pivote < num && mayores.push(num);
    pivote === num && medio.push(num); 
    // if(pivote > num) menores.push(num);
    // if(pivote < num) mayores.push(num);
    // if(pivote === num) medio.push(num) 
    }
  // menores = quickSort(menores);
  // mayores = quickSort(mayores);
//            O
  return quickSort(menores).concat(medio.concat(quickSort(mayores)));
   
}
let array = [4, 5, 6, 7];

console.log(quickSort([5, 24, 6, 16, 4]))
// [4]      5       [24, 6, 16]
// [4]         [6, 16]  24  []
//            [6,16]

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // Dividir en mitades el array
  if(array.length <= 1) return array;
  const middleIndex = Math.floor(array.length / 2);
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex); 
  mergeSort(left);
  mergeSort(right);
}

// Saber que hace mi función
// 

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
