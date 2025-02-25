import vis from "../tool/vis-network-wrapper.js";
import { useEffect } from "react";


export const XephangdothiEffect = () => { 

    useEffect(() => {
        let network = null;

        document
      .getElementById("graphForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        
        let numNodes = parseInt(document.getElementById("nodes").value);
        let edgesInput = document.getElementById("edges").value.trim();
        let isDirected = true;

        let edges = edgesInput
          .split("\n")
          .map((line) => line.trim().split(" ").map(Number));
        let graph = buildGraph(edges, isDirected, numNodes);
        let result = traverseGraph(graph, numNodes); // Sử dụng thuật toán xếp hạng
        displayResult(result);
        drawGraph(result, edges);
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

    function traverseGraph(graph, numNodes) {
      let d = new Array(numNodes + 1).fill(0); // Mảng lưu bậc vào của các đỉnh
      let r = new Array(numNodes + 1).fill(0); // Mảng lưu hạng của các đỉnh

      // Tính bậc vào của các đỉnh
      for (let u = 1; u <= numNodes; u++) {
        for (let v of graph[u]) {
          d[v]++;
        }
      }

      let L1 = []; // Danh sách L1 (các đỉnh có bậc vào bằng 0)
      let L2 = []; // Danh sách L2 (các đỉnh được thêm vào trong từng bước)

      // Thêm các đỉnh có bậc vào bằng 0 vào L1
      for (let u = 1; u <= numNodes; u++) {
        if (d[u] === 0) {
          L1.push(u);
        }
      }

      let k = 0; // Biến đếm hạng
      while (L1.length > 0) {
        L2 = []; // Reset L2

        // Duyệt qua các đỉnh trong L1
        for (let u of L1) {
          r[u] = k; // Gán hạng cho đỉnh u
          // Duyệt qua các đỉnh kề của u
          for (let v of graph[u]) {
            d[v]--; // Giảm bậc vào của đỉnh kề
            if (d[v] === 0) {
              L2.push(v); // Thêm đỉnh kề vào L2 nếu bậc vào bằng 0
            }
          }
        }

        // Cập nhật L1 = L2 để tiếp tục duyệt
        L1 = L2;
        k++; // Tăng hạng
      }

      // Trả về kết quả dưới dạng mảng các đối tượng { node, rank }
      let result = [];
      for (let u = 1; u <= numNodes; u++) {
        result.push({ node: u, rank: r[u] });
      }

      return result;
    }

    function displayResult(result) {
      let output = "Đỉnh | Hạng\n";
      output += result.map(({ node, rank }) => `${node} | ${rank}`).join("\n");
      console.log(output);
    }

    function drawGraph(result, edges) {
      const colors = ["#ffa500", "#ff7f50", "#6495ed", "#ff69b4", "#bdd482"];
      let nodes = result.map(({ node, rank }) => {
        return {
          id: node,
          label: `${node} - ${rank}`,
          color: colors[rank % colors.length],
        };
      });

      let visEdges = edges.map(([u, v]) => ({
        from: u,
        to: v,
        arrows: "to", // Nếu đồ thị có hướng, thêm mũi tên
      }));

      let container = document.getElementById("mynetwork");
      if (!container) {
        container = document.createElement("div");
        container.id = "mynetwork";
        container.style.height = "500px";
        document.body.appendChild(container);
      }

      let data = {
        nodes: new vis.DataSet(nodes),
        edges: new vis.DataSet(visEdges),
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
          enabled: false,
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
            direction: "LR",
            sortMethod: "directed",
            shakeTowards: "roots",
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