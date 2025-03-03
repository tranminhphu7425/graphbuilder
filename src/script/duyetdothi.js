import vis from "../tool/vis-network-wrapper.js";
import { useEffect } from "react";

export const DuyetdothiEffect = () => {
  useEffect(() => {
    let network = null;
    document
      .getElementById("graphForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        let numNodes = parseInt(document.getElementById("nodes").value);
        let edgesInput = document.getElementById("edges").value.trim();
        let isDirected = document.getElementById("directed").checked;
        let traversalType = event.submitter.value; // DFS or BFS
        var startNode = parseInt(document.getElementById("startNode").value);


        let edges = edgesInput
          .split("\n")
          .map((line) => line.trim().split(" ").map(Number));
        let graph = buildGraph(edges, isDirected, numNodes);
        let result = traverseGraph(graph, numNodes, traversalType, startNode);
        displayResult(result);
        drawGraph(result, isDirected);
      });

    function buildGraph(edges, isDirected, numNodes) {
      let graph = Array.from({ length: numNodes + 1 }, () => []);

      for (let [u, v] of edges) {
        if (u < 1 || u > numNodes || v < 1 || v > numNodes) {
          console.error(
            `Số nút không hợp lệ: u=${u}, v=${v}, numNodes=${numNodes}`
          );
          continue;
        }
        graph[u].push(v);
        if (!isDirected) graph[v].push(u);
      }

      // Sắp xếp các danh sách kề của mỗi đỉnh
      for (let i = 1; i <= numNodes; i++) {
        graph[i].sort((a, b) => a - b); // Sắp xếp từ bé đến lớn
      }

      return graph;
    }

    function traverseGraph(graph, numNodes, type, startNode) {
      let visited = new Array(numNodes + 1).fill(false);
      let result = [];
      let component = new Array(numNodes + 1).fill(0);
      let order = 0;
      let currentComponent = 0;

      function dfs(node, parent) {
        visited[node] = true;
        result.push({ node, parent, order: ++order });
        component[node] = currentComponent;
        for (let neighbor of graph[node]) {
          if (!visited[neighbor]) {
            dfs(neighbor, node);
          }
        }
      }

      function bfs(start) {
        let queue = [{ node: start, parent: -1 }];
        visited[start] = true;
        component[start] = currentComponent;
        while (queue.length > 0) {
          let { node, parent } = queue.shift();
          result.push({ node, parent, order: ++order });
          for (let neighbor of graph[node]) {
            if (!visited[neighbor]) {
              visited[neighbor] = true;
              component[neighbor] = currentComponent;
              queue.push({ node: neighbor, parent: node });
            }
          }
        }
      }
      type === "DFS" ? dfs(startNode, -1) : bfs(startNode);
      for (let i = 1; i <= numNodes; i++) {
        if (!visited[i]) {
          currentComponent++;
          type === "DFS" ? dfs(i, -1) : bfs(i);
          
        }
      }

      result.forEach((node) => (node.component = component[node.node]));
      return result;
    }

    function displayResult(result) {
      let output = "Đỉnh | Cha | Thứ tự duyệt\n";
      output += result
        .map(({ node, parent, order }) => `${node} | ${parent} | ${order}`)
        .join("\n");
      console.log(output);
    }

    function drawGraph(result) {
      const colors = ["#ffa500", "#ff7f50", "#6495ed", "#ff69b4", "#bdd482"];
      let nodes = result.map(({ node, order, component }) => {
        return {
          id: node,
          label: `${node} - ${order}`,
          color: colors[component % colors.length],
        };
      });
      let edges = result
        .filter(({ parent }) => parent !== -1)
        .map(({ node, parent }) => ({ from: parent, to: node, arrows: "to" }));

      let container = document.getElementById("mynetwork");
      if (!container) {
        container = document.createElement("div");
        container.id = "mynetwork";
        container.style.height = "500px";
        document.body.appendChild(container);
      }

      let data = {
        nodes: new vis.DataSet(nodes),
        edges: new vis.DataSet(edges),
      };
      let options = {
        configure: { enabled: false },
        nodes: {
          size: 30,
          margin: 50,
          font: { color: "#000000", size: 30, align: "center" },
        },
        edges: {
          smooth: {
            type: "dynamic",
            roundness: 0.5,
          },
          selfReferenceSize: 20,
        },
        interaction: { dragNodes: true, hover: true },
        physics: {
          enabled: true,
          solver: "forceAtlas2Based",
          forceAtlas2Based: {
            springLength: 200,
            springConstant: 0.02,
            centralGravity: 0.005,
            gravitationalConstant: -200,
          },
          stabilization: {
            iterations: 200,
          },
          wind: {
            x: 0,
            y: 0,
          },
        },
        layout: {
          hierarchical: {
            direction: "UD",
            sortMethod: "directed",
          },
        },
      };
      network = new vis.Network(container, data, options);
    }

    document
      .getElementById("zoomExtendsButton")
      .addEventListener("click", function () {
        network.fit();
      });
  }, []);
};
