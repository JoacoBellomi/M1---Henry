"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
    - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
    - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

    El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.arr = [];
}

BinarySearchTree.prototype.insert = function(value){
  if(value > this.value){
    if(this.right){
      this.right.insert(value);
    } 
    else{
      this.right = new BinarySearchTree(value);
    }
  } 
  else if(value < this.value){
    if(this.left){
      this.left.insert(value);
    }
    else{
      this.left = new BinarySearchTree(value);
    }
  }
}

BinarySearchTree.prototype.size = function(){
  var cont = 1;
  
    if(this.left){
      cont += this.left.size()
    }
      if(this.right){
      cont += this.right.size()
    } 
  
  return cont;
};

BinarySearchTree.prototype.contains = function(value){
  if(value === this.value) return true;
  if(value < this.value){
    if(this.left){
     return this.left.contains(value);
    }
  }
    if(this.right){
  return this.right.contains(value);
  } 
  return false;
};

BinarySearchTree.prototype.depthFirstForEach = function(cb, type){
  //Necesito recorrer según parametro
  switch(type){
    case 'post-order':
      if(this.left) this.left.depthFirstForEach(cb, type);
      if(this.right) this.right.depthFirstForEach(cb, type);  
      cb(this.value);
      break;
    case 'pre-order':
      cb(this.value);
      if(this.left) this.left.depthFirstForEach(cb, type);
      if(this.right) this.right.depthFirstForEach(cb, type);
      break;
    default:
      if(this.left) this.left.depthFirstForEach(cb, type);
      cb(this.value);
      if(this.right) this.right.depthFirstForEach(cb, type);
      // break;
  };
};

BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue){
  if(!queue) {
    var queue = [];
  }
  cb(this.value);
  
  if(this.left) queue.push(this.left);
  
  if(this.right) queue.push(this.right);

  if(queue.length > 0){
    queue.shift().breadthFirstForEach(cb, queue);
  }
};
/*
depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.*/
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
