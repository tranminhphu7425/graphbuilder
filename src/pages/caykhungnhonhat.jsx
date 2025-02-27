import { useEffect, useState } from "react";

import adjustHeight from "../tool/adjustHeight.js";
import configFullPage from "../tool/configfullpage.js";
import { initFlowbite } from "flowbite";
import { Link } from "react-router-dom";

import LogoWithTitle from "../components/LogoWithTitle.jsx";

import { NhapdothiEffect } from "../script/nhapdothi.js";
import { CaykhungnhonhatEffect } from "../script/caykhungnhonhat.js";

import extendable from '/src/assets/img/extendable.png';

import '../style/style.css';

const Caykhungnhonhat = () => {
  const [nodes, setNodes] = useState("");
  const [edges, setEdges] = useState("");
  const [isWeightedGraph, setIsWeightedGraph] = useState(true);
  const [directed, setDirected] = useState(false);

  useEffect(() => {
    adjustHeight();
    configFullPage();
    initFlowbite();
    
    
  }, []);

  NhapdothiEffect();
  CaykhungnhonhatEffect();

  return (
    <>
      <title>Tìm cây khung nhỏ nhất</title>
    
      <header>
        <nav className=" border-gray-200">
          <div className="flex flex-wrap items-center justify-between mx-auto p-4 gap-[20px]">
            <LogoWithTitle />
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-dropdown"
            >
              <ul
                className="flex flex-col font-medium 
      p-4 md:p-0 mt-4 border border-gray-100 rounded-lg
      md:space-x-8 rtl:space-x-reverse 
      md:flex-row md:mt-0 md:border-0 border-gray-700
      transparentColor main-nav"
              >
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-3 
          rounded-sm md:border-0 md:p-0 text-white hover:bg-gray-700 md:hover:bg-transparent font-bold navigation"
                    aria-current="page"
                  >
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <button
                    id="dropdownNavbarLink1"
                    data-dropdown-toggle="dropdownNavbar1"
                    className="flex items-center justify-between w-full py-2 px-3 
          rounded-sm md:hover:bg-transparent 
          md:border-0 md:p-0 md:w-auto 
          focus:text-white border-gray-700 md:bg-transparent 
          font-bold navigation text-white hover:bg-gray-700"
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
                    className="z-10 hidden font-normal bg-gray-700 divide-y 
          divide-gray-100 rounded-lg shadow-sm w-30 divide-gray-600"
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
                          className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
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
                    className="flex items-center justify-between w-full py-2 px-3 
          rounded-sm md:hover:bg-transparent
          md:border-0 md:p-0 md:w-auto 
          focus:text-white border-gray-700 
          font-bold hover:bg-blue-700 navigation-checked bg-blue-700 md:bg-transparent"
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
                    className="z-10 hidden font-normal bg-gray-700 divide-y 
          divide-gray-100 rounded-lg shadow-sm w-47 divide-gray-600"
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
                            className="block px-4 py-2 bg-gray-600 text-white"
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
                    to="#"
                    className="block py-2 px-3 
          rounded-sm hover:bg-gray-100 md:border-0 md:p-0 text-white hover:bg-gray-700 md:hover:bg-transparent font-bold navigation"
                  >
                    Tài nguyên & Học tập
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vechungtoi"
                    className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:border-0 md:p-0 text-white hover:bg-gray-700 md:hover:bg-transparent font-bold navigation"
                  >
                    Về chúng tôi
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="container" id="formbox">
          <h2>Tìm cây khung nhỏ nhất</h2>
          <form id="graphForm" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group" id="munberNodes">
              <label htmlFor="nodes">Nhập số đỉnh:</label>
              <input
                type="number"
                id="nodes"
                name="nodes"
                min="0"
                required
                value={nodes}
                onChange={(e) => setNodes(e.target.value)}
              />
            </div>

            <div className="listedges">
              <label htmlFor="edges">Nhập các cung:</label>
              <textarea
                id="edges"
                name="edges"
                rows="12"
                placeholder="Ví dụ: 1 2 3
       1 3 2
       2 4 5"
                value={edges}
                onChange={(e) => setEdges(e.target.value)}
              ></textarea>
            </div>

            <div id="graphOption">
              <input
                type="hidden"
                id="isWeightedGraph"
                name="isWeightedGraph"
                checked={isWeightedGraph}
                onChange={() => setIsWeightedGraph(!isWeightedGraph)}
              />
              <label className="switch m-0">
        
                <input
                  type="hidden"
                  id="directed"
                  name="directed"
                  checked={directed}
                  onChange={() => setDirected(!directed)}
                />
        
              </label>
              <div className="typeOfBrowe">
                <div>
                  <input type="submit" id="run" value="Chạy" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="graph-container container">
          <div id="mynetwork"></div>
          <button id="zoomExtendsButton">
            <img src={extendable} alt="" width={40} />
          </button>
        </div>
        <div id="result" className="container">
          <h2>Kết quả</h2>
          <table
            border="1"
            id="resultTable"
            style={{ width: "100%", textAlign: "center" }}
          >
            <thead>
              <tr>
                <th>STT</th>
                <th>Từ</th>
                <th>Đến</th>
                <th>Trọng số</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Caykhungnhonhat;
