'use strict';

const Node = require('./graphGenerator');

const BFS = (start) => {
  let queue = [start.name];

  if(start.neighbors.length === 0){
    return queue;
  }
  start.neighbors.forEach((element)=>{
    queue.push(element.name);
  });

  start.neighbors.forEach((element)=>{
    let neighbor = BFS(element).slice(1);
    queue = queue.concat(neighbor);
  });
  return queue;

};

module.exports = BFS;
