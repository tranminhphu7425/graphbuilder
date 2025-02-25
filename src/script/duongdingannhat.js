import vis from "../tool/vis-network-wrapper.js";
import { useEffect } from "react";

export const DuongdingannhatEffect = () => {

    useEffect( () => {
      let network = null;
        
    // Hàm xử lý sự kiện khi người dùng nhấn nút "Chạy Thuật Toán"
    function handleSubmit(event) {
        event.preventDefault();
        const nodes = parseInt(document.getElementById("nodes").value);
        const edgesText = document.getElementById("edges").value;
        const directed = document.getElementById("directed").checked;
        const startNode = parseInt(document.getElementById("startNode").value);
  
        const edges = edgesText
          .split("\n")
          .map((edge) => {
            const parts = edge.trim().split(" ").map(Number);
            if (parts.length === 2) {
              // Nếu chỉ có 2 số (from, to) -> Mặc định weight = 1
              return { from: parts[0], to: parts[1], weight: 1 };
            } else if (parts.length === 3) {
              return { from: parts[0], to: parts[1], weight: parts[2] };
            } else {
              return null; // Bỏ qua dòng không hợp lệ
            }
          })
          .filter((edge) => edge !== null);
        var graph = createAdjacencyMatrix(nodes, edges, directed);
        const { distances, previous } = dijkstra(graph, startNode);
  
        // Hiển thị kết quả trên giao diện
        displayResults(nodes, distances, previous);
  
        drawGraph(nodes, edges, directed, previous, startNode);
      }
  
      // Hàm hiển thị kết quả lên bảng trong giao diện
      function displayResults(nodes, distances, previous) {
        const resultDiv = document.getElementById("result");
        const tbody = document.querySelector("#resultTable tbody");
        tbody.innerHTML = ""; // Xóa dữ liệu cũ trước khi thêm mới
  
        for (let i = 1; i <= nodes; i++) {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${i}</td>
            <td>${distances[i] === Infinity ? "No path" : distances[i]}</td>
            <td>${previous[i] !== null ? previous[i] : "-"}</td>
          `;
          tbody.appendChild(row);
        }
  
        // Hiển thị bảng khi có kết quả
        resultDiv.style.display = "block";
      }
  
      function createAdjacencyMatrix(nodes, edges, directed) {
        const INF = Infinity;
        const adjacencyMatrix = Array.from({ length: nodes + 1 }, () =>
          Array(nodes + 1).fill(INF)
        );
  
        for (let i = 1; i <= nodes; i++) {
          adjacencyMatrix[i][i] = 0;
        }
  
        edges.forEach(({ from, to, weight }) => {
          adjacencyMatrix[from][to] = weight;
          if (!directed) {
            adjacencyMatrix[to][from] = weight;
          }
        });
  
        return adjacencyMatrix;
      }
  
      function dijkstra(graph, startNode) {
        const nodes = graph.length - 1;
        const INF = Infinity;
        const distances = new Array(nodes + 1).fill(INF);
        const mark = new Array(nodes + 1).fill(false);
        const previous = new Array(nodes + 1).fill(null);
  
        distances[startNode] = 0;
        previous[startNode] = -1;
  
        for (let it = 1; it < nodes; it++) {
          let minDistance = INF;
          let currentNode = -1;
  
          for (let i = 1; i <= nodes; i++) {
            if (!mark[i] && distances[i] < minDistance) {
              minDistance = distances[i];
              currentNode = i;
            }
          }
  
          if (currentNode === -1) break;
  
          mark[currentNode] = true;
  
          for (let neighbor = 1; neighbor <= nodes; neighbor++) {
            if (graph[currentNode][neighbor] !== INF && !mark[neighbor]) {
              let newDistance =
                distances[currentNode] + graph[currentNode][neighbor];
              if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                previous[neighbor] = currentNode;
              }
            }
          }
        }
  
        return { distances, previous };
      }
  
      // Hàm vẽ đồ thị với các cạnh thuộc đường đi ngắn nhất được đánh dấu
      function drawGraph(nodes, edges, directed, previous) {
        const nodesArray = Array.from({ length: nodes }, (_, i) => ({
          id: i + 1,
          label: `${i + 1}`,
        }));
        const edgesArray = edges.map((edge) => ({
          from: edge.from,
          to: edge.to,
          label: `${edge.weight}`,
          arrows: directed ? "to" : "",
          color: { color: "black" },
          width: 1, // Độ dày mặc định của cạnh
        }));
  
        // Tìm các cạnh thuộc đường đi ngắn nhất
        const pathEdges = [];
        for (let i = 1; i <= nodes; i++) {
          if (previous[i] !== null) {
            pathEdges.push({ from: previous[i], to: i });
          }
        }
  
        // Đánh dấu các cạnh thuộc đường đi
        edgesArray.forEach((edge) => {
          if (
            pathEdges.some(
              (e) =>
                (e.from === edge.from && e.to === edge.to) ||
                (e.from === edge.to && e.to === edge.from)
            )
          ) {
            edge.color = { color: "red" }; // Tô đậm bằng màu đỏ
            edge.width = 3; // Tăng độ dày
          }
        });
  
        const container = document.getElementById("mynetwork");
        const data = {
          nodes: new vis.DataSet(nodesArray),
          edges: new vis.DataSet(edgesArray),
        };
        const options = {
          configure: { enabled: false },
          nodes: {
            shape: "dot",
            color: "#bdd482",
            size: 40,
            margin: 10,
            font: {
              color: "#000000",
              size: 40,
              vadjust: -80,
              align: "center",
            },
          },
          edges: {
            smooth: { type: "dynamic", roundness: 0.5 },
            selfReferenceSize: 20,
            length: undefined,
            font: { size: 30, align: "horizontal" },
          },
          interaction: { dragNodes: true, hover: true },
          physics: {
            enabled: true,
            solver: "forceAtlas2Based",
            forceAtlas2Based: {
              springLength: 200,
              springConstant: 0.02,
              centralGravity: 0.005,
              gravitationalConstant: -80,
            },
            stabilization: { iterations: 200 },
            wind: { x: 0, y: 0 },
          },
        };
        network = new vis.Network(container, data, options);
      }
  
      // Gắn sự kiện submit cho form
      const form = document.getElementById("graphForm");
      if (form) {
        form.addEventListener("submit", handleSubmit);
      }
      document
      .getElementById("zoomExtendsButton")
      .addEventListener("click", function () {
        network.fit();
      });


    }, []);






};
