// useVedothiEffect.js
import vis from "../tool/vis-network-wrapper.js";
import { useEffect } from "react";

export const VedothiEffect = (isWeightedGraph, isDirected, isPhysics) => {
  useEffect(() => {
    // Tạo dữ liệu cho các nodes và edges
    const nodesDataSet = new vis.DataSet([]);
    const edgesDataSet = new vis.DataSet([]);
    const directedCheckbox = document.getElementById("directed");
    // Lắng nghe sự kiện thay đổi trên checkbox để bật/tắt trọng số
    const isWeightedGraph = document.getElementById("isWeightedGraph");
    const physics = document.getElementById("physics");
    let isPhysics = physics ? physics.checked : 1; // Giá trị mặc định là 1 nếu không tìm thấy phần tử
    let physicsOption = isPhysics ? true : false;

    // Đối tượng để đếm số lượng self-loops cho mỗi nút
    const selfLoopCounts = {};

    // Lấy container và cấu hình options
    const container = document.getElementById("mynetwork");
    const data = { nodes: nodesDataSet, edges: edgesDataSet };
    const options = {
      configure: { enabled: false },
      nodes: {
        shape: "dot",
        color: "#bdd482",
        size: 40,
        margin: 10,
        font: { color: "#000000", size: 40, vadjust: -80, align: "center" },
      },
      edges: {
        smooth: isPhysics
          ? { type: "dynamic", roundness: 0.5 }
          : { type: "horizontal", roundness: 0 },
        selfReferenceSize: 20,
      },
      interaction: { dragNodes: true, hover: true },
      physics: {
        enabled: physicsOption,
        solver: "forceAtlas2Based",
        forceAtlas2Based: {
          springLength: 200,
          springConstant: 0.02,
          centralGravity: 0.005,
          gravitationalConstant: -80,
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

    // Khởi tạo mạng
    const network = new vis.Network(container, data, options);

    let count = 0;
    nodesDataSet.on("*", function () {
      if (count === 0) {
        network.fit();
        network.moveTo({
          scale: 0.7,
        });
        count = 1;
      }
    });
    edgesDataSet.on("*", function () {
      if (count === 0) {
        network.fit();
        network.moveTo({
          scale: 0.7,
        });
        count = 1;
      }
    });

    // Xử lý sự kiện double-click để thêm nút mới
    let lastNodeId = 0; // ID của node cuối cùng
    let actionHistory = []; // Lưu trữ lịch sử hành động

    network.on("doubleClick", function (params) {
      if (!params.nodes.length) {
        // Nếu không nhấp vào node hiện tại
        lastNodeId++;
        const pointer = params.pointer;
        const canvasPosition = pointer.canvas;
        const newNode = { 
          id: lastNodeId, 
          label: `${lastNodeId}`,
          x: canvasPosition.x,
          y: canvasPosition.y
        };
        nodesDataSet.add(newNode);
        actionHistory.push({ type: "addNode", data: newNode });
      }
    });

    // Tạo cung nối giữa hai nút khi giữ Shift và chọn lần lượt
    let selectedNodes = [];
  
    network.on("click", function (params) {
      if (params.nodes.length && params.event.srcEvent.shiftKey) {
        selectedNodes.push(params.nodes[0]);
        if (selectedNodes.length === 2) {
          const fromId = selectedNodes[0];
          const toId = selectedNodes[1];
          const isSelfLoop = fromId === toId;

          // Xử lý self-loops
          if (isSelfLoop) {
            selfLoopCounts[fromId] = (selfLoopCounts[fromId] || 0) + 1;

            // Cập nhật kích thước nút nếu có nhiều self-loops
            const loopCount = selfLoopCounts[fromId];
            if (loopCount >= 6) {
              const newSize = 35 + (loopCount - 5) * 5; // Tăng kích thước cho mỗi self-loop trên 5
              const newFontSize = 40 + (loopCount - 5) * 5; // Tăng kích thước font
              const newVadjust = -80 - (loopCount - 5) * 10; // Điều chỉnh vị trí font
              nodesDataSet.update({
                id: fromId,
                size: newSize,
                font: { size: newFontSize, vadjust: newVadjust },
              });
            }
          }

          // Xử lý hướng cong và độ tròn ngẫu nhiên cho self-loops
          const randomDirection =
            Math.random() > 0.5 ? "curvedCCW" : "curvedCW";
          const randomRoundness = Math.random() * 0.5 + 0.2; // Độ tròn ngẫu nhiên

          const newEdge = {
            from: fromId,
            to: toId,
            arrows: directedCheckbox.checked ? "to" : "",
            smooth: isSelfLoop
              ? { type: randomDirection, roundness: randomRoundness }
              : true,
            selfReferenceSize: isSelfLoop
              ? 20 + (selfLoopCounts[fromId] - 1) * 10
              : undefined,
          };

          edgesDataSet.add(newEdge);
          nodesDataSet.update({ id: fromId, fixed: false });
          nodesDataSet.update({ id: toId, fixed: false });
          actionHistory.push({ type: "addEdge", data: newEdge });
          selectedNodes = []; // Reset sau khi thêm cung
        }
      } else {
        selectedNodes = []; // Reset nếu không giữ Shift
      }
    });

    // Thêm sự kiện click vào cạnh để nhập trọng số
    network.on("click", function (params) {
      if (
        params.edges.length > 0 &&
        !window.event.shiftKey &&
        isWeightedGraph.checked == true
      ) {
        const edgeId = params.edges[0]; // Lấy ID của cạnh được nhấn
        const currentEdge = edgesDataSet.get(edgeId); // Lấy thông tin cạnh
        const currentWeight = currentEdge.label || ""; // Lấy trọng số hiện tại (nếu có)

        // Hiển thị hộp thoại nhập trọng số
        const newWeight = prompt("Nhập trọng số cho cung:", currentWeight);

        if (newWeight !== null) {
          // Cập nhật trọng số vào cạnh
          edgesDataSet.update({
            id: edgeId,
            label: newWeight,
            font: { size: 30, align: "horizontal" },
          });
        }
      }
    });

    // Cập nhật lại edges dựa trên cấu hình (hướng + trọng số)
    function updateEdges(directed, weighted) {
      edgesDataSet.forEach((edge) => {
       
    
        edgesDataSet.update({
          id: edge.id,
          arrows: directed ? "to" : "",
          label: weighted ? edge.label || "" : "", // Ẩn/hiện trọng số
          font: weighted ? { size: 30, align: "horizontal" } : {},
        });
      });
    }
    

    // Sự kiện thay đổi checkbox hướng đồ thị
    directedCheckbox.addEventListener("change", function () {
      updateEdges(directedCheckbox.checked, isWeightedGraph.checked);
    });

    // Sự kiện thay đổi checkbox trọng số
    isWeightedGraph.addEventListener("change", function () {
      updateEdges(directedCheckbox.checked, isWeightedGraph.checked);
    });

    // Sự kiện thay đổi checkbox physics
    physics.addEventListener("change", function () {
      isPhysics = physics.checked;
      physicsOption = isPhysics ? true : false;

      // Cập nhật tùy chọn physics và edges.smooth
      network.setOptions({
        physics: {
          enabled: physicsOption,
          solver: "forceAtlas2Based",
          forceAtlas2Based: {
            springLength: 200,
            springConstant: 0.02,
            centralGravity: 0.005,
            gravitationalConstant: -80,
          },
          stabilization: {
            iterations: 200,
          },
          wind: {
            x: 0,
            y: 0,
          },
        },
        edges: {
          smooth: isPhysics
            ? { type: "dynamic", roundness: 0.5 }
            : { type: "horizontal", roundness: 0 },
        },
      });
    });

    // Xử lý Ctrl+Z để quay lại bước trước đó
    document.addEventListener("keydown", function (event) {
      if (event.ctrlKey && event.key === "z") {
        const lastAction = actionHistory.pop();
        if (lastAction) {
          if (lastAction.type === "addNode") {
            nodesDataSet.remove(lastAction.data.id);
            // Xóa các dây cung liên quan đến nút bị xóa
            edgesDataSet.forEach((edge) => {
              if (
                edge.from === lastAction.data.id ||
                edge.to === lastAction.data.id
              ) {
                edgesDataSet.remove(edge.id);
              }
            });
            lastNodeId--;
          } else if (lastAction.type === "addEdge") {
            const edge = lastAction.data;
            edgesDataSet.remove({ id: edge.id });

            // Kiểm tra nếu cạnh vừa xóa là self-loop
            if (edge.from === edge.to) {
              const fromId = edge.from;
              if (selfLoopCounts[fromId]) {
                selfLoopCounts[fromId]--;

                // Nếu số self-loops nhỏ hơn 6, giảm kích thước node về mặc định
                if (selfLoopCounts[fromId] < 6) {
                  nodesDataSet.update({
                    id: fromId,
                    size: 40,
                    font: { size: 40, vadjust: -80 },
                  });
                } else {
                  // Giảm kích thước nút theo công thức
                  const newSize = 35 + (selfLoopCounts[fromId] - 5) * 5;
                  const newFontSize = 40 + (selfLoopCounts[fromId] - 5) * 5;
                  const newVadjust = -80 - (selfLoopCounts[fromId] - 5) * 10;
                  nodesDataSet.update({
                    id: fromId,
                    size: newSize,
                    font: { size: newFontSize, vadjust: newVadjust },
                  });
                }
              }
            }
          }
        }
      }
    });

    // Thay đổi con trỏ khi nhấn giữ Shift
    document.addEventListener("keydown", function (event) {
      if (event.key === "Shift") {
        container.classList.add("shift-cursor");
      }
    });

    document.addEventListener("keyup", function (event) {
      if (event.key === "Shift") {
        container.classList.remove("shift-cursor");
      }
    });
    document
      .getElementById("zoomExtendsButton")
      .addEventListener("click", function () {
        network.fit();
      });
  }, [isWeightedGraph, isDirected, isPhysics]);
};
