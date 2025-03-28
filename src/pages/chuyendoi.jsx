import { useEffect, useState } from "react";

import configFullPage from "../tool/configfullpage.js";
import { initFlowbite } from "flowbite";
import { Link } from "react-router-dom";

import LogoWithTitle from "../components/LogoWithTitle.jsx";

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
        <header>
          <nav className="border-gray-200 transparentColor">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 gap-[20px]">
              <LogoWithTitle />
              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-dropdown"
              >
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-0 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-gray-700 transparentColor main-nav">
                  <li>
                    <Link
                      to="/"
                      className="block py-2 px-3 rounded-sm md:border-0 md:p-0 text-white hover:bg-gray-700 md:hover:bg-transparent font-bold navigation"
                      aria-current="page"
                    >
                      Trang chủ
                    </Link>
                  </li>
                  <li>
                    <button
                      id="dropdownNavbarLink1"
                      data-dropdown-toggle="dropdownNavbar1"
                      className="flex items-center justify-between w-full py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0 md:w-auto focus:text-white border-gray-700 bg-blue-700 md:bg-transparent font-bold navigation-checked"
                    >
                      Tạo đồ thị
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    <div
                      id="dropdownNavbar1"
                      className="z-10 hidden font-normal bg-gray-700 divide-y divide-gray-100 rounded-lg shadow-sm w-30 divide-gray-600"
                    >
                      <ul
                        className="py-2 text-sm text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <Link
                            to="/vedothi"
                            className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                          >
                            Vẽ đồ thị
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/nhapdothi"
                            className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                          >
                            Nhập đồ thị
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/chuyendoi"
                            className="block px-4 py-2 bg-gray-600 text-white"
                          >
                            Chuyển đổi
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <button
                      id="dropdownNavbarLink2"
                      data-dropdown-toggle="dropdownNavbar2"
                      className="flex items-center justify-between w-full py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0 md:w-auto focus:text-white border-gray-700 hover:bg-gray-700 font-bold text-white navigation md:bg-transparent"
                    >
                      Phân tích đồ thị
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    <div
                      id="dropdownNavbar2"
                      className="z-10 hidden font-normal bg-gray-700 divide-y divide-gray-100 rounded-lg shadow-sm w-47 divide-gray-600"
                    >
                      <ul
                        className="py-2 text-sm text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <Link
                            to="/duyetdothi"
                            className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                          >
                            Duyệt đồ thị
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/timlienthong"
                            className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                          >
                            Tìm liên thông
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/duongdingannhat"
                            className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                          >
                            Tìm đường đi ngắn nhất
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/xephangdothi"
                            className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                          >
                            Xếp hạng đồ thị
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/caykhungnhonhat"
                            className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                          >
                            Cây khung nhỏ nhất
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/timluongcucdai"
                            className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                          >
                            Tìm luồng cực đại trong mạng
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="/tainguyenhoctap"
                      className="block py-2 px-3 rounded-sm md:border-0 md:p-0 text-white hover:bg-gray-700 md:hover:bg-transparent font-bold navigation"
                    >
                      Tài nguyên & Học tập
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/vechungtoi"
                      className="block py-2 px-3 rounded-sm md:border-0 md:p-0 text-white hover:bg-gray-700 md:hover:bg-transparent font-bold navigation"
                    >
                      Về chúng tôi
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

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
