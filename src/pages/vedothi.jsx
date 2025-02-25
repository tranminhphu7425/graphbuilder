import {useEffect , useState } from "react";

import adjustHeight from "../tool/adjustHeight.js";
import configFullPage from "../tool/configfullpage.js";
import { initFlowbite } from "flowbite";
import { Link } from "react-router-dom";

import LogoWithTitle from "../components/LogoWithTitle.jsx";

import { VedothiEffect } from "../script/vedothi.js";

const Vedothi = () => {
  const [isWeightedGraph, setIsWeightedGraph] = useState(false);
  const [isDirected, setIsDirected] = useState(false);
  const [isPhysics, setIsPhysics] = useState(true);


  useEffect(() => {
    adjustHeight();
    configFullPage();
    initFlowbite();
  }, []);

  VedothiEffect();

  const handleWeightedGraphChange = () => {
    setIsWeightedGraph(!isWeightedGraph);
  };

  const handleDirectedChange = () => {
    setIsDirected(!isDirected);
  };

  const handlePhysicsChange = () => {
    setIsPhysics(!isPhysics);
    updateGraph();
  };

  const updateGraph = () => {
    // Logic to update the graph based on the current state
  };

  return (
    <>
      <title>Vẽ đồ thị</title>
      <link rel="stylesheet" href="/src/style/style.css"></link>

      <div>
        <header>
          <nav className="border-gray-200 transparentColor">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 gap-[20px]">
              <LogoWithTitle />
              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-dropdown"
              >
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-gray-700 transparentColor main-nav">
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
                          <a
                            href="/vedothi"
                            className="block px-4 py-2 bg-gray-600 text-white"
                          >
                            Vẽ đồ thị
                          </a>
                        </li>
                        <li>
                          <a
                            href="/nhapdothi"
                            className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                          >
                            Nhập đồ thị
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <button
                      id="dropdownNavbarLink2"
                      data-dropdown-toggle="dropdownNavbar2"
                      className="flex items-center justify-between w-full py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto text-white focus:text-white border-gray-700 hover:bg-gray-700 md:hover:bg-transparent font-bold navigation"
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
                          <a
                            href="/duyetdothi"
                            className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                          >
                            Duyệt đồ thị
                          </a>
                        </li>
                        <li>
                          <a
                            href="/timlienthong"
                            className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                          >
                            Tìm liên thông
                          </a>
                        </li>
                        <li>
                          <a
                            href="/duongdingannhat"
                            className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                          >
                            Tìm đường đi ngắn nhất
                          </a>
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
                    <a
                      href="#"
                      className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:border-0 md:p-0 text-white hover:bg-gray-700 md:hover:bg-transparent font-bold navigation"
                    >
                      Tài nguyên & Học tập
                    </a>
                  </li>
                  <li>
                    <a
                      href="/vechungtoi"
                      className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:border-0 md:p-0 text-white hover:bg-gray-700 md:hover:bg-transparent font-bold navigation"
                    >
                      Về chúng tôi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main id="vedothi">
          <div id="controlsform" className="container">
            <h2>Vẽ đồ thị</h2>
            <div id="graphOption">
              <label className="switch">
                Có trọng số
                <input
                  type="checkbox"
                  id="isWeightedGraph"
                  name="isWeightedGraph"
                  checked={isWeightedGraph}
                  onChange={handleWeightedGraphChange}
                />
                <span className="slider"></span>
              </label>
              <label className="switch">
                Có hướng
                <input
                  type="checkbox"
                  id="directed"
                  name="directed"
                  checked={isDirected}
                  onChange={handleDirectedChange}
                />
                <span className="slider"></span>
              </label>
              <label className="switch">
                Vật lý
                <input
                  type="checkbox"
                  id="physics"
                  name="physics"
                  checked={isPhysics}
                  onChange={handlePhysicsChange}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="guild">
              <h3>Hướng dẫn</h3>
              <ul>
                <li>Đúp chuột để tạo một nút mới</li>
                <li>
                  Ấn giữ phím shift và chọn 2 đỉnh bất kì để tạo cung nối liền 2
                  đỉnh đó
                </li>
                <li>
                  Nếu giữ phím shift và đúp 2 lần vào một đỉnh sẽ tạo khuyên
                </li>
                <li>Ctrl+Z để quay lại bước trước đó</li>
                <li>Nhấp vào cạnh để có thể điền trọng số</li>
              </ul>
            </div>
          </div>
          <div className="graph-container container">
            <div id="mynetwork"></div>
            <button id="zoomExtendsButton">
              <img src="src\assets\img\extendable.png" alt="" width={40} />
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Vedothi;
