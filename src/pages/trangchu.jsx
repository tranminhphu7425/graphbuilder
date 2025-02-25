import { useEffect } from "react";

import { Link } from "react-router-dom";
import LogoWithTitle from "../components/LogoWithTitle.jsx";
import  { Background } from "../script/background.js";
import { initFlowbite } from "flowbite";




const Trangchu = () => {
  useEffect(() => {
    // Import và chạy background.js sau khi component được mount
    initFlowbite(); 
    // import vis from '/src/tool/vis-network-wrapper.js';
    Background();
  
  }, []);

  return (
    <>
     <title>Trang chủ</title>
     
      <link rel="stylesheet" href=".\src\style\homepage.css"></link>
      <header>
        <nav className="border-gray-200 bg-transparent">
          <div className="flex flex-wrap items-center justify-between mx-auto p-4 gap-[20px]">
            <LogoWithTitle />
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-dropdown"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-gray-700 bg-transparent main-nav">
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-3 rounded-sm bg-blue-700 md:bg-transparent md:p-0 font-bold navigation-checked"
                    aria-current="page"
                  >
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <button
                    id="dropdownNavbarLink1"
                    data-dropdown-toggle="dropdownNavbar1"
                    className="flex items-center justify-between w-full py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto text-white focus:text-white border-gray-700 hover:bg-gray-700 md:hover:bg-transparent font-bold navigation"
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
                    to="/tailieu"
                    className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:border-0 md:p-0 text-white hover:bg-gray-700 md:hover:bg-transparent font-bold navigation"
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

      <div className="flex flex-col lg:flex-row min-h-screen bg-gray text-white">
        <div className="leftSite lg:w-1/2 bg-gray p-8 lg:p-16 flex flex-col justify-center">
          <div className="w-fit m-auto">
            <h2 className="text-5xl font-bold mb-6 textAnimation select-none">
              Công cụ xử lý <span className="gradient-text">đồ thị</span>
            </h2>
            <p className="text-lg mb-6 textAnimation">
              Một công cụ giúp giải quyết một số bài toán, các giải thuật và
              thuật toán về đồ thị
            </p>
            <div className="flex items-center space-x-4 textAnimation">
              <Link
                to="/nhapdothi"
                className="text-white px-6 py-3 rounded-full bg-[linear-gradient(135deg,#006a67,#3f9d99)] transition-all duration-300 hover:bg-[linear-gradient(135deg,#004442,#1c6360)] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0.5 active:shadow-md px-4 py-2 text-white font-semibold"
              >
                Bắt đầu
              </Link>
              <Link
                to="/donate"
                className="space-x-2 flex items-center transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg px-4 py-3 rounded-full"
              >
                <img src="src\assets\img\save-money.png" alt="" />
                Donate
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div
            id="mynetworkBackground"
            className="w-full h-full object-cover opacity-50"
          ></div>
        </div>
      </div>

    
    </>
  );
};

export default Trangchu;
