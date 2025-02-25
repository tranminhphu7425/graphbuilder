import vis from "../tool/vis-network-wrapper.js";
import { useEffect } from "react";

export const TimluongcucdaiEffect = () => {
  useEffect(() => {
    let network = null;

    // Hàm xử lý sự kiện khi người dùng nhấn nút "Chạy Thuật Toán"
    function handleSubmit(event) {
      event.preventDefault();
      const nodes = parseInt(document.getElementById("nodes").value);
      const edgesText = document.getElementById("edges").value;
      const source = 1;
      const sink = nodes;

      const edges = edgesText
        .split("\n")
        .map((edge) => {
          const parts = edge.trim().split(" ").map(Number);
          if (parts.length === 3) {
            return { from: parts[0], to: parts[1], capacity: parts[2] };
          } else {
            return null; // Bỏ qua dòng không hợp lệ
          }
        })
        .filter((edge) => edge !== null);

      const { maxFlow, residualGraph } = fordFulkerson(
        nodes,
        edges,
        source,
        sink
      );

      // Hiển thị kết quả trên giao diện
      displayResults(maxFlow);

      drawGraph(nodes, edges, residualGraph, source, sink);
    }

    // Hàm hiển thị kết quả lên bảng trong giao diện
    function displayResults(maxFlow) {
      const resultDiv = document.getElementById("result");
      const resultText = document.getElementById("resultText");
      resultText.textContent = `Luồng cực đại: ${maxFlow}`;
      resultDiv.style.display = "block";
    }

    function createResidualGraph(nodes, edges) {
      const residualGraph = Array.from({ length: nodes + 1 }, () =>
        Array(nodes + 1).fill(0)
      );

      edges.forEach(({ from, to, capacity }) => {
        residualGraph[from][to] = capacity;
      });

      return residualGraph;
    }

    function bfs(residualGraph, source, sink, parent) {
      const visited = new Array(residualGraph.length).fill(false);
      const queue = [];
      queue.push(source);
      visited[source] = true;
      parent[source] = -1;

      while (queue.length > 0) {
        const u = queue.shift();

        for (let v = 1; v < residualGraph.length; v++) {
          if (!visited[v] && residualGraph[u][v] > 0) {
            queue.push(v);
            parent[v] = u;
            visited[v] = true;
            if (v === sink) {
              return true;
            }
          }
        }
      }

      return false;
    }

    function fordFulkerson(nodes, edges, source, sink) {
      let residualGraph = createResidualGraph(nodes, edges);
      const parent = new Array(nodes + 1).fill(-1);
      let maxFlow = 0;

      while (bfs(residualGraph, source, sink, parent)) {
        let pathFlow = Infinity;
        for (let v = sink; v !== source; v = parent[v]) {
          const u = parent[v];
          pathFlow = Math.min(pathFlow, residualGraph[u][v]);
        }

        for (let v = sink; v !== source; v = parent[v]) {
          const u = parent[v];
          residualGraph[u][v] -= pathFlow;
          residualGraph[v][u] += pathFlow;
        }

        maxFlow += pathFlow;
      }

      return { maxFlow, residualGraph };
    }

    // Hàm vẽ đồ thị với các cạnh thuộc lát cắt hẹp nhất được đánh dấu
    function drawGraph(nodes, edges, residualGraph, source) {
      const nodesArray = Array.from({ length: nodes }, (_, i) => ({
        id: i + 1,
        label: `${i + 1}`,
        color: { background: "gray" }, // Màu mặc định
      }));

      const edgesArray = edges.map((edge) => {
        const { from, to, capacity } = edge;
        const flow = capacity - residualGraph[from][to]; // Tính giá trị flow
        return {
          from: from,
          to: to,
          label: `${flow} / ${capacity}`, // Hiển thị flow và capacity
          arrows: "to",
          color: { color: "black" },
          width: 1, // Độ dày mặc định của cạnh
        };
      });

      // Tìm các nút thuộc lát cắt hẹp nhất
      const visited = new Array(nodes + 1).fill(false);
      const queue = [];
      queue.push(source);
      visited[source] = true;

      while (queue.length > 0) {
        const u = queue.shift();
        for (let v = 1; v <= nodes; v++) {
          if (!visited[v] && residualGraph[u][v] > 0) {
            visited[v] = true;
            queue.push(v);
          }
        }
      }

      // Đổi màu của các nút
      nodesArray.forEach((node) => {
        if (!visited[node.id]) {
          node.color = { background: "red" }; // Nút thuộc lát cắt hẹp nhất
        } else {
          node.color = { background: "green" }; // Nút còn lại
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