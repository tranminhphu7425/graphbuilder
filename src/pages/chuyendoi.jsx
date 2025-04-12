import { useEffect, useState } from "react";

import configFullPage from "../tool/configfullpage.js";
import { initFlowbite } from "flowbite";
import Header from "../components/Header.jsx";

import "../style/style.css";

import {
  convertEdgeListToAdjMatrix,
  convertEdgeListToAdjList,
  convertAdjMatrixToEdgeList,
  convertAdjMatrixToAdjList,
  outputOptions,
} from "../script/chuyendoi.js"; // Nhập các hàm từ file bên ngoài

const Chuyendoi = () => {
  useEffect(() => {
    configFullPage();
    initFlowbite();
  }, []);

  var [inputType, setInputType] = useState("danhsachcung");
  var [outputType, setOutputType] = useState("matranke");
  var [isDirected, setDirected] = useState(false);
  const [graphInput, setGraphInput] = useState("");
  const [graphOutput, setGraphOutput] = useState("");

  const filteredOutputOptions = outputOptions(inputType);

  const convert = () => {
    const input = graphInput
      .trim()
      .split("\n")
      .map((line) => line.trim().split(" ").map(Number));
    let output;

    if (inputType === "danhsachcung") {
      if (outputType !== "danhsachdinhke") {
        const result = convertEdgeListToAdjMatrix(input, isDirected);
        // Định dạng kết quả: số đỉnh + ma trận kề
        output = [
          result.numVertices.toString(), // Dòng đầu tiên là số đỉnh
          ...result.adjMatrix.map((row) => row.join(" ")), // Các dòng sau là ma trận kề
        ];
      } else if (outputType === "danhsachdinhke") {
        output = convertEdgeListToAdjList(input, isDirected);
      }
    } else if (inputType === "matranke") {
      input.shift();
      if (outputType !== "danhsachdinhke") {
        output = convertAdjMatrixToEdgeList(input, isDirected);
      } else if (outputType === "danhsachdinhke") {
        output = convertAdjMatrixToAdjList(input);
      }
    }

    setGraphOutput(output.join("\n"));
  };

  return (
    <>
      <title>Chuyển đổi</title>

      <div id="chuyendoi" className="fade-in">
      <Header activePage="chuyendoi" className="bg-transparent" />

        <main className="p-2 h-fit fullmain" id="chuyendoi">
          <section className="max-w-7xl max-lg:max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.144)]">
            <h1 className="w-full text-3xl font-bold text-center mb-6">
              Chuyển đổi giữa các định dạng
            </h1>

            <div className="flex flex-row max-lg:flex-col gap-6 max-lg:gap-2 w-full">
              <div className="min-w-[450px]">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    convert();
                  }}
                >
                  <div className="flex">
                    <h2 className="mt-3 mb-3 content-center text-left w-fit mr-[10px]">
                      Đầu vào:
                    </h2>
                    <select
                      name="inputType"
                      id="inputType"
                      className="h-fit mb-3 mt-3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 bg-white text-gray-700 hover:bg-gray-100 transition duration-200"
                      value={inputType}
                      onChange={(e) => setInputType(e.target.value)}
                    >
                      <option value="danhsachcung" selected>
                        Danh sách cung
                      </option>
                      <option value="matranke">Ma trận kề</option>
                    </select>
                    <label className="switch ml-[10px] mt-3 mb-3">
                      Có hướng:
                      <input
                        type="checkbox"
                        id="directed"
                        name="directed"
                        checked={isDirected}
                        onChange={(e) => setDirected(e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <textarea
                    rows="10"
                    name="graphInput"
                    id=""
                    className="mb-3"
                    value={graphInput}
                    onChange={(e) => setGraphInput(e.target.value)}
                  ></textarea>
                  <button
                    type="submit"
                    className="flex w-fit text-white px-4 py-2 rounded-full bg-[linear-gradient(135deg,#006a67,#3f9d99)] transition-all duration-300 hover:bg-[linear-gradient(135deg,#004442,#1c6360)] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0.5 active:shadow-md px-4 py-2 rounded-lg text-white font-semibold"
                  >
                    Chuyển đổi
                  </button>
                </form>
              </div>
              <div className="min-w-[450px]">
                <div className="flex">
                  <h2 className="mt-3 mb-3 content-center text-left w-fit mr-[10px]">
                    Đầu ra:
                  </h2>
                  <select
                    value={outputType}
                    name="inputType"
                    className="h-fit mb-3 mt-3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 bg-white text-gray-700 hover:bg-gray-100 transition duration-200"
                    id="inputType"
                    onChange={(e) => setOutputType(e.target.value)}
                  >
                    {filteredOutputOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  name="graphOutput"
                  id=""
                  rows="10"
                  value={graphOutput}
                  readOnly
                ></textarea>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Chuyendoi;
