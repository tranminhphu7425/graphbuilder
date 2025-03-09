import { useEffect } from "react";
import configFullPage from "../tool/configfullpage.js";
import { initFlowbite } from "flowbite";
import { Link, useLocation } from "react-router-dom";
import LogoWithTitle from "../components/LogoWithTitle.jsx";
import "../style/style.css";

const Tainguyenhoctap = () => {
  const location = useLocation();

  useEffect(() => {
    configFullPage();
    initFlowbite();
  }, []);

  useEffect(() => {
    // Get the hash from the URL (e.g., #PCB)
    const hash = location.hash;
    if (hash) {
      // Remove the # symbol
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]); // Re-run when location changes

  return (
    <div>
      <title>Tài nguyên & Học tập</title>
      <div id="tainguyenhoctap" className="fade-in">
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
                      to="/tainguyenhoctap"
                      className="block py-2 px-3 rounded-sm md:border-0 md:p-0 bg-blue-700 md:bg-transparent font-bold navigation-checked"
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

        <main className="p-2 bg-gray-100 fullmain">
          <nav className="menu p-8">
            <div>
              <Link to="/tainguyenhoctap#PCB">
                <h2>PHẦN CƠ BẢN</h2>
              </Link>
              <div>
                <ul>
                  <Link to="/tainguyenhoctap#ĐN&PL">
                    I. ĐỊNH NGHĨA VÀ PHÂN LOẠI
                  </Link>
                  <li>
                    <Link to="/tainguyenhoctap#ĐN">ĐỊNH NGHĨA</Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#BCĐT">BẬC CỦA ĐỒ THỊ</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <Link to="/tainguyenhoctap#DĐT">II. DUYỆT ĐỒ THỊ</Link>
                  <li>
                    <Link to="/tainguyenhoctap#BFS">
                      DUYỆT ĐỒ THỊ THEO CHIỀU SÂU
                    </Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#DFSĐQ">
                      DUYỆT ĐỒ THỊ THEO CHIỀU SÂU BẰNG ĐỆ QUY
                    </Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#BFS">
                      DUYỆT ĐỒ THỊ THEO CHIỀU RỘNG
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <Link to="/tainguyenhoctap#TLTĐT">
                    III. TÍNH LIÊN THÔNG CỦA ĐỒ THỊ
                  </Link>
                  <li>
                    <Link to="/tainguyenhoctap#ĐNLT">ĐỊNH NGHĨA</Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#SCC">
                      TÌM CÁC BỘ PHẬN LIÊN THÔNG MẠNH
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <Link to="/tainguyenhoctap#DC">
                    IV. DUYỆT ĐỒ THỊ VÀ ỨNG DỤNG
                  </Link>
                  <li>
                    <Link to="/tainguyenhoctap#KTCT">
                      KIỂM TRA ĐỒ THỊ CHỨA CHU TRÌNH
                    </Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#KTPĐ">
                      KIỂM TRA ĐỒ THỊ PHÂN ĐÔI
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <Link to="/tainguyenhoctap#">V. </Link>
                  <li>
                    <Link to="/tainguyenhoctap#KTCT">
                      KIỂM TRA ĐỒ THỊ CHỨA CHU TRÌNH
                    </Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#KTPĐ">KIỂM TRA ĐỒ THỊ PHÂN ĐÔI</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Link to="/tainguyenhoctap#PNC">
                <h2>PHẦN NÂNG CAO</h2>
              </Link>
              <div>
                <ul>
                  <Link to="/tainguyenhoctap#EULER&HAMILTON">
                    I. ĐỒ THỊ EULER & ĐỒ THỊ HAMILTON
                  </Link>
                  <li>
                    <Link to="/tainguyenhoctap#EULER">ĐỒ THỊ EULER</Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#HAMILTON">ĐỒ THỊ HAMILTON</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <Link to="/tainguyenhoctap#TDDNN">
                    II. TÌM ĐƯỜNG ĐI NGẮN NHẤT
                  </Link>
                  <li>
                    <Link to="/tainguyenhoctap#ĐTTS">
                      BIỂU DIỄN ĐỒ THỊ CÓ TRỌNG SỐ
                    </Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#DDNN">ĐƯỜNG ĐI NGẮN NHẤT</Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#MOORE-DIJKSTRA">
                      THUẬT TOÁN MOORE-DIJKSTRA
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <Link to="/tainguyenhoctap#TOPO&UD">
                    III. THỨ TỰ TOPO & ỨNG DỤNG
                  </Link>
                  <li>
                    <Link to="/tainguyenhoctap#TOPO">THỨ TỰ TOPO</Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#XHĐT">
                      XẾP HẠNG CÁC ĐỈNH CỦA ĐỒ THỊ
                    </Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#QLDA">QUẢN LÝ DỰ ÁN</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <Link to="/tainguyenhoctap#C&CKTT">
                    IV.CÂY & CÂY KHUNG TỐI THIỂU
                  </Link>
                  <li>
                    <Link to="/tainguyenhoctap#CVH">CÂY VÔ HƯỚNG</Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#Kruskal">
                      THUẬT TOÁN KRUSKAL
                    </Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#Prim">THUẬT TOÁN PRIM</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <Link to="/tainguyenhoctap#CCH&CKTT">
                    V. CÂY CÓ HƯỚNG VÀ CÂY KHUNG TỐI THIỂU
                  </Link>
                  <li>
                    <Link to="/tainguyenhoctap#CCH">CÂY CÓ HƯỚNG</Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#ChuLiu/Edmonds">
                      THUẬT TOÁN CHU-LIU/EDMONDS
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <Link to="/tainguyenhoctap#LCDTM">
                    VI. LUỒNG CỰC ĐẠI TRONG MẠNG
                  </Link>
                  <li>
                    <Link to="/tainguyenhoctap#LTM">LUỒNG ( TRÊN MẠNG)</Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#LC">LÁT CẮT</Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#L&LC">LUỒNG & LÁT CẮT</Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#Ford-Fulkerson">
                      THUẬT TOÁN FORD - FULKERSON
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <section className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg w-[60%]">
            <div id="PCB" className="mb-6">
              <h1>PHẦN CƠ BẢN</h1>
              <div id="ĐN&PL" className="mb-6">
                <h2
                  className="text-gray-700 mb-6 text-center"
                  style={{ textAlign: "left" }}
                >
                  Định Nghĩa & Phân Loại
                </h2>
                <div>
                  <h3
                    id="ĐN"
                    className="text-gray-700 text-center"
                    style={{ textAlign: "left" }}
                  >
                    Định Nghĩa
                  </h3>
                  <p
                    className="text-gray-700 text-center"
                    style={{ textAlign: "left" }}
                  >
                    <ul style={{ listStyle: "circle" }}>
                      Đồ thị (Graph) là một bộ đôi {"{<V, E>}"}, trong đó:
                      <li>V: tập các đỉnh (Vertex set)</li>
                      <li>
                        E: tập các cung (Edge Set), mỗi cung nối 2 đỉnh trong V
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="mb-6">
                  <h3
                    id="BCĐT"
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Bậc của đồ thị
                  </h3>
                  <ul style={{ listStyle: "circle" }}>
                    <li>
                      Định lý 1( định lý bắt tay): Tổng bậc của tất cả các đỉnh
                      trong một đồ thị bằng 2 lần số cung
                    </li>
                    <li>
                      Định lý 2: Số đỉnh bậc lẻ của một đồ thị vô hướng là số
                      chẵn
                    </li>
                    <li>
                      Định lý 3(Cho một đồ thị có hướng): Tổng bậc vào = Tổng
                      bậc ra = Tổng số cung
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-6">
                <h2
                  className="text-gray-700 mb-6 text-center"
                  style={{ textAlign: "left" }}
                >
                  Một Số Đồ Thị Đặc Biệt
                </h2>
                <div>
                  <ul className="mb-6" style={{ listStyle: "circle" }}>
                    Clique
                    <li>
                      Clique trên đồ thị vô hướng là tập các đỉnh mà chúng đôi
                      một kề nhau
                    </li>
                    <li>
                      Clique tối đại ( maximal clique): là một clique không thể
                      thêm vào nó bất cứ đỉnh nào nữa
                    </li>
                    <li>
                      Clique lớn nhất( maximum clique)L là Clique có nhiều phần
                      tử nhất trong đồ thị
                    </li>
                  </ul>
                  <ul className="mb-6" style={{ listStyle: "circle" }}>
                    Đồ thị đầy đủ ( complete graph)
                    <li>Đơn đồ thị vô hướng</li>
                    <li>Mỗi cặp đỉnh đều có đúng 1 cung</li>
                  </ul>
                  <ul style={{ listStyle: "circle" }}>
                    Đồ thị phân đôi( bipartite graph/bigraph)
                    <li>Tập đỉnh được chia thành 2 tập không giao nhau</li>
                    <li>Mỗi cung nối 1 đỉnh trong U và 1 đỉnh trong V</li>
                  </ul>
                  <ul style={{ listStyle: "circle" }}>
                    Đồ thị phân đôi đầy đủ
                    <li>Còn gọi là đồ thị 2 clique</li>
                    <li>
                      Mỗi đỉnh của phần này nối với tất cả các đỉnh của phần kia
                    </li>
                  </ul>
                  <ul style={{ listStyle: "circle" }}>
                    Đồ thị vô hướng nền
                    <li>
                      Là đồ thị vô hướng sau khi đã loại bỏ hướng của các cạnh
                    </li>
                    <li>
                      Đồ thị có hướng và đồ thị vô hướng nền của nó có cùng số
                      cạnh
                    </li>
                  </ul>
                  <ul style={{ listStyle: "circle" }}>
                    Đồ thị con
                    <li>
                      Đồ thị con G{"<sub>s</sub>"} ={" "}
                      {"<V<sub>s</sub>, E<sub>s</sub>>"}, V{"<sub>s</sub>"}{" "}
                      {"⊂"} V, E{"<sub>s</sub>"} {"⊂"} E được xây dựng từ G là
                      đồ thị có được sau khi loại bỏ các cung không thuộc E
                      {"<sub>s</sub>"}
                    </li>
                  </ul>
                </div>
                <h3
                  id="SĐCCĐT"
                  className="text-gray-700  text-center"
                  style={{ textAlign: "left" }}
                >
                  Sự đẳng cấu của đồ thị
                </h3>
                <p>
                  2 đồ thị G<sub>1</sub> = &lt;V<sub>1</sub>, E<sub>1</sub>&gt;
                  và G<sub>2</sub> = &lt;V<sub>2</sub>, E<sub>2</sub>&gt;
                </p>
              </div>
              <div id="DĐT" className="mb-6">
                <h2
                  className="text-gray-700 mb-6 text-center"
                  style={{ textAlign: "left" }}
                >
                  Duyệt Đồ Thị
                </h2>
                <div className="mb-6">
                  <h3
                    id="DFS"
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Duyệt đồ thị theo chiều sâu ( Thuật toán DFS)
                  </h3>
                  <ul style={{ listStyle: "decimal" }}>
                    <li>Đưa 1 đỉnh s bất kỳ vào ngăn xếp</li>
                    <li>
                      While (ngăn xếp chưa rỗng) do
                      <ul style={{ listStyle: "disc" }}>
                        <li>Lấy 1 đỉnh ở đỉnh ngăn xếp</li>
                        <li>if( u đã duyệt) continue;</li>
                        <li>Duyệt u(vd: in u ra màn hình)</li>
                        <li>Đánh dấu u đã duyệt</li>
                        <li>
                          for (các đỉnh kề của u) do {"{"}đưa v vào ngăn xếp
                          {"}"}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3
                    id="DFSĐQ"
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Duyệt đồ thị theo chiều sâu bằng đệ quy
                  </h3>
                  <ul style={{ listStyle: "decimal" }}>
                    <li>if ( u đã duyệt) {"return;"}</li>
                    <li>Đánh dấu u đã duyệt</li>
                    <li>
                      for( các đỉnh kề v của u) do {"{"} gọi đệ quy(v) {"}"}
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3
                    id="BFS"
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Duyệt đồ thị theo chiều rộng ( Thuật toán BFS)
                  </h3>
                  <ul style={{ listStyle: "decimal" }}>
                    <li>Đưa 1 đỉnh s bất kỳ vào hàng đợi</li>
                    <li>
                      While (hàng đợi chưa rỗng) do
                      <ul style={{ listStyle: "disc" }}>
                        <li>Lấy 1 đỉnh ở đỉnh ở đầu hàng đợi</li>
                        <li>if( u đã duyệt) continue;</li>
                        <li>Duyệt u(vd: in u ra màn hình)</li>
                        <li>Đánh dấu u đã duyệt</li>
                        <li>
                          for (các đỉnh kề của u) do {"{"}đưa v vào hàng đợi
                          {"}"}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="TLTĐT" className="mb-6">
                <h2
                  className="text-gray-700 mb-6 text-center"
                  style={{ textAlign: "left" }}
                >
                  Tính Liên Thông Của Đồ Thị
                </h2>
                <div id="ĐNLT" className="mb-6">
                  <ul style={{ listStyle: "circle" }}>
                    <li>
                      Đồ thị vô hướng G được gọi là liên thông nếu và chỉ nếu
                      với mọi cặp đỉnh u,v ∈ V luôn tồn tại đường đi (walk) từ u{" "}
                      {"->"} v. Ngược lại, G được gọi là không liên thông.
                    </li>
                    <li>
                      Đỉnh u được gọi là liên thông với đỉnh v {"<=>"} tồn tại
                      đường đi từ u {"->"} v.
                    </li>
                    <li>
                      Quan hệ liên thông trên G là tập các cặp có thứ tự (u, v)
                      sao cho u liên thông với v.
                    </li>
                    <li>
                      Các bộ phận liên thông của đồ thị G là tập các đồ thị con
                      liên thông lớn nhất của G( là các lớp tương đương của quan
                      hệ liên thông)
                    </li>
                    <li>
                      Đỉnh cô lập ( có bậc bằng 0) cũng là một bộ phận liên
                      thông chỉ gồm chính nó và được gọi là bộ phận liên thông
                      tầm thường ( trivial connected component)
                    </li>
                  </ul>
                </div>
                <div id="SCC" className="mb-6">
                  <h3
                    id="BFS"
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Tìm các bộ phận liên thông mạnh
                  </h3>
                  <pre>
                    <code>
                      {`//1. Đánh số cho đỉnh u, đưa u vào ngăn xếp
num[u] = min_num[u] = k; k++
push(S,u); on_stack[u] = true;`}
                    </code>
                  </pre>

                  <pre>
                    <code>
                      {`// 2. Lần lượt xét các đỉnh kề của u
for (let v of adjacentVertices) {
  if (!visited[v]) {
    // 2a. Duyệt v và cập nhật lại min_num[u]
    SCC(v);
    min_num[u] = Math.min(min_num[u], min_num[v]);
  } else if (onStack[v]) {
    // 2b. Cập nhật lại min_num[u]
    min_num[u] = Math.min(min_num[u], num[v]);
  } else {
    // 2c. Bỏ qua, không làm gì cả
  }
}`}
                    </code>
                  </pre>

                  <pre>
                    <code>
                      {`// 3. Kiểm tra num[u] == min_num[u]
if (num[u] == min_num[u]) {
    // Lấy các đỉnh trong stack cho đến khi gặp u
    // Các đỉnh này thuộc về một thành phần liên thông
    int w;
    do {
        w = top(&S);
        pop(&S);
    } while (w != u);
}`}
                    </code>
                  </pre>
                </div>
              </div>
              <div id="DC" className="mb-6">
                <h2
                  className="text-gray-700 mb-6 text-center"
                  style={{ textAlign: "left" }}
                >
                  Dựng Cây Duyệt Đồ Thị
                </h2>
                <div id="KTCT" className="mb-6">
                  <h3
                    id="BFS"
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Kiểm tra đồ thị chứa chu trình
                  </h3>
                  <ul className="mb-6">
                    Thuật toán kiểm tra đồ thị chứa chu trình
                    <li style={{ marginLeft: "5px" }}>
                      <ul style={{ listStyle: "disc" }}>
                        Trạng thái của đỉnh
                        <li style={{ marginLeft: "10px" }}>
                          Chưa duyệt: chưa đụng tới nó ( TRẮNG/WHITE)
                        </li>
                        <li style={{ marginLeft: "10px" }}>
                          Đang duyệt: đang duyệt nó nhưng chưa duyệt hết kề của
                          nó ( XÁM/GRAY)
                        </li>
                        <li style={{ marginLeft: "10px" }}>
                          Đã duyệt xong: duyệt nó và đã duyệt hết các kề của nó
                          ( ĐEN/BLACK)
                        </li>
                      </ul>
                    </li>
                    <li style={{ marginLeft: "5px; " }}>
                      <ul style={{ listStyle: "disc" }}>
                        Thuật toán:
                        <li style={{ marginLeft: "10px" }}>
                          DFS + tô màu các đỉnh trong quá trình duyệt
                        </li>
                        <li style={{ marginLeft: "10px" }}>
                          Nếu khi xét 1 đỉnh kề v của u mà v có màu xám {"=>"}{" "}
                          tạo chu trình
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div id="KTPĐ" className="mb-6">
                  <h3
                    id="BFS"
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Kiểm tra đồ thị phân đôi
                  </h3>
                  <ul className="mb-6">
                    Thuật toán kiểm tra đồ thị phân đôi
                    <li style={{ marginLeft: "5px" }}>
                      Duyệt đồ thị + tô màu các đỉnh bằng 1 trong 2 màu ( XANH,
                      ĐỎ). Hai đỉnh kề nhau có màu khác nhau
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div id="PNC" className="mb-6">
              <h1>PHẦN NÂNG CAO</h1>
              <div id="EULER&HAMILTON" className="mb-6">
                <h2
                  className="text-gray-700 mb-6 text-center"
                  style={{ textAlign: "left" }}
                >
                  Đồ Thị Euler & Đồ Thị Hamilton
                </h2>
                <div id="EULER" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Đồ thị Euler
                  </h3>
                  <p>
                    Chu trình Euler ( Euler circuit) trong đồ thị G là một chu
                    trình đơn cung chứa tất cả các cung của G
                  </p>
                  <p>
                    Đường đi Euler( Euler path) trong đồ thị G là đường đi đơn
                    cung chứa tất cả các đỉnh của G
                  </p>
                  <p
                    className="text-gray-700  text-center "
                    style={{ textAlign: "left" }}
                  >
                    <ul style={{ listStyle: "circle" }}>
                      Định lý Euler:
                      <li style={{ marginLeft: "15px" }}>
                        Đa đồ thị ( vô hướng) liên thông có ít nhất 2 đỉnh có
                        chu tình Euler khi và chỉ khi tất cả các đỉnh của nó đều
                        có bậc chẵn
                      </li>
                      <li style={{ marginLeft: "15px" }}>
                        Đa đồ thị ( vô hướng) liên thông có đường đi Euler (
                        nhưng không có chu trình Euler) khi và chỉ khi nó có
                        đúng 2 đỉnh bậc lẻ
                      </li>
                    </ul>

                    <ul style={{ listStyle: "circle" }}>
                      Thuật toán Fleury xây dựng chu trình Euler
                      <li style={{ marginLeft: "15px" }}>Chọn 1 đỉnh bất kỳ</li>
                      <li style={{ marginLeft: "15px" }}>
                        Chọn tiếp các cung liên tiếp cho đến khi tạo thành chu
                        trình. Mỗi khi 1 cung được chọn, xóa nó ra khỏi đồ thị
                      </li>
                      <li style={{ marginLeft: "15px" }}>
                        Các cung được chọn sao cho đỉnh đầu của cung mới là đỉnh
                        cuối của cung cũ và nó không phải là cầu ( Cầu: xóa bỏ
                        cung này sẽ làm đồ thị mất liên thông) trừ phi không có
                        lựa chọn khác
                      </li>
                    </ul>
                  </p>
                </div>
                <div id="HAMILTON" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Đồ thị Hamilton
                  </h3>
                  <p
                    className="text-gray-700  text-center "
                    style={{ textAlign: "left" }}
                  >
                    <ul style={{ listStyle: "circle" }}>
                      Chu trình Hamilton ( Hamilton circuit)
                      <li style={{ marginLeft: "15px" }}>
                        Chu trình đơn đỉnh ( simple circuit) đi qua các đỉnh của
                        đồ thị, mỗi đỉnh đúng 1 lần ( trừ đỉnh xuất phát){" "}
                      </li>
                    </ul>

                    <ul style={{ listStyle: "circle" }}>
                      Đường đi Hamilton ( Hamilton path)
                      <li style={{ marginLeft: "15px" }}>
                        Đường đi đơn đỉnh ( simple path) đi qua các đỉnh của đồ
                        thị G, mỗi đỉnh đúng 1 lần
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div id="TDDNN" className="mb-6">
                <h2
                  className="text-gray-700 mb-6 text-center"
                  style={{ textAlign: "left" }}
                >
                  Tìm Đường Đi Ngắn Nhất
                </h2>
                <div id="ĐTTS" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Biểu diễn đồ thị có trọng số
                  </h3>
                  <p>
                    Có thể mở rộng các phương pháp biểu diễn đồ thị trước đây để
                    biểu diễn đồ thị có trọng số
                  </p>
                  <ul>
                    Ma trận kề ( Ma trận trọng số)
                    <li>Nếu có ( u,v) thì W[u][v] = trọng số cung ( u,v)</li>
                    <li>Nếu không có ( u,v) thì W[u][v] = NO_EDGE ( vd:-1)</li>
                  </ul>
                  <ul>
                    Danh sách cung
                    <li>Mỗi cung lưu trữ: đỉnh đầu, đỉnh cuối và trọng số</li>
                  </ul>
                </div>
                <div id="DDNN" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Đường đi ngắn nhất
                  </h3>
                  <ul>
                    Đường đi ngắn nhất ( shortest path) từ đỉnh u đến đỉnh v
                    trong đồ thị có trọng số
                    <li>
                      Chiều dài/ chi phí ( cost) của đường đi ( path) là tổng
                      các trọng số của các cung trên đường đi
                    </li>
                    <li>
                      Đường đi ngắn nhất ( shortest path) là đường đi có chiều
                      dài nhỏ nhất
                    </li>
                  </ul>
                  <ul>
                    Một đoạn đường đi ( sub-path) của đường đi ngắn nhất cũng là
                    đường đi ngắn nhất
                    <li>
                      Tính chất cấu trúc con tối ưu (optimal substructure) {"⇒"}{" "}
                      có thể áp dụng kỹ thuật quy hoạch động để thiết kế các
                      giải thuật tìm đường đi ngắn nhất
                    </li>
                  </ul>
                </div>
                <div id="MOORE-DIJKSTRA" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Thuật toán Moore - Dijkstra
                  </h3>
                  <ul>
                    <li>
                      Tìm đường đi ngắn nhất từ 1 đỉnh đến các đỉnh khác trên đồ
                      thị có trọng số ( single source shortest path problem -
                      SSSP)
                    </li>
                    <li>
                      <ul style={{ listStyle: "disc" }}>
                        Điều kiện áp dụng:
                        <li style={{ marginLeft: "15px" }}>
                          Đồ thị có trọng số không âm
                        </li>
                        <li style={{ marginLeft: "15px" }}>
                          Có hướng hoặc vô hướng đều được
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul style={{ listStyle: "disc" }}>
                        Ý tưởng chính:
                        <li style={{ marginLeft: "15px" }}>
                          Khởi tạo đường đi trực tiếp từ s đến các đỉnh
                        </li>
                        <li style={{ marginLeft: "15px" }}>
                          Lần lượt cập nhật lại đường đi nếu tìm được đường đi
                          mới tốt hơn đường đi cũ
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div id="MOORE-DIJKSTRA" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Thuật toán Moore - Dijkstra
                  </h3>
                  <ul>
                    <li>
                      Tìm đường đi ngắn nhất từ 1 đỉnh đến các đỉnh khác trên đồ
                      thị có trọng số ( single source shortest path problem -
                      SSSP)
                    </li>
                    <li>
                      <ul style={{ listStyle: "disc" }}>
                        Điều kiện áp dụng:
                        <li style={{ marginLeft: "15px" }}>
                          Đồ thị có trọng số không âm
                        </li>
                        <li style={{ marginLeft: "15px" }}>
                          Có hướng hoặc vô hướng đều được
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul style={{ listStyle: "disc" }}>
                        Ý tưởng chính:
                        <li style={{ marginLeft: "15px" }}>
                          Khởi tạo đường đi trực tiếp từ s đến các đỉnh
                        </li>
                        <li style={{ marginLeft: "15px" }}>
                          Lần lượt cập nhật lại đường đi nếu tìm được đường đi
                          mới tốt hơn đường đi cũ
                        </li>
                      </ul>
                    </li>
                    <li>Gọi đỉnh bắt đầu là s</li>
                    <ul style={{ listStyle: "disc" }}>
                      Các biến hỗ trợ:
                      <li style={{ marginLeft: "15px" }}>
                        pi[u]: chiều dài đường đi ngắn nhất ( tạm thời) từ s đến
                        u
                      </li>
                      <li style={{ marginLeft: "15px" }}>
                        p[u]: đỉnh trước đỉnh u trên đường đi ngắn nhất ( tạm
                        thời) từ s đến u
                      </li>
                      <li style={{ marginLeft: "15px" }}>
                        mark[u]: đánh dấu đỉnh u ( đã tìm được đường đi ngắn
                        nhất đến u)
                      </li>
                    </ul>
                    <ul>
                      Giải thuật:
                      <ul style={{ marginLeft: "10px;listStyle: disc" }}>
                        Khởi tạo:
                        <li style={{ marginLeft: "15px" }}>
                          pi[u] = oo với mọi u, p[u] = -1 với mọi u
                        </li>
                        <li style={{ marginLeft: "15px" }}>pi[s] = 0</li>
                        <li style={{ marginLeft: "15px" }}>
                          mark[u] = 0 với mọi u
                        </li>
                      </ul>
                      <ul style={{ marginLeft: "10px;listStyle: disc" }}>
                        Lặp n-1:
                        <li style={{ marginLeft: "15px" }}>
                          Chọn đỉnh chưa đánh dấu và có pi[u] nhỏ nhất
                        </li>
                        <li style={{ marginLeft: "15px" }}>Đánh dấu u</li>
                        <li style={{ marginLeft: "15px" }}>
                          Xét các đỉnh kề v( chưa đánh dấu) của u để cập nhật
                          đường đi nếu đường đi qua u rồi đến v tốt hơn đường đi
                          cũ
                        </li>
                      </ul>
                    </ul>
                  </ul>
                </div>
              </div>
              <div id="TOPO&UD" className="mb-6">
                <h2
                  className="text-gray-700 mb-6 text-center"
                  style={{ textAlign: "left" }}
                >
                  Thứ Tự Topo & Ứng Dụng
                </h2>
                <div id="TOPO" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Thứ tự topo
                  </h3>
                  <p>
                    Thứ tự topo ( topological order) của các đỉnh trên đồ thị có
                    hướng G là một cách sắp xếp thứ tự các đỉnh của G sao cho
                    với mọi cung ( u,v), đỉnh gốc u phải đứng trước đỉnh ngọn v
                  </p>
                  <p>
                    Sắp xếp topo ( topological ordering/sort): sắp xếp các đỉnh
                    theo thứ tự topo
                  </p>
                  <ul style={{ listStyle: "disc" }}>
                    Đồ thị có hướng không chu trình ( Directed Acyclic Graph -
                    DAG)
                    <li style={{ marginLeft: "15px" }}>Có hướng</li>
                    <li style={{ marginLeft: "15px" }}>Không chứa chu trình</li>
                    <li style={{ marginLeft: "15px" }}>
                      Tồn tại ít nhất 1 thứ tự topo
                    </li>
                  </ul>
                  <ul>
                    Thuật toán sắp xếp Topo dựa trên BFS
                    <ul style={{ listStyle: "disc" }}>
                      Khởi tạo:
                      <li style={{ marginLeft: "15px" }}>
                        Tính bậc vào của các đỉnh, d[u]
                      </li>
                      <li style={{ marginLeft: "15px" }}>
                        Q chứa các đỉnh có bậc vào = 0
                      </li>
                      <li style={{ marginLeft: "15px" }}>L = rỗng</li>
                    </ul>
                    <ul>
                      Lặp
                      <li style={{ marginLeft: "15px" }}>
                        <ul style={{ listStyle: "decimal" }}>
                          while(Q khác rỗng)
                          <li style={{ marginLeft: "20px" }}>
                            Lấy phần tử đầu hàng đợi Q, gọi nó là u
                          </li>
                          <li style={{ marginLeft: "20px" }}>Thêm u vào L</li>
                          <li style={{ marginLeft: "20px" }}>
                            <ul style={{ listStyle: "decimal" }}>
                              Thêm các đỉnh kề v của
                              <li style={{ marginLeft: "25px" }}>
                                Giảm bậc vào của đỉnh v
                              </li>
                              <li style={{ marginLeft: "25px" }}>
                                <ul>
                                  If bậc vào của v = 0
                                  <li style={{ marginLeft: "25px" }}>
                                    Thêm v vào Q
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div id="XHĐT" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Xếp hạng các đỉnh của đồ thị
                  </h3>
                  <ul>
                    Gốc/ nguồn ( root/ source) của đồ thị
                    <li style={{ marginLeft: "15px" }}>
                      Đỉnh không có cung đi vào ( indegree = 0)
                    </li>
                    <li style={{ marginLeft: "15px" }}>DAG có ít nhất 1 gốc</li>
                  </ul>
                  <ul>
                    Hạng ( rank) của 1 đỉnh
                    <li style={{ marginLeft: "15px" }}>
                      u là gốc, rank[u] = 0
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      ngược lại, rank[u] = số cung trên đường đi dài nhất từ gốc
                      đến u
                    </li>
                  </ul>
                  <ul style={{ listStyle: "decimal" }}>
                    Thuật toán xếp hạng đồ thị ( dựa trên BFS):
                    <li style={{ marginLeft: "25px" }}>
                      Xếp hạng cho ( các) gốc ( hạng 0)
                    </li>
                    <li style={{ marginLeft: "25px" }}>
                      Loại bỏ gốc ra khỏi đồ thị {"⇒"} xuất hiện gốc mới
                    </li>
                    <li style={{ marginLeft: "25px" }}>
                      Xếp hạng cho gốc mới ( hạng 1)
                    </li>
                    <li style={{ marginLeft: "25px" }}>
                      Loại bỏ gốc ra khỏi đồ thị {"⇒"} xuất hiện gốc mới
                    </li>
                    <li style={{ marginLeft: "25px" }}>...</li>
                  </ul>
                </div>
                <div id="QLDA" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Quản lý dự án
                  </h3>
                  <ul style={{ listStyle: "disc" }}>
                    Dự án ( project):
                    <li style={{ marginLeft: "15px" }}>
                      Danh sách công việc ( activities/ tasks), mỗi công việc có
                      thời gian hoàn thành
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      Có sự phụ thuộc giữa các công việc( vd: công việc B chỉ có
                      thể bắt đầu làm khi làm xong công việc A)
                    </li>
                  </ul>
                  <ul style={{ listStyle: "disc" }}>
                    Vấn đề:
                    <li style={{ marginLeft: "15px" }}>
                      Kế hoạch thực hiện các công việc
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      Ước tính thời gian hoàn thành
                    </li>
                  </ul>
                  <ul style={{ listStyle: "disc" }}>
                    Mô hình hóa về đồ thị:
                    <li style={{ marginLeft: "15px" }}>Công việc {"⇒"} Đỉnh</li>
                    <li style={{ marginLeft: "15px" }}>
                      Sự phụ thuộc giữa 2 công việc {"⇒"} Cung
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      Thời gian hoàn thành công việc u ( d) {"⇒"} Trọng số của
                      đỉnh u
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      Thêm 2 đỉnh: &alpha; &beta;( tương ứng với 2 công việc
                      giả)
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      Thêm cung nối &alpha; với các đỉnh có bậc vào bằng 0
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      Thêm cung nối các đỉnh có bậc ra bằng 0 với &beta;
                    </li>
                  </ul>
                  <ul style={{ listStyle: "circle" }}>
                    Người quản lý dự án ( project manager)
                    <li style={{ marginLeft: "15px" }}>
                      <ul style={{ listStyle: "disc" }}>
                        Tổ chức thực hiện công việc như nào để
                        <li style={{ marginLeft: "25px" }}>
                          Thỏa mãn sự phụ thuộc của các công việc
                        </li>
                        <li style={{ marginLeft: "25px" }}>
                          Thời gian hoàn thành dự án ít nhất
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul style={{ listStyle: "disc" }}>
                    Thời điểm bắt đầu sớm nhất ( early start time) của công
                    việc, ký hiệu là t[u]:
                    <li style={{ marginLeft: "15px" }}>
                      Thời điểm sớm nhất có thể bắt đầu công việc u
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      t[&beta;]: thời điểm sớm nhất để hoàn thành dự án
                    </li>
                  </ul>
                  <ul style={{ listStyle: "disc" }}>
                    Tính t[u]
                    <li style={{ marginLeft: "15px" }}>t[&alpha;] = 0</li>
                    <li style={{ marginLeft: "15px" }}>
                      <ul>
                        Xét các đỉnh u theo thứ tự hạng tăng dần ( theo thứ tự
                        topo)
                        <li>
                          t[u] = max&#123;t[x] + d[x]&#125; với x là đỉnh tương
                          ứng với công việc trước của công việc u
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul style={{ listStyle: "disc" }}>
                    Tính T[u]
                    <li style={{ marginLeft: "15px" }}>t[&alpha;] = 0</li>
                    <li style={{ marginLeft: "15px" }}>
                      <ul>
                        Xét các đỉnh u theo thứ tự hạng giảm dần
                        <li>
                          T[u] = min&#123;T[v] - d[u]&#125; với v là đỉnh kề của
                          u
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p>Công việc then chốt ( critical activities): t[u] = T</p>
                  <p>
                    Đường nối các công việc then chốt: đường then chốt (
                    critical path)
                  </p>
                </div>
              </div>
              <div id="C&CKTT" className="mb-6">
                <h2
                  className="text-gray-700 mb-6 text-center"
                  style={{ textAlign: "left" }}
                >
                  Cây & Cây Khung Tối Thiểu
                </h2>
                <div id="CVH" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Cây vô hướng
                  </h3>
                  <ul>
                    Định nghĩa:
                    <li>
                      Cây ( tree): đồ thị vô hướng liên thông và không có chu
                      trình
                    </li>
                    <li>T là cây {"⇒"} T là đồ thị đơn ( simple graph)</li>
                    <li>
                      Đồ thị liên thông tối thiểu ( minimally connected): Đồ thị
                      liên thông nếu xóa một cung bất kỳ thì nó không còn liên
                      thông nữa
                    </li>
                  </ul>
                  <p>Rừng: đồ thị vô hướng, không có chu trình</p>
                  <p>
                    Định lý 1: Đồ thị G là cây {"<=>"} giữa mỗi cặp đỉnh của G
                    có đúng 1 đường đi (path)
                  </p>
                  <p>Định lý 2: Cây có n đỉnh sẽ có n-1 cung</p>
                  <p>Định lý 3: Đồ thị liên thông n đỉnh, n-1 cung là 1 cây</p>
                  <p>
                    Định lý 4: Đồ thị G là cây {"<=>"} G liên thông tối thiểu
                  </p>
                  <p>
                    Định lý 5: Đồ thị có n đỉnh, n-1 cung, không chứa chu trình
                    thì liên thông
                  </p>
                  <p>
                    Định lý 6: Cây có ít nhất 2 đỉnh thì sẽ có ít nhất 2 đỉnh
                    treo ( đỉnh bậc 1)
                  </p>
                  <p>Định lý 7: 1 rừng có n đỉnh, k cây sẽ có n-k cung</p>
                  <ul>
                    Cây khung(spanning tree): cây bao trùm/ cây phủ
                    <li style={{ marginLeft: "15px" }}>
                      G = &lt; V, E &gt; là đồ thị vô hướng liên thông
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      <ul style={{ listStyle: "disc" }}>
                        <li>
                          Đồ thị con T = &lt; V, E &gt; là cây khung của G:
                        </li>
                        <li style={{ marginLeft: "25px" }}>T là cây</li>
                        <li style={{ marginLeft: "25px" }}>
                          Chứa tất cả đỉnh G
                        </li>
                        <li style={{ marginLeft: "25px" }}>Có |V - 1| cung</li>
                      </ul>
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      Đồ thị( liên thông) có thể có nhiều cây khung
                    </li>
                  </ul>
                </div>
                <div id="Kruskal" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Thuật toán Kruskal
                  </h3>
                  <ul style={{ listStyle: "decimal" }}>
                    Thuật toán Kruskal
                    <li style={{ marginLeft: "15px" }}>
                      Sắp xếp các cung của G theo thứ tự trọng số tăng dần
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      Khởi tạo cây T rỗng ( không chứa cung nào cả)
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      <ul style={{ listStyle: "disc" }}>
                        Lần lượt xét từng cung của G ( theo thứ tự đã sắp xếp)
                        <li>
                          Nếu thêm cung e = ( u,v) vào T mà không tạo thành chu
                          trình thì thêm e vào T
                        </li>
                        <li>Ngược lại, bỏ qua cung e</li>
                      </ul>
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      Điều kiện dừng: T có n-1 cung hoặc tất cả các cung của G
                      đều đã được xét
                    </li>
                  </ul>
                </div>
                <div id="Prim" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Thuật toán Prim
                  </h3>
                  <ul style={{ listStyle: "decimal" }}>
                    Thuật toán Prim
                    <li style={{ marginLeft: "15px" }}>Khởi tạo cây T rỗng</li>
                    <li style={{ marginLeft: "15px" }}>
                      Chọn 1 đỉnh u bất kỳ làm đỉnh bắt đầu, đánh dấu nó đã xét
                      ( mark[u] =1), các đỉnh khác đều chưa xét
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      <ul style={{ listStyle: "disc" }}>
                        Lặp n-1
                        <li>
                          Tìm đỉnh v chưa xét, gần với 1 trong các đỉnh u đã xét
                          nhất
                        </li>
                        <li>Thêm cung ( u,v) vào T</li>
                        <li>Đánh dấu v đã xét</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="CCH&CKTT" className="mb-6">
                <h2
                  className="text-gray-700 mb-6 text-center"
                  style={{ textAlign: "left" }}
                >
                  Cây Có Hướng & Cây Khung Tối Thiểu
                </h2>
                <div id="CCH" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Cây có hướng
                  </h3>
                  <ul style={{ listStyle: "decimal" }}>
                    Các tính chất ( định lý): G là cây có hướng gốc r
                    <li style={{ marginLeft: "20px" }}>
                      Tồn tại đỉnh r được nối với mỗi một đỉnh khác bằng một
                      đường đi duy nhất xuất phát từ r
                    </li>
                    <li style={{ marginLeft: "20px" }}>
                      Gần liên thông mạnh và cực tiểu đối với tính chất này
                    </li>
                    <li style={{ marginLeft: "20px" }}>
                      Liên thông và tồn tại một đỉnh r có bậc trong bằng không
                      và bậc trong của những đỉnh khác r là bằng 1
                    </li>
                    <li style={{ marginLeft: "20px" }}>
                      Không có chu trình và tồn tại một đỉnh r có bậc trong bằng
                      không và bậc trong của những đỉnh khác r là bằng 1
                    </li>
                    <li style={{ marginLeft: "20px" }}>
                      Gần liên thông mạnh và không có chu trình
                    </li>
                    <li style={{ marginLeft: "20px" }}>
                      Gần liên thông mạnh và có n-1 cung
                    </li>
                  </ul>
                  <ul>
                    Cây khung có hướng
                    <li style={{ marginLeft: "15px" }}>Cây có hướng</li>
                    <li style={{ marginLeft: "15px" }}>
                      Gồm tất cả các đỉnh của đồ thị G
                    </li>
                    <li>
                      Cây khung có hướng nhỏ nhất: cây khung có hướng có tổng số
                      trọng số các cung nhỏ nhất
                    </li>
                  </ul>
                </div>
                <div id="ChuLiu/Edmonds" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Thuật toán Chu-Liu/Edmonds
                  </h3>
                  <ul style={{ listStyle: "decimal" }}>
                    Pha co
                    <li style={{ marginLeft: "15px" }}>
                      Gọi đồ thị gốc là G<sub>0</sub>, t=0
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      <ul style={{ listStyle: "circle" }}>
                        Lặp
                        <li>
                          Xây dựng đồ thị xấp xỉ H<sub>t</sub> từ G<sub>t</sub>
                        </li>
                        <li style={{ marginLeft: "15px" }}>
                          Nếu H<sub>t</sub> không chứa chu trình {"⇒"} thoát
                          vòng lặp chuyển sang pha giãn
                        </li>
                        <li style={{ marginLeft: "15px" }}>
                          <ul style={{ listStyle: "disc" }}>
                            Ngược lại co G<sub>t</sub> thành G<sub>t+1</sub>
                            <li style={{ marginLeft: "25px" }}>
                              Gom các đỉnh trong chu trình thành đỉnh mới
                            </li>
                            <li style={{ marginLeft: "25px" }}>
                              Điều chỉnh trọng số của các cung có liên quan (
                              cung từ ngoài đi đến 1 đỉnh trong chu trình)
                            </li>
                          </ul>
                        </li>
                        <li style={{ marginLeft: "15px" }}>t = t + 1</li>
                      </ul>
                    </li>
                    <li style={{ marginLeft: "15px" }}>Pha giãn</li>
                    <li style={{ marginLeft: "15px" }}>
                      <ul style={{ listStyle: "disc" }}>
                        Giãn cây khung T<sub>t+1</sub> thành cây khung T
                        <sub>t</sub> của đồ thị G<sub>t</sub>
                        <li style={{ marginLeft: "25px" }}>
                          Mở đỉnh ( được gom lại trong pha co) {"⇒"} chu trình
                        </li>
                        <li style={{ marginLeft: "25px" }}>
                          Điều chỉnh trọng số của cung đi đến chu trình
                        </li>
                        <li style={{ marginLeft: "25px" }}>
                          Xóa bỏ 1 cung trong chu trình
                        </li>
                      </ul>
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      Xây dựng đồ thị xấp xỉ H<sub>t</sub> từ G<sub>t</sub>: Trừ
                      gốc ra, với mỗi đỉnh còn lại giữ 1 cung đi đến nó có trọng
                      số nhỏ nhất ( bỏ các cung khác đi)
                    </li>
                  </ul>
                </div>
              </div>
              <div id="LCĐTM" className="mb-6">
                <h2
                  className="text-gray-700 mb-6 text-center"
                  style={{ textAlign: "left" }}
                >
                  Luồng Cực Đại Trong Mạng
                </h2>
                <div id="LTM" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Luồng ( trên mạng)
                  </h3>
                  <ul style={{ listStyle: "circle" }}>
                    ( Network) Flow: thứ lưu thông trên mạng
                    <li style={{ marginLeft: "15px" }}>
                      Một luồng đi từ đỉnh phát ( s) đến đỉnh thu ( t) là 1 hàm
                      f: ( u,v) {"->"}
                      f(u,v)
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      <ul style={{ listStyle: "disc" }}>
                        Thỏa mãn các điều kiện sao
                        <li style={{ marginLeft: "25px" }}>
                          Với mỗi cung: 0 &lt;= f( u,v) &lt;= c(u,v)
                        </li>
                        <li style={{ marginLeft: "25px" }}>
                          Với mỗi đỉnh khác s và t: tổng luồng vào = tổng luồng
                          ra
                        </li>
                        <li style={{ marginLeft: "25px" }}>
                          Tổng luồng ra khỏi s = tổng luồng vào t
                        </li>
                      </ul>
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      Giá trị luồng |f| = tổng luồng ra khỏi s
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      Luồng cực đại: Cho mạng N = &lt;V, E, s, t, c&gt;, tìm
                      luồng f (từ s đến t) có giá trị luồng |f| lớn nhất
                    </li>
                  </ul>
                </div>
                <div id="LC" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Lát Cắt
                  </h3>
                  <p>Một lát cắt tách s và t,( gọi là: s-t cut)</p>
                  <p>
                    Các cung của một lát cắt (tách s và t): Tập các cung xuất
                    phát từ S đi đến T {"{"}(u, v) | u ∈ S và v ∈ T{"}"}
                  </p>

                  <p>
                    Khả năng thông qua của 1 lát cắt ( tách s và t): c( S, T) =
                    &sum; c( u, v)
                  </p>
                </div>
                <div id="L&LC" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Luồng & Lát Cắt
                  </h3>
                  <ul style={{ listStyle: "circle" }}>
                    Bổ đề 1
                    <li style={{ marginLeft: "15px" }}>
                      <ul style={{ listStyle: "disc" }}>
                        Nếu gọi
                        <li style={{ marginLeft: "25px" }}>
                          f là luồng đi qua mạng N
                        </li>
                        <li style={{ marginLeft: "25px" }}>
                          ( S, T) là 1 lát cắt tách s và t
                        </li>
                      </ul>
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      <ul style={{ listStyle: "disc" }}>
                        Thì
                        <li style={{ marginLeft: "25px" }}>
                          Luồng đi qua lát cắt = luồng ra khỏi s = luồng đi vào
                          t
                        </li>
                        <li style={{ marginLeft: "25px" }}>
                          Tổng luồng đi ra khỏi S = Tổng luồng vào S = Giá trị
                          luồng
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul style={{ listStyle: "circle" }}>
                    Bổ đề 2
                    <li style={{ marginLeft: "15px" }}>
                      <ul style={{ listStyle: "disc" }}>
                        Nếu gọi
                        <li style={{ marginLeft: "25px" }}>
                          f là luồng đi qua mạng N
                        </li>
                        <li style={{ marginLeft: "25px" }}>
                          ( S, T) là 1 lát cắt tách s và t
                        </li>
                      </ul>
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      <ul style={{ listStyle: "disc" }}>
                        Thì
                        <li style={{ marginLeft: "25px" }}>
                          Giá trị luồng không vượt quá khả năng thông qua của
                          lát cắt: |f| &le; c(S, T)
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul style={{ listStyle: "circle" }}>
                    Hệ quả
                    <li style={{ marginLeft: "15px" }}>
                      <ul style={{ listStyle: "disc" }}>
                        Gọi
                        <li style={{ marginLeft: "25px" }}>
                          f là luồng đi qua mạng N
                        </li>
                        <li style={{ marginLeft: "25px" }}>
                          ( S, T) là 1 lát cắt tách s và t
                        </li>
                      </ul>
                    </li>
                    <li style={{ marginLeft: "25px" }}>
                      Nếu |f| = c( S, T) thì f là luồng lớn nhất ( luồng cực
                      đại) và ( S, T) là lát cắt hẹp nhất
                    </li>
                  </ul>
                  <p>
                    Định lý luồng cực đại lát cắt hẹp nhất ( Ford - Fulkerson,
                    1956): Giá trị luồng cực đại = khả năng thông qua của lát
                    cắt hẹp nhất
                  </p>
                </div>
                <div id="Ford-Fulkerson" className="mb-6">
                  <h3
                    className="text-gray-700  text-center"
                    style={{ textAlign: "left" }}
                  >
                    Thuật Toán Ford - Fulkerson
                  </h3>
                  <ul style={{ listStyle: "disc" }}>
                    Ý tưởng: tìm lát cắt hẹp nhất bằng cách tăng luồng đi qua
                    mạng
                    <li style={{ marginLeft: "15px" }}>
                      Khởi tạo 1 luồng hợp lệ ( thường là luồng có giá trị bằng
                      0)
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      Tìm cách tăng luồng đi qua mạng cho đến khi bị ngẽn {"⇒"}{" "}
                      lát cắt hẹp nhất {"⇒"} giá trị luồng cực đại
                    </li>
                  </ul>
                  <ul style={{ listStyle: "disc" }}>
                    Tìm đường tăng luồng ( augmenting path)
                    <li style={{ marginLeft: "15px" }}>
                      Tìm đường đi từ s đến t sao cho có thể tăng thêm luồng
                      trên đường đi đó
                    </li>
                    <li style={{ marginLeft: "15px" }}>
                      Tìm cách tăng luồng đi qua mạng cho đến khi bị ngẽn {"=>"}{" "}
                      lát cắt hẹp nhất {"=>"} giá trị luồng cực đại
                    </li>
                  </ul>
                </div>
                <p style={{ textAlign: "right" }}>
                  (Nguồn tham khảo: Giáo Trình Lý Thuyết Đồ Thị - Biên soạn:
                  PGS.TS Phạm Nguyên Khang)
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Tainguyenhoctap;
