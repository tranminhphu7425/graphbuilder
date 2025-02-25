import vis from "../tool/vis-network-wrapper";
import { useEffect } from "react";

export const CaykhungnhonhatEffect = () => {
  useEffect(() => {
    let network = null;

    // Hàm xử lý sự kiện khi người dùng nhấn nút "Chạy Thuật Toán"
    function handleSubmit(event) {
      event.preventDefault();
      const nodes = parseInt(document.getElementById("nodes").value);
      const edgesText = document.getElementById("edges").value;
      const directed = document.getElementById("directed").checked;

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

      const mstEdges = kruskal(nodes, edges);

      // Hiển thị kết quả trên giao diện
      displayResults(mstEdges);

      drawGraph(nodes, edges, directed, mstEdges);
    }

    // Hàm hiển thị kết quả lên bảng trong giao diện
    function displayResults(mstEdges) {
      const resultDiv = document.getElementById("result");
      const tbody = document.querySelector("#resultTable tbody");
      tbody.innerHTML = ""; // Xóa dữ liệu cũ trước khi thêm mới
      var sumWeight = 0;
      mstEdges.forEach((edge, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${edge.from}</td>
            <td>${edge.to}</td>
            <td>${edge.weight}</td>
          `;
        tbody.appendChild(row);
        sumWeight += edge.weight;
      });

      // Hiển thị bảng khi có kết quả
      resultDiv.style.display = "block";

      // Tạo phần hiển thị tổng trọng lượng bên ngoài bảng
      let sumWeightDiv = document.getElementById("sumWeight");
      if (!sumWeightDiv) {
        sumWeightDiv = document.createElement("div");
        sumWeightDiv.id = "sumWeight";
        resultDiv.appendChild(sumWeightDiv);
      }
      sumWeightDiv.innerHTML = `<div style="margin-top: 10px"><b>Tổng trọng lượng cây khung là: ${sumWeight}</b></div>`;
    }

    function kruskal(nodes, edges) {
      // Sắp xếp các cạnh theo trọng số tăng dần
      edges.sort((a, b) => a.weight - b.weight);

      const parent = new Array(nodes + 1).fill(-1);

      function find(u) {
        if (parent[u] === -1) return u;
        return find(parent[u]);
      }

      function union(u, v) {
        const uRoot = find(u);
        const vRoot = find(v);
        if (uRoot !== vRoot) {
          parent[vRoot] = uRoot;
          return true;
        }
        return false;
      }

      const mstEdges = [];
      for (const edge of edges) {
        if (union(edge.from, edge.to)) {
          mstEdges.push(edge);
        }
      }

      return mstEdges;
    }

    // Hàm vẽ đồ thị với các cạnh thuộc cây khung nhỏ nhất được đánh dấu
    function drawGraph(nodes, edges, directed, mstEdges) {
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

      // Đánh dấu các cạnh thuộc cây khung nhỏ nhất
      edgesArray.forEach((edge) => {
        if (
          mstEdges.some(
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
