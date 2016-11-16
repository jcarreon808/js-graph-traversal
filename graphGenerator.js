// Implement a graph generator that represents a set of objects where some pairs of objects are connected by links.

const Node = function(name, value) {
  this.name = name;
  this.value = value;
  this.neighbors = [];

};

Node.prototype.addNeighbors = function(array){
  this.neighbors = this.neighbors.concat(array);
  return this.neighbors;

};

module.exports = Node;