import { Link } from "react-router-dom";
import LogoWithTitle from "./LogoWithTitle.jsx";
import PropTypes from "prop-types";


const Header = ({ activePage, className = "" }) => {
  return (
    <header>
      <nav className={`border-gray-200 ${className}`}>
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 gap-[20px]">
          <LogoWithTitle />
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-0 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-gray-700 main-nav">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 rounded-sm md:border-0 md:p-0 text-white hover:bg-gray-700 md:hover:bg-transparent font-bold navigation ${
                    activePage === "trangchu"
                      ? "bg-blue-700 hover:bg-blue-700 md:bg-transparent navigation-checked"
                      : ""
                  }`}
                  aria-current="page"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink1"
                  data-dropdown-toggle="dropdownNavbar1"
                  className={`flex items-center justify-between w-full py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0 md:w-auto focus:text-white border-gray-700 font-bold navigation ${
                    (activePage === "vedothi" || activePage === "nhapdothi" || activePage === "chuyendoi") 
                      ? "bg-blue-700 hover:bg-blue-700 md:bg-transparent navigation-checked"
                      : "text-white hover:bg-gray-700"
                  }`}
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
                        className={`block px-4 py-2 hover:bg-gray-600 hover:text-white ${
                          activePage === "vedothi"
                            ? "bg-gray-600 text-white"
                            : ""
                        }`}
                      >
                        Vẽ đồ thị
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/nhapdothi"
                        className={`block px-4 py-2 hover:bg-gray-600 hover:text-white ${
                          activePage === "nhapdothi"
                            ? "bg-gray-600 text-white"
                            : ""
                        }`}
                      >
                        Nhập đồ thị
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/chuyendoi"
                        className={`block px-4 py-2 hover:bg-gray-600 hover:text-white ${
                          activePage === "chuyendoi"
                            ? "bg-gray-600 text-white"
                            : ""
                        }`}
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
                  className={`flex items-center justify-between w-full py-2 px-3 
                    rounded-sm md:hover:bg-transparent 
                    md:border-0 md:p-0 md:w-auto 
                    focus:text-white border-gray-700 
                    font-bold navigation ${
                    activePage === "duyetdothi" ||
                    activePage === "timlienthong" ||
                    activePage === "duongdingannhat" ||
                    activePage === "xephangdothi" ||
                    activePage === "caykhungnhonhat" ||
                    activePage === "timluongcucdai"
                      ? "bg-blue-700 hover:bg-blue-700 md:bg-transparent navigation-checked"
                      : "text-white hover:bg-gray-700"
                  }`}
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
                        className={`block px-4 py-2 hover:bg-gray-600 hover:text-white ${
                          activePage === "duyetdothi"
                            ? "bg-gray-600 text-white"
                            : ""
                        }`}
                      >
                        Duyệt đồ thị
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/timlienthong"
                        className={`block px-4 py-2 hover:bg-gray-600 hover:text-white ${
                          activePage === "timlienthong"
                            ? "bg-gray-600 text-white"
                            : ""
                        }`}
                      >
                        Tìm liên thông
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/duongdingannhat"
                        className={`block px-4 py-2 hover:bg-gray-600 hover:text-white ${
                          activePage === "duongdingannhat"
                            ? "bg-gray-600 text-white"
                            : ""
                        }`}
                      >
                        Tìm đường đi ngắn nhất
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/xephangdothi"
                        className={`block px-4 py-2 hover:bg-gray-600 hover:text-white ${
                          activePage === "xephangdothi"
                            ? "bg-gray-600 text-white"
                            : ""
                        }`}
                      >
                        Xếp hạng đồ thị
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/caykhungnhonhat"
                        className={`block px-4 py-2 hover:bg-gray-600 hover:text-white ${
                          activePage === "caykhungnhonhat"
                            ? "bg-gray-600 text-white"
                            : ""
                        }`}
                      >
                        Cây khung nhỏ nhất
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/timluongcucdai"
                        className={`block px-4 py-2 hover:bg-gray-600 hover:text-white ${
                          activePage === "timluongcucdai"
                            ? "bg-gray-600 text-white"
                            : ""
                        }`}
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
                  className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:border-0 md:p-0 text-white hover:bg-gray-700 md:hover:bg-transparent font-bold navigation ${
                    activePage === "tainguyenhoctap"
                      ? "bg-blue-700 hover:bg-blue-700 md:bg-transparent navigation-checked"
                      : ""
                  }`}
                >
                  Tài nguyên & Học tập
                </Link>
              </li>
              <li>
                <Link
                  to="/vechungtoi"
                  className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:border-0 md:p-0 text-white hover:bg-gray-700 md:hover:bg-transparent font-bold navigation ${
                    activePage === "vechungtoi"
                      ? "bg-blue-700 hover:bg-blue-700 md:bg-transparent navigation-checked"
                      : ""
                  }`}
                >
                  Về chúng tôi
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  activePage: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Header;
