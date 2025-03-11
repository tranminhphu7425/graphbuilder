import vis from "../tool/vis-network-wrapper.js";


export const NhapdothiEffect = (
  
) => {
 
    let network = null;
    let nodesDataSet = new vis.DataSet();
    let edgesDataSet = new vis.DataSet();
    function updateGraph() {
      // Get input values
      const nodesInput = document.getElementById("nodes").value;
      const edgesInput = document.getElementById("edges").value;
      const directedElement = document.getElementById("directed");
      const directed = directedElement ? directedElement.checked : 1; // Giá trị mặc định là 1 nếu không tìm thấy phần tử
      const weightGraph = document.getElementById("isWeightedGraph");
      const isWeighted = weightGraph ? weightGraph.checked : 0; // Giá trị mặc định là 0 nếu không tìm thấy phần tử
      const physics = document.getElementById("physics");
      const isPhysics = physics ? physics.checked : 1; // Giá trị mặc định là 1 nếu không tìm thấy phần tử
      let physicsOption = isPhysics ? true : false;

      // Parse nodes and edges
      const nodeCount = parseInt(nodesInput) || 0;
      const edgesArray = edgesInput ? edgesInput.split("\n") : [];

      // Update nodes
      const currentNodes = nodesDataSet.getIds();
      for (let i = 1; i <= nodeCount; i++) {
        if (!currentNodes.includes(i)) {
          nodesDataSet.add({
            id: i,
            label: i.toString(),
            size: 40,
            font: { size: 40, vadjust: -80 },
          });
        }
      }

      // Update edges
      edgesDataSet.clear();

      // Track self-loop counts
      const selfLoopCounts = {};
      edgesArray.forEach((edge) => {
        const parts = edge.split(" ");
        const fromId = parseInt(parts[0]);
        const toId = parseInt(parts[1]);
        const weight = isWeighted && parts.length === 3 ? parts[2] : null; // Trọng số nếu có

        if (!isNaN(fromId) && !isNaN(toId)) {
          // Check if the edge is a self-loop
          const isSelfLoop = fromId === toId;
          if (isSelfLoop) {
            // Increment self-loop count for this node
            selfLoopCounts[fromId] = (selfLoopCounts[fromId] || 0) + 1;

            // Update node size and font if self-loops exceed threshold
            const loopCount = selfLoopCounts[fromId];
            if (loopCount >= 6 && fromId <= nodeCount) {
              const newSize = 35 + (loopCount - 5) * 5; // Increase size for each loop above 5
              const newFontSize = 40 + (loopCount - 5) * 5; // Increase font size
              const newVadjust = -80 - (loopCount - 5) * 10; // Adjust font vertical alignment
              nodesDataSet.update({
                id: fromId,
                size: newSize,
                font: { size: newFontSize, vadjust: newVadjust },
              });
            }
          }

          // Handle random properties for self-loops
          const randomDirection =
            Math.random() > 0.5 ? "curvedCCW" : "curvedCW";
          const randomRoundness = Math.random() * 0.5 + 0.2; // Random roundness

          const edgeData = {
            from: fromId,
            to: toId,
            arrows: directed ? "to" : "",
            smooth: isSelfLoop
              ? { type: randomDirection, roundness: randomRoundness }
              : true,
            selfReferenceSize: isSelfLoop
              ? 20 + (selfLoopCounts[fromId] - 1) * 10
              : undefined,
          };

          if (isWeighted && weight !== null) {
            edgeData.label = weight.toString(); // Hiển thị trọng số trên cạnh
            edgeData.font = { size: 30, align: "horizontal" };
            edgeData.color = { color: "#373b37" };
          }

          edgesDataSet.add(edgeData);
        }
      });

      currentNodes.forEach((nodeId) => {
        if (nodeId > nodeCount) {
          try {
            nodesDataSet.remove({ id: nodeId });
          } catch (error) {
            console.error(`Error removing node ${nodeId}:`, error);
          }
        }
      });

     
      // Initialize network if not already done
      if (!network) {
        const container = document.getElementById("mynetwork");
        const data = { nodes: nodesDataSet, edges: edgesDataSet };
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
            smooth: isPhysics
              ? { type: "dynamic", roundness: 0.5 }
              : { type: "horizontal", roundness: 0 }, // Thay đổi dựa trên isPhysics
            selfReferenceSize: 20,
            length: undefined,
            font: { size: 30, align: "horizontal" },
          },
          interaction: { dragNodes: true, hover: true },
          physics: {
            enabled: physicsOption,
            solver: "forceAtlas2Based",
            forceAtlas2Based: {
              springLength: 150,
              springConstant: 0.02,
              centralGravity: 0.005,
              gravitationalConstant: -80,
            },
            stabilization: { iterations: 200 },
            wind: { x: 0, y: 0 },
          },
        };
        network = new vis.Network(container, data, options);

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
      } else {
        // Update physics and edges options if network already exists
        network.setOptions({
          edges: {
            smooth: isPhysics
              ? { type: "dynamic", roundness: 0.5 }
              : { type: "horizontal", roundness: 0 }, // Thay đổi dựa trên isPhysics
          },
          physics: {
            enabled: physicsOption,
            solver: "forceAtlas2Based",
            forceAtlas2Based: {
              springLength: 150,
              springConstant: 0.02,
              centralGravity: 0.005,
              gravitationalConstant: -80,
            },
            stabilization: { iterations: 200 },
            wind: { x: 0, y: 0 },
          },
        });
       
      }
    }

    // Initialize with empty graph
    updateGraph();

    document
      .getElementById("zoomExtendsButton")
      .addEventListener("click", function () {
        network.fit();
      });
    // Attach event listeners
    const nodesInput = document.getElementById("nodes");
    const edgesInput = document.getElementById("edges");
    const isWeightedGraph = document.getElementById("isWeightedGraph");
    const directed = document.getElementById("directed");
    const physics = document.getElementById("physics");

    if (nodesInput) nodesInput.addEventListener("input", updateGraph);
    if (edgesInput) edgesInput.addEventListener("input", updateGraph);
    if (isWeightedGraph)
      isWeightedGraph.addEventListener("change", updateGraph);
    if (directed) directed.addEventListener("change", updateGraph);
    if (physics) physics.addEventListener("change", updateGraph);

    // Cleanup event listeners on unmount
    return () => {
      if (nodesInput) nodesInput.removeEventListener("input", updateGraph);
      if (edgesInput) edgesInput.removeEventListener("input", updateGraph);
      if (isWeightedGraph)
        isWeightedGraph.removeEventListener("change", updateGraph);
      if (directed) directed.removeEventListener("change", updateGraph);
      if (physics) physics.removeEventListener("change", updateGraph);
    };
};
