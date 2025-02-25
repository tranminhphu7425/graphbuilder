// useTrangchuEffect.js
import { Network, DataSet } from 'vis-network/standalone';

export const Background = () => {
  const nodes = [];
  const edges = [];

  // Create random nodes
  for (let i = 1; i <= 35; i++) {
    nodes.push({ id: i, label: `${i}` });
  }

  // Function to generate random edges
  function generateRandomEdges(nodes, edges, numEdges) {
    const usedEdges = new Set();
    const usedNodes = new Set();

    // Randomly decide if the graph is directed or undirected
    const isDirected = Math.random() < 0.5; // 50% chance of being directed

    while (edges.length < numEdges) {
      const from = nodes[Math.floor(Math.random() * nodes.length)].id;
      const to = nodes[Math.floor(Math.random() * nodes.length)].id;

      if (from !== to && !usedEdges.has(`${from}-${to}`) && !usedEdges.has(`${to}-${from}`)) {
        edges.push({ from, to, arrows: isDirected ? 'to' : undefined });
        usedEdges.add(`${from}-${to}`);
        if (!isDirected) {
          usedEdges.add(`${to}-${from}`);
        }
        usedNodes.add(from);
        usedNodes.add(to);
      }
    }

    return { usedNodes, usedEdges, isDirected };
  }

  // Generate random edges
  const numEdges = 50; // Adjust this value to change the number of edges
  const { usedNodes, usedEdges, isDirected } = generateRandomEdges(nodes, edges, numEdges);

  // Select 6 random nodes without edges
  const nodesWithoutEdges = nodes.filter(node => !usedNodes.has(node.id));
  const selectedNodes = [];
  while (selectedNodes.length < 6 && nodesWithoutEdges.length > 0) {
    const randomIndex = Math.floor(Math.random() * nodesWithoutEdges.length);
    selectedNodes.push(nodesWithoutEdges.splice(randomIndex, 1)[0]);
  }

  // Add edges to the selected nodes to ensure they have at least one edge
  selectedNodes.forEach(node => {
    const randomNode = nodes[Math.floor(Math.random() * nodes.length)].id;
    if (node.id !== randomNode && !usedEdges.has(`${node.id}-${randomNode}`) && !usedEdges.has(`${randomNode}-${node.id}`)) {
      edges.push({ from: node.id, to: randomNode, arrows: isDirected ? 'to' : undefined });
      usedEdges.add(`${node.id}-${randomNode}`);
      if (!isDirected) {
        usedEdges.add(`${randomNode}-${node.id}`);
      }
    }
  });

  // Đảm bảo đồ thị không có chu trình
  function isAcyclic(edges) {
    const graph = new Map();
    const visited = new Set();
    const recStack = new Set();

    // Build the graph
    edges.forEach(edge => {
      if (!graph.has(edge.from)) {
        graph.set(edge.from, []);
      }
      graph.get(edge.from).push(edge.to);
    });

    function dfs(node) {
      if (!visited.has(node)) {
        visited.add(node);
        recStack.add(node);

        const neighbors = graph.get(node) || [];
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor) && dfs(neighbor)) {
            return true;
          } else if (recStack.has(neighbor)) {
            return true;
          }
        }
      }
      recStack.delete(node);
      return false;
    }

    for (const node of graph.keys()) {
      if (dfs(node)) {
        return false;
      }
    }
    return true;
  }

  // Remove edges to make the graph acyclic
  while (!isAcyclic(edges)) {
    const randomIndex = Math.floor(Math.random() * edges.length);
    edges.splice(randomIndex, 1);
  }

  const container = document.getElementById("mynetworkBackground");
  const data = {
    nodes: new DataSet(nodes),
    edges: new DataSet(edges),
  };
  const options = {
    configure: { enabled: false },
    nodes: {
      shape: "dot",
      color: "#F3C623",
      size: 50, // Adjust this value to change the node size
      margin: 10,
      font: { color: "#000000", size: 50, vadjust: -100, align: "center" },
    },
    edges: {
      smooth: {
        type: "dynamic",
        roundness: 0.5, // Giúp vòng tròn mềm mại hơn
      },
      selfReferenceSize: 20, // Kích thước vòng lặp
      color: {
        color: "#021526",
        highlight: "#021526",
        hover: "#021526",
        opacity: 1,
      },
    },
    interaction: { dragNodes: true, hover: true },
    physics: {
      enabled: true,
      solver: "forceAtlas2Based",
      forceAtlas2Based: {
        theta: 0.2,
        springLength: 180,
        springConstant: 0.09,
        centralGravity: 0.005,
        gravitationalConstant: -36,
        damping: 0.4,
        avoidOverlap: 0,
      },
      stabilization: {
        iterations: 200,
      },
      wind: {
        x: 0,
        y: 0,
      },
    },
  };

  const network = new Network(container, data, options);

  // Update wind.x and wind.y every second
  let windDirectionX = 4; // 1 for increasing to 2, -1 for decreasing to -2
  let newWindX = -2; // Initial value

  let newWindY = -2; // Initial value
  let windDirectionY = 2;

  setInterval(() => {
    // Change value of newWindX according to direction
    if (newWindX >= 2) {
      windDirectionX = -4; // Switch direction to -2
    } else if (newWindX <= -2) {
      windDirectionX = 4; // Switch direction to 2
    }
    newWindX += windDirectionX; // Update value of newWindX

    if (newWindY >= 1) {
      windDirectionY = -1; // Switch direction to -2
    } else if (newWindY <= -1) {
      windDirectionY = 1; // Switch direction to 2
    }
    newWindY += windDirectionY;

    // Update physics options
    network.setOptions({
      physics: {
        wind: {
          x: newWindX,
          y: newWindY,
        },
      },
    });

    console.log(`Updated wind: x=${newWindX}`);
    console.log(`Updated wind: y=${newWindY}`);
  }, 3000);
};