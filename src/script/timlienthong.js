import vis from "../tool/vis-network-wrapper.js";
import { useEffect } from "react";

export const TimlienthongEffect = () => {
  useEffect(() => {
    let network = null;

    document
      .getElementById("graphForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        const nodesInput = document.getElementById("nodes").value;
        const edgesInput = document.getElementById("edges").value.trim();
        const nodeCount = parseInt(nodesInput) || 0;
        const edgesArray = edgesInput ? edgesInput.split("\n") : [];

        let nodesDataSet = new vis.DataSet();
        let edgesDataSet = new vis.DataSet();

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

        const selfLoopCounts = {};
        edgesArray.forEach((edge) => {
          const parts = edge.split(" ");
          const fromId = parseInt(parts[0]);
          const toId = parseInt(parts[1]);
          const weight = parts.length === 3 ? parts[2] : null; // Trọng số nếu có

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
            const randomDirection = Math.random() > 0.5 ? "curvedCCW" : "curvedCW";
            const randomRoundness = Math.random() * 0.5 + 0.2; // Random roundness

            const edgeData = {
              from: fromId,
              to: toId,
              arrows: "to",
              smooth: isSelfLoop
                ? { type: randomDirection, roundness: randomRoundness }
                : true,
              selfReferenceSize: isSelfLoop
                ? 20 + (selfLoopCounts[fromId] - 1) * 10
                : undefined,
            };

            if (weight !== null) {
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

        class Graph {
          constructor(vertices) {
            this.V = vertices + 1;
            this.adj = new Map();
            for (let i = 1; i <= vertices; i++) {
              // Bắt đầu từ 1
              this.adj.set(i, []);
            }
          }

          addEdge(v, w) {
            this.adj.get(v).push(w);
          }

          tarjan() {
            const index = new Array(this.V).fill(-1);
            const lowlink = new Array(this.V).fill(-1);
            const onStack = new Array(this.V).fill(false);
            const stack = [];
            const result = [];
            let currentIndex = 0;

            const strongconnect = (v) => {
              index[v] = currentIndex;
              lowlink[v] = currentIndex;
              currentIndex++;
              stack.push(v);
              onStack[v] = true;

              for (const w of this.adj.get(v)) {
                if (index[w] === -1) {
                  strongconnect(w);
                  lowlink[v] = Math.min(lowlink[v], lowlink[w]);
                } else if (onStack[w]) {
                  lowlink[v] = Math.min(lowlink[v], index[w]);
                }
              }

              if (lowlink[v] === index[v]) {
                const component = [];
                let w;
                do {
                  w = stack.pop();
                  onStack[w] = false;
                  component.push(w);
                } while (w !== v);
                result.push(component);
              }
            };

            for (let v = 1; v < this.V; v++) {
              // Bắt đầu từ 1
              if (index[v] === -1) {
                strongconnect(v);
              }
            }

            return result;
          }
        }

        function drawSCCGraph(scc, edgesDataSet, directed = true) {
          const sccNodes = new vis.DataSet();
          const sccEdges = new vis.DataSet();
          const selfLoopCounts = {}; // Track self-loop counts

          const colors = ["#ffa500", "#ff7f50", "#6495ed", "#ff69b4", "#bdd482"];

          scc.forEach((component, index) => {
            component.forEach((node) => {
              sccNodes.add({
                id: node,
                label: node.toString(),
                color: colors[(index - 1) % colors.length],
                size: 40, // Default size
                font: { color: "#000000", size: 40, vadjust: -80 },
              });
            });

            // Add edges for the current component
            component.forEach((node) => {
              edgesDataSet.forEach((edge) => {
                if (edge.from === node && component.includes(edge.to)) {
                  const isSelfLoop = edge.from === edge.to;

                  if (isSelfLoop) {
                    // Increment self-loop count for this node
                    selfLoopCounts[node] = (selfLoopCounts[node] || 0) + 1;

                    // Adjust node properties based on self-loop count
                    const loopCount = selfLoopCounts[node];
                    if (loopCount >= 6) {
                      const newSize = 40 + (loopCount - 5) * 5; // Increment size
                      const newFontSize = 40 + (loopCount - 5) * 5; // Increment font size
                      const newVadjust = -80 - (loopCount - 5) * 10; // Adjust vadjust
                      sccNodes.update({
                        id: node,
                        size: newSize,
                        font: { size: newFontSize, vadjust: newVadjust },
                      });
                    }

                    // Randomize edge appearance for self-loops
                    const randomDirection =
                      Math.random() > 0.5 ? "curvedCCW" : "curvedCW";
                    const randomRoundness = Math.random() * 0.5 + 0.2; // Random roundness

                    sccEdges.add({
                      from: edge.from,
                      to: edge.to,
                      arrows: directed ? "to" : "",
                      smooth: {
                        type: randomDirection,
                        roundness: randomRoundness,
                      },
                      selfReferenceSize: 20 + (selfLoopCounts[node] - 1) * 10,
                    });
                  } else {
                    // Add non-self-loop edges
                    sccEdges.add(edge);
                  }
                }
              });
            });
          });

          const container = document.getElementById("mynetwork");
          const data = { nodes: sccNodes, edges: sccEdges };
          const options = {
            configure: { enabled: false },
            nodes: {
              shape: "dot",
              color: "#bdd482",
              margin: 10,
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
                springLength: 150,
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

          network = new vis.Network(container, data, options);
        }

        const g = new Graph(nodeCount);

        edgesArray.forEach((edge) => {
          const [v, w] = edge.split(" ").map(Number);
          g.addEdge(v, w);
        });

        const sccs = g.tarjan();
        drawSCCGraph(sccs, edgesDataSet);
      });

    document
      .getElementById("zoomExtendsButton")
      .addEventListener("click", function () {
        network.fit();
      });

  }, []);
};