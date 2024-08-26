# Graph Class Implementation

This project provides a JavaScript implementation of a Graph and Node class. It supports various operations such as adding vertices and edges, removing them, and graph traversal using Depth First Search (DFS) and Breadth First Search (BFS).

## Table of Contents

- [Classes](#classes)
  - [Node Class](#node-class)
  - [Graph Class](#graph-class)
- [Methods](#methods)
- [Example Usage](#example-usage)
- [Graph Traversals](#graph-traversals)
  - [Depth First Search (DFS)](#depth-first-search-dfs)
  - [Breadth First Search (BFS)](#breadth-first-search-bfs)
- [License](#license)

## Classes

### Node Class

The `Node` class represents a node in the graph. Each node has a `value` and a set of `adjacent` nodes that represent the edges to other nodes.

**Properties:**

- `value`: The value associated with the node.
- `adjacent`: A `Set` that contains references to adjacent nodes (edges).

### Graph Class

The `Graph` class represents an undirected graph. It manages a collection of nodes and allows for the manipulation of the graph through various methods, including adding/removing vertices and edges.

## Methods

- **`addVertex(node)`**: Adds a single node to the graph.
- **`addVertices(nodes)`**: Adds an array of nodes to the graph.
- **`addEdge(node1, node2)`**: Adds an edge between two nodes in the graph.
- **`removeEdge(node1, node2)`**: Removes the edge between two nodes in the graph.
- **`removeVertex(node)`**: Removes the node and all edges associated with it from the graph.
- **`depthFirstSearch(startNode)`**: Performs a Depth First Search traversal starting from the given node and returns an array of visited nodes.
- **`breadthFirstSearch(startNode)`**: Performs a Breadth First Search traversal starting from the given node and returns an array of visited nodes.

## Example Usage

```javascript
// Create a graph instance
let graph = new Graph();

// Create nodes
let a = new Node("A");
let b = new Node("B");
let c = new Node("C");

// Add vertices to the graph
graph.addVertices([a, b]);
graph.addVertex(c);

// Add edges between nodes
graph.addEdge(a, b);
graph.addEdge(a, c);

// Check adjacent nodes
console.log(a.adjacent); // Set containing nodes b and c

// Perform graph traversals
console.log(graph.depthFirstSearch(a)); // DFS traversal from node A
console.log(graph.breadthFirstSearch(a)); // BFS traversal from node A