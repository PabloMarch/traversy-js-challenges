const Queue = require('./queue');

function breadthFirstTraversal(graph, vertex) {
  const visited = new Set();
  const queue = new Queue();
  const result = new Array();

  visited.add(vertex);
  queue.enqueue(vertex);

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();

    result.push(currentVertex);

    graph.adjacencyList[currentVertex].forEach(adjVertex => {
      if (!visited.has(adjVertex)) {
        visited.add(adjVertex);
        queue.enqueue(adjVertex);
      }
    });
  };

  return result;
}

module.exports = breadthFirstTraversal;
