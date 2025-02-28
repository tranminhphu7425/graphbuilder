import { useEffect } from "react";

import configFullPage from "../tool/configfullpage.js";
import { initFlowbite } from "flowbite";
import { Link } from "react-router-dom";

import LogoWithTitle from "../components/LogoWithTitle.jsx";

import qrPic from "../assets/img/VietcombankDonate.jpg";
import '../style/style.css';


const Donate = () => {
    useEffect(() => {
        configFullPage();
        initFlowbite();
      }, []);
  return (
    <>
    <title>Donate</title>
   
   
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
                      className="flex items-center justify-between w-full py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0 md:w-auto focus:text-white border-gray-700 md:bg-transparent font-bold navigation text-white hover:bg-gray-700"
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
                      to="#"
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

        <main className="p-2  fullmain">
          <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">
              Quyên góp ủng hộ
            </h1>
            <p className="text-gray-700 mb-6 text-center">
              Chúng tôi rất cảm kích nếu bạn có thể ủng hộ để giúp chúng tôi duy
              trì và phát triển trang web này. Mọi đóng góp của bạn đều có ý
              nghĩa lớn đối với chúng tôi.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Tại sao quyên góp?
              </h2>
              <p className="text-gray-700 mb-4">
                GraphBuild là một dự án phi lợi nhuận, được phát triển với mục
                đích cung cấp các công cụ miễn phí để vẽ và phân tích đồ thị.
                Tuy nhiên, để duy trì và cải thiện chất lượng dịch vụ, chúng tôi
                cần sự hỗ trợ từ cộng đồng.
              </p>
              <p className="text-gray-700 mb-4">
                Quyên góp của bạn sẽ giúp chúng tôi:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Duy trì máy chủ và cơ sở hạ tầng.</li>
                <li>
                  Phát triển các tính năng mới và cải thiện trải nghiệm người
                  dùng.
                </li>
                <li>
                  Hỗ trợ các hoạt động nghiên cứu và giáo dục liên quan đến đồ
                  thị.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Cách thức quyên góp
              </h2>
              <p className="text-gray-700 mb-4">
                Bạn có thể quyên góp thông qua phương thức sau:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg shadow-sm w-fit">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Chuyển khoản ngân hàng
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Thông tin tài khoản ngân hàng:
                  </p>
                  <ul className="text-gray-700">
                    <li>
                      <strong>Ngân hàng:</strong> Vietcombank
                    </li>
                    <li>
                      <strong>Số tài khoản:</strong> 9911550054
                    </li>
                    <li>
                      <strong>Chủ tài khoản:</strong> Trần Minh Phú
                    </li>
                  </ul>
                </div>

                <img
                  src={qrPic}
                  alt=""
                  className="w-[170px] rounded-lg"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Donate;
