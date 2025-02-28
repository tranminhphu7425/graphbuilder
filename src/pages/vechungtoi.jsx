import { useEffect } from "react";

import configFullPage from "../tool/configfullpage.js";
import { initFlowbite } from "flowbite";
import { Link } from "react-router-dom";

import LogoWithTitle from "../components/LogoWithTitle.jsx";

import '../style/style.css';

const Vechungtoi = () => {
  useEffect(() => {
  configFullPage();
  initFlowbite();
  }, []);

  return (
    <>
      <title>Về chúng tôi</title>
     

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
                      className="block py-2 px-3 rounded-sm md:border-0 md:p-0 bg-blue-700 md:bg-transparent font-bold navigation-checked"
                    >
                      Về chúng tôi
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main className="p-2  h-fit fullmain">
          <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="w-full text-3xl font-bold text-center mb-6">
              Về chúng tôi
            </h1>
            <p className="text-gray-700 mb-6 text-left">
              Chào mừng bạn đến với trang web của chúng tôi – nơi cung cấp những
              ví dụ trực quan về lý thuyết đồ thị! Chúng tôi mang đến các khái
              niệm, thuật toán và ứng dụng thực tế của đồ thị. Cùng khám phá và
              học hỏi với chúng tôi!
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">NHÂN SỰ</h2>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Trần Minh Phú</li>
                <li>Nguyễn Minh Tuấn</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">MỤC ĐÍCH</h2>
              <p className="text-gray-700 mb-4">
                Trang web này được thành lập với mục tiêu cung cấp kiến thức và
                ví dụ trực quan về lý thuyết đồ thị – một lĩnh vực quan trọng
                trong toán học và khoa học máy tính. Chúng tôi mong muốn xây
                dựng một nền tảng học tập chất lượng, giúp người dùng từ sinh
                viên, giảng viên đến những người yêu thích thuật toán có thể dễ
                dàng tiếp cận .Chúng tôi cũng cung cấp các ví dụ minh họa và
                công cụ hỗ trợ để giúp bạn nắm bắt nội dung một cách hiệu quả
                nhất. Ngoài ra, trang web còn hướng đến việc xây dựng một cộng
                đồng học tập. Chúng tôi tin rằng, với sự hỗ trợ từ trang web,
                việc học và ứng dụng lý thuyết đồ thị sẽ trở nên dễ dàng và thú
                vị hơn bao giờ hết.
              </p>
              <h2 className="text-2xl font-semibold mb-4">Ý TƯỞNG</h2>
              <p className="text-gray-700 mb-4">
                Ý tưởng thành lập trang web này xuất phát từ nhu cầu cung cấp
                một nền tảng về lý thuyết đồ thị – một lĩnh vực quan trọng trong
                toán học và khoa học máy tính. Chúng tôi nhận thấy rằng, dù đồ
                thị có ứng dụng rộng rãi trong thực tế, từ trí tuệ nhân tạo,
                mạng máy tính đến tối ưu hóa, nhưng vẫn còn thiếu một nguồn tài
                liệu hệ thống, dễ tiếp cận cho người học. Vì vậy, trang web này
                giúp người học tiếp cận lý thuyết đồ thị một cách trực quan, dễ
                hiểu. Với ý tưởng này, chúng tôi hy vọng trang web sẽ trở thành
                một tài nguyên hữu ích cho những ai quan tâm đến lĩnh vực này.
              </p>
              <h2 className="text-2xl font-semibold mb-4">CHÍNH SÁCH</h2>
              <p className="text-gray-700 mb-4">
                Chính sách của trang web được xây dựng nhằm đảm bảo cung cấp một
                môi trường học tập chất lượng, minh bạch và hữu ích cho tất cả
                người dùng quan tâm đến lý thuyết đồ thị. Chúng tôi cam kết cung
                cấp nội dung chính xác, dễ hiểu và cập nhật liên tục để đáp ứng
                nhu cầu học tập và nghiên cứu của mọi đối tượng, từ sinh viên,
                giảng viên đến những người yêu thích thuật toán. Mọi nội dung
                trên trang web đều tuân thủ nguyên tắc tôn trọng bản quyền, đảm
                bảo rằng tài liệu được cung cấp hợp pháp và minh bạch. Bên cạnh
                đó, chúng tôi cam kết bảo vệ quyền riêng tư của người dùng,
                không thu thập hoặc chia sẻ thông tin cá nhân mà không có sự
                đồng ý. Chúng tôi luôn nỗ lực duy trì một môi trường học tập
                tích cực, nơi mọi người có thể trao đổi kiến thức một cách an
                toàn, hiệu quả và sáng tạo.
              </p>
              <h2 className="text-2xl font-semibold mb-4">ỦNG HỘ</h2>
              <p className="text-gray-700 mb-4">
                Nguồn tài trợ của các bạn sẽ giúp nhóm chúng tôi duy trì và phát
                triển những dự án tiếp theo
              </p>

              <div className="flex items-center w-full">
                <Link
                  to="/donate"
                  className="items-center flex m-auto w-fit text-white px-4 py-2 rounded-full bg-[linear-gradient(135deg,#006a67,#3f9d99)] transition-all duration-300 hover:bg-[linear-gradient(135deg,#004442,#1c6360)] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0.5 active:shadow-md px-4 py-2 rounded-lg text-white font-semibold"
                >
                  <img src="../img/save-money.png" alt="" />
                  <span>Donate</span>
                </Link>
              </div>

              <h2 className="text-2xl font-semibold mb-4">LIÊN HỆ</h2>
              <p className="text-gray-700 mb-4">
                Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi
                qua email:
              </p>
              <div className="text-center">
                <a
                  href="mailto:tranminhphu7.4.2005@gmail.com"
                  className="text-blue-500 hover:text-blue-700"
                >
                  tranminhphu7.4.2005@gmail.com
                </a>

                <br />
                <p>
                  Liên hệ điện thoại:
                  <a
                    href="tel:+84818768940"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {" "}
                    +84818768940
                  </a>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Vechungtoi;
