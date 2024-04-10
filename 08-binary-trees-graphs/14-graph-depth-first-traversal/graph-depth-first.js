const Stack = require('./stack');

function depthFirstTraversal(graph, vertex) {
  if (!graph.adjacencyList[vertex]) return [];

  const visited = new Set();
  const stack = new Stack();
  const results = [];

  visited.add(vertex);
  stack.push(vertex);
  
  while(!stack.isEmpty()) {
    const currentVertex = stack.pop();
    const adjacentVertexs = graph.adjacencyList[currentVertex];

    results.push(currentVertex);
    
    adjacentVertexs.forEach(adjVertex => {
      if (!visited.has(adjVertex)) {
        visited.add(adjVertex);
        stack.push(adjVertex);
      }
    });
  }

  return results;
}

module.exports = depthFirstTraversal;
