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

      // Sử dụng thuật toán phù hợp dựa trên loại đồ thị
      const mstEdges = directed ? caykhungcohuongnhonhat(nodes, edges, 1) : kruskal(nodes, edges);

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

    function caykhungcohuongnhonhat(nodes, edges, root) {
      // Kiểm tra điều kiện dừng
      if (nodes <= 1 || edges.length === 0) {
        return [];
      }

      // Kiểm tra xem có đủ cạnh để tạo cây khung không
      const reachableNodes = new Set([root]);
      let changed;
      do {
        changed = false;
        edges.forEach(edge => {
          if (reachableNodes.has(edge.from) && !reachableNodes.has(edge.to)) {
            reachableNodes.add(edge.to);
            changed = true;
          }
        });
      } while (changed);

      // Nếu không thể đến được tất cả các đỉnh từ root
      if (reachableNodes.size !== nodes) {
        return [];
      }

      // Khởi tạo mảng để lưu cây khung có hướng nhỏ nhất
      const mstEdges = [];
    
      // Khởi tạo mảng để lưu cạnh vào mỗi đỉnh với trọng số nhỏ nhất
      const minInEdge = new Array(nodes + 1).fill(null);
    
      // Bước 1: Tìm cạnh vào có trọng số nhỏ nhất cho mỗi đỉnh (trừ đỉnh gốc)
      for (const edge of edges) {
        if (edge.to !== root) {
          if (
            minInEdge[edge.to] === null ||
            edge.weight < minInEdge[edge.to].weight
          ) {
            minInEdge[edge.to] = edge;
          }
        }
      }
    
      // Bước 2: Kiểm tra xem có chu trình trong đồ thị hay không
      const visited = new Array(nodes + 1).fill(false);
      const inCycle = new Array(nodes + 1).fill(false);
      let hasCycle = false;
    
      for (let i = 1; i <= nodes; i++) {
        if (!visited[i] && i !== root) {
          let current = i;
          const path = [];
    
          // Duyệt theo cạnh vào nhỏ nhất để tìm chu trình
          while (current !== root && !visited[current]) {
            visited[current] = true;
            path.push(current);
            if (minInEdge[current] === null) {
              break; // Không có cạnh vào, không tạo thành chu trình
            }
            current = minInEdge[current].from;
          }
    
          if (current !== root && visited[current]) {
            // Tìm thấy chu trình
            hasCycle = true;
            const cycleStartIndex = path.indexOf(current);
            const cycle = path.slice(cycleStartIndex);
            cycle.forEach((node) => (inCycle[node] = true));
          }
        }
      }
    
      // Bước 3: Nếu không có chu trình, thêm tất cả cạnh vào cây khung
      if (!hasCycle) {
        for (let i = 1; i <= nodes; i++) {
          if (i !== root && minInEdge[i] !== null) {
            mstEdges.push(minInEdge[i]);
          }
        }
        return mstEdges;
      }
    
      // Bước 4: Nếu có chu trình, co chu trình thành một đỉnh ảo và tiếp tục
      const cycleNodes = [];
      for (let i = 1; i <= nodes; i++) {
        if (inCycle[i]) {
          cycleNodes.push(i);
        }
      }
    
      // Tạo đồ thị mới với chu trình được co lại thành một đỉnh ảo
      const newNodes = nodes - cycleNodes.length + 1;
      const newEdges = [];
      const cycleId = newNodes; // ID của đỉnh ảo
    
      // Thêm các cạnh không thuộc chu trình vào đồ thị mới
      for (const edge of edges) {
        if (!inCycle[edge.from] && !inCycle[edge.to]) {
          newEdges.push({...edge});
        } else if (inCycle[edge.from] && !inCycle[edge.to]) {
          newEdges.push({ from: cycleId, to: edge.to, weight: edge.weight });
        } else if (!inCycle[edge.from] && inCycle[edge.to]) {
          const minEdgeInCycle = minInEdge[edge.to];
          if (minEdgeInCycle) {
            newEdges.push({
              from: edge.from,
              to: cycleId,
              weight: edge.weight - minEdgeInCycle.weight,
            });
          }
        }
      }

      // Kiểm tra xem đồ thị mới có hợp lệ không
      if (newEdges.length === 0 || newNodes <= 1) {
        return [];
      }
    
      // Gọi đệ quy để tìm cây khung có hướng nhỏ nhất trên đồ thị mới
      const newMstEdges = caykhungcohuongnhonhat(newNodes, newEdges, root === cycleId ? root : (root > cycleId ? root - cycleNodes.length + 1 : root));
      
      // Nếu không tìm được cây khung trên đồ thị mới
      if (newMstEdges.length === 0) {
        return [];
      }
    
      // Khôi phục chu trình từ đỉnh ảo
      for (const edge of newMstEdges) {
        if (edge.from === cycleId) {
          // Tìm cạnh thích hợp từ chu trình
          const bestEdge = edges.find(e => 
            inCycle[e.from] && e.to === edge.to && 
            (!minInEdge[e.to] || e.weight <= minInEdge[e.to].weight)
          );
          if (bestEdge) mstEdges.push(bestEdge);
        } else if (edge.to === cycleId) {
          // Tìm cạnh thích hợp vào chu trình
          const cycleNode = cycleNodes.find(node => 
            minInEdge[node] && minInEdge[node].from === edge.from
          );
          if (cycleNode && minInEdge[cycleNode]) {
            mstEdges.push(minInEdge[cycleNode]);
          }
        } else {
          mstEdges.push(edge);
        }
      }

      // Thêm các cạnh trong chu trình
      cycleNodes.forEach(node => {
        if (minInEdge[node] && inCycle[minInEdge[node].from]) {
          mstEdges.push(minInEdge[node]);
        }
      });
    
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
              (e.from === edge.from && e.to === edge.to)
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
