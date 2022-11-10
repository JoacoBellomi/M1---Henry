"use strict";

function BinarioADecimal(num) {
  // num => 10110
  // hacer los pasos que tenga que hacer
  // return numDecimal
  /*
  1 * 2 ** 4 = 16
  0 * 2 ** 3 = 0
  1 * 2 ** 2 = 4
  1 * 2 ** 1 = 2
  0 * 2 ** 0 = 0
  */
  
  var decimal = 0, resultado = 0;

  for (var cont = 0; cont < num.length; cont++){
    if(num[cont] === '1'){
      decimal = decimal + Math.pow(num[cont]*2, num.length - 1 - cont);
  }}
  return decimal;
}

function DecimalABinario(num) {
  // num => 22
  // hacer los pasos que tenga que hacer...
  // return numBinario
  /*
  22/2 = 11 => 0
  11/2 = 5 => 1
  5/2 = 2 => 1
  2/2 = 0 => 0
  1/2 = 0 => 1
  1
  CLARO
  */
  var res = 0, residuo = '';
  while(num > 0){
    residuo = num % 2 + residuo;
    num = num / 2;
    num = Math.floor(num);
    console.log("2");
  }  
  return residuo;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
