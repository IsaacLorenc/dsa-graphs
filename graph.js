class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
  v1.adjacent.add(v2);
  v2.adjacent.add(v1);
  }
  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }
  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  // This is important because if we don't remove the vertex from other nodes adjacency lists, we'll end up with a graph that has "phantom" vertices
  // that are no longer in the graph, but are still referenced by other vertices in the graph.
  removeVertex(vertex) {
    // loop through all the nodes in the graph
    for (let node of this.nodes) {
      // if the node has the vertex in its adjacency list
      if (node.adjacent.has(vertex)) {
        // remove the vertex from the adjacency list
        node.adjacent.delete(vertex);
      }
    }
    // finally, remove the vertex from the nodes property of the graph
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using Depth First Search
  // Depth First Search is a graph traversal algorithm that visits all the nodes
  // in a graph in a depth-first order. It starts with the start node, then
  // visits all of its adjacent nodes, then visits all of the adjacent nodes of
  // the nodes it just visited, and so on.
  depthFirstSearch(start) {
    // Create an empty Set
    // The Set is a data structure that we'll use to keep track of all the nodes
    // that we've visited. We use a Set because it's a collection of unique
    // values, and we don't want to visit the same node multiple times.
    const visited = new Set();
    // Create an empty array
    // This array will store the values of all the nodes that we visit
    const result = [];

    // Define a nested function called traverse
    // This function is a recursive function that will visit all the nodes in the
    // graph.
    function traverse(vertex) {
      // Base case
      // If the vertex is null, then we don't have anything to visit, so we just
      // return null.
      if (!vertex) {
        return null;
      }
      // Visit node
      // Add the vertex to the visited Set, and add its value to the result
      // array.
      visited.add(vertex);
      result.push(vertex.value);

      // Visit neighbors
      // Loop through all the adjacent nodes of the vertex, and if we haven't
      // visited them yet, then call the traverse function on them.
      vertex.adjacent.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          return traverse(neighbor);
        }
      });
    }

    // Call the traverse function on the start node
    traverse(start);

    // Return the result array
    // This is the array of node values that we've visited
    return result;
  }


  // this function returns an array of Node values using Breadth First Search
  // Breadth First Search is a graph traversal algorithm that visits all the nodes
  // in a graph in a level by level order. It starts with the start node, then
  // visits all of its adjacent nodes, then visits all of the adjacent nodes of
  // the nodes it just visited, and so on.
  breadthFirstSearch(start) {
    // Create an empty queue
    // The queue is a data structure that we'll use to keep track of the nodes that
    // we need to visit in the order that we need to visit them.
    const queue = [start];
    
    // Create an empty array
    // This array will store the values of the nodes that we visit
    const result = [];
    
    // Create an empty Set
    // This Set is used to keep track of the nodes that we've already visited
    const visited = new Set();
    
    // Declare a variable
    // This variable will be used to store the current node that we're visiting
    let currentVertex;
    
    // Add the start node to the visited set
    // This is so that we don't visit the start node twice
    visited.add(start);
    
    // While there is still remaining vertices in queue
    // This loop will continue until there are no more nodes left in the queue
    while (queue.length) {
      // Shift the first node off the queue
      // This is the node that we're going to visit next
      currentVertex = queue.shift();
      
      // Add the value of the current node to the result array
      // This is so that we can keep track of the nodes that we've visited
      result.push(currentVertex.value);
      
      // Loop through all of the adjacent nodes of the current node
      // For each adjacent node, we need to add it to the queue if we haven't
      // already visited it
      currentVertex.adjacent.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          // Add the adjacent node to the visited set
          // This is so that we don't visit the adjacent node twice
          visited.add(neighbor);
          
          // Add the adjacent node to the queue
          // This is so that we can visit it in the future
          queue.push(neighbor);
        }
      });
    }
    
    // Return the result array
    // This array contains all of the Node values that we visited in the order
    // that we visited them
    return result;
  }
}

module.exports = {Graph, Node}