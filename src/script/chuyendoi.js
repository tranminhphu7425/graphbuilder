// Hàm chuyển đổi từ danh sách cung sang ma trận kề
export const convertEdgeListToAdjMatrix = (edgeList, isDirected) => {
  const [numVertices, numEdges] = edgeList[0];
  const adjMatrix = Array.from({ length: numVertices }, () =>
    Array(numVertices).fill(0)
  );

  for (let i = 1; i <= numEdges; i++) {
    const [u, v] = edgeList[i];
    adjMatrix[u - 1][v - 1]++;
    if(u == v) continue;
    if (!isDirected) {
      adjMatrix[v - 1][u - 1]++;
    }
  }

  // Trả về một đối tượng chứa số đỉnh và ma trận kề
  return {
    numVertices: numVertices,
    adjMatrix: adjMatrix,
  };
};

// Hàm chuyển đổi từ danh sách cung sang danh sách đỉnh kề
export const convertEdgeListToAdjList = (edgeList, isDirected) => {
  const [numVertices, numEdges] = edgeList[0];
  const adjList = Array.from({ length: numVertices }, () => []);

  for (let i = 1; i <= numEdges; i++) {
    const [u, v] = edgeList[i];
    adjList[u - 1].push(v);
    if (!isDirected && u !== v) {
      adjList[v - 1].push(u);
    }
  }

  const result = adjList.map((neighbors) => [...neighbors, 0]);
  return result.map((row) => row.join(" "));
};

// Hàm chuyển đổi từ ma trận kề sang danh sách cung
export const convertAdjMatrixToEdgeList = (adjMatrix, isDirected) => {
  const numVertices = adjMatrix.length;
  const edgeList = [];
  let numEdges = 0;

  for (let i = 0; i < numVertices; i++) {
    for (let j = isDirected ? 0 : i; j < numVertices; j++) {
      if (adjMatrix[i][j] > 0) {
        for (let k = 0; k < adjMatrix[i][j]; k++) {
          edgeList.push([i + 1, j + 1]);
          numEdges++;
        }
      }
    }
  }

  const result = [[numVertices, numEdges], ...edgeList];
  return result.map((row) => row.join(" "));
};

// Hàm chuyển đổi từ ma trận kề sang danh sách đỉnh kề
export const convertAdjMatrixToAdjList = (adjMatrix) => {
  const numVertices = adjMatrix.length;
  const adjList = Array.from({ length: numVertices }, () => []);

  for (let i = 0; i < numVertices; i++) {
    for (let j =  0; j < numVertices; j++) {
      if (adjMatrix[i][j] > 0) {
        for (let k = 0; k < adjMatrix[i][j]; k++) {
          adjList[i].push(j + 1);
        }
      }
    }
  }

  const result = adjList.map((neighbors) => [...neighbors, 0]);
  return result.map((row) => row.join(" "));
};

// Danh sách các tùy chọn đầu ra
export const outputOptions = (inputType) =>
  [
    { value: "danhsachcung", label: "Danh sách cung", },
    { value: "matranke", label: "Ma trận kề" },
    { value: "danhsachdinhke", label: "Danh sách đỉnh kề" },
  ].filter((option) => option.value !== inputType); // Lọc bỏ giá trị đầu vào
