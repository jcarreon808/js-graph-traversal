'use strict';

const Node = require('./graphGenerator');


const DFS = (start, searchFor) => {
  if (start.value === searchFor) {
    return start;
  } else if (start.neighbors.length === 0) {
    return false;
  } else {
    for (var i = 0; i < start.neighbors.length; i++) {
      let result = DFS(start.neighbors[i],searchFor);

      if (result) {
        return result;
      }
    }
  }
};

module.exports = DFS;
