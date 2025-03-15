import { useEffect } from "react";
import updateMenuHeight from "../tool/adjustHeightMenu.js";
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
    updateMenuHeight();
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

        <main className="p-2 fullmain gap-3 ">
          <div className="menu">
          <nav className=" p-8" id="menutainguyenhoctap">
            <div>
              <Link to="/tainguyenhoctap#PCB">
                <h2>PHẦN CƠ BẢN</h2>
              </Link>
              <div>
                <ul>
                  <Link to="/tainguyenhoctap#DN&PL">
                    I. ĐỊNH NGHĨA VÀ PHÂN LOẠI
                  </Link>
                  <li>
                    <Link to="/tainguyenhoctap#DN">ĐỊNH NGHĨA</Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#BCDT">BẬC CỦA ĐỒ THỊ</Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#MSDTDB">
                      MỘT SỐ ĐỒ THỊ ĐẶC BIỆT
                    </Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#SDCCDT">
                      SỰ ĐẲNG CẤU CỦA ĐỒ THỊ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <Link to="/tainguyenhoctap#DDT">II. DUYỆT ĐỒ THỊ</Link>
                  <li>
                    <Link to="/tainguyenhoctap#DFS">
                      DUYỆT ĐỒ THỊ THEO CHIỀU SÂU
                    </Link>
                  </li>
                  <li>
                    <Link to="/tainguyenhoctap#DFSDQ">
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
                  <Link to="/tainguyenhoctap#TLTDT">
                    III. TÍNH LIÊN THÔNG CỦA ĐỒ THỊ
                  </Link>
                  <li>
                    <Link to="/tainguyenhoctap#DNLT">ĐỊNH NGHĨA</Link>
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
                    <Link to="/tainguyenhoctap#KTPD">
                      KIỂM TRA ĐỒ THỊ PHÂN ĐÔI
                    </Link>
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
                    <Link to="/tainguyenhoctap#DTTS">
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
                    <Link to="/tainguyenhoctap#XHDT">
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
                    <Link to="/tainguyenhoctap#LTM">LUỒNG (TRÊN MẠNG)</Link>
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
          </div>
          <section className="max-w-7xl mx-auto bg-white p-10 rounded-lg shadow-lg w-[80%]">
            <div id="PCB" className="mb-4">
              <h1>PHẦN CƠ BẢN</h1>
              <div id="DN&PL" className="mb-4">
                <h2 className="font-bold mb-4 text-left">
                  I. Định Nghĩa & Phân Loại
                </h2>
                <div id="DN">
                  <h3 className="font-bold">Định Nghĩa</h3>
                  <p><strong>Đồ thị (Graph)</strong> là một bộ đôi &lt;V, E&gt;, trong đó:</p>
                  <ul className="list-disc ml-4">
                    <li>V: tập các đỉnh (Vertex set)</li>
                    <li>
                      E: tập các cung (Edge Set), mỗi cung nối 2 đỉnh trong V
                    </li>
                  </ul>
                </div>
                <div className="mb-4" id="BCDT">
                  <h3 className="font-bold">Bậc của đồ thị</h3>
                  <ul className="list-disc ml-4">
                    <li>
                      Định lý 1 (định lý bắt tay): Tổng bậc của tất cả các đỉnh
                      trong một đồ thị bằng 2 lần số cung
                    </li>
                    <li>
                      Định lý 2: Số đỉnh bậc lẻ của một đồ thị vô hướng là số
                      chẵn
                    </li>
                    <li>
                      Định lý 3 (Cho một đồ thị có hướng): Tổng bậc vào = Tổng
                      bậc ra = Tổng số cung
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-4" id="MSDTDB">
                <h3 className="font-bold mb-4 ">Một Số Đồ Thị Đặc Biệt</h3>
                <div>
                  <p><strong>Clique</strong></p>
                  <ul className="mb-4 list-disc ml-4">
                    <li>
                      Clique trên đồ thị vô hướng là tập các đỉnh mà chúng đôi
                      một kề nhau
                    </li>
                    <li>
                      Clique tối đại (maximal clique): là một clique không thể
                      thêm vào nó bất cứ đỉnh nào nữa
                    </li>
                    <li>
                      Clique lớn nhất (maximum clique): L là Clique có nhiều
                      phần tử nhất trong đồ thị
                    </li>
                  </ul>
                  <p><strong>Đồ thị đầy đủ (complete graph)</strong></p>
                  <ul className="mb-4 list-disc ml-4">
                    <li>Đơn đồ thị vô hướng</li>
                    <li>Mỗi cặp đỉnh đều có đúng 1 cung</li>
                  </ul>
                  <p><strong>Đồ thị phân đôi (bipartite graph/bigraph)</strong></p>
                  <ul className="list-disc ml-4">
                    <li>Tập đỉnh được chia thành 2 tập không giao nhau</li>
                    <li>Mỗi cung nối 1 đỉnh trong U và 1 đỉnh trong V</li>
                  </ul>
                  <p><strong>Đồ thị phân đôi đầy đủ</strong></p>
                  <ul className="list-disc ml-4">
                    <li>Còn gọi là đồ thị 2 clique</li>
                    <li>
                      Mỗi đỉnh của phần này nối với tất cả các đỉnh của phần kia
                    </li>
                  </ul>
                  <p><strong>Đồ thị vô hướng nền</strong></p>
                  <ul className="list-disc ml-4">
                    <li>
                      Là đồ thị vô hướng sau khi đã loại bỏ hướng của các cạnh
                    </li>
                    <li>
                      Đồ thị có hướng và đồ thị vô hướng nền của nó có cùng số
                      cạnh
                    </li>
                  </ul>
                  <p><strong>Đồ thị con</strong></p>
                  <ul className="list-disc ml-4">
                    <li>
                      Đồ thị con G<sub>s</sub> = &lt;V<sub>s</sub>, E
                      <sub>s</sub>&gt;, V<sub>s</sub>
                      {"⊂"} V, E<sub>s</sub> {"⊂"} E được xây dựng từ G là đồ
                      thị có được sau khi loại bỏ các cung không thuộc E
                      <sub>s</sub>
                    </li>
                  </ul>
                </div>
                <div className="mb-4" id="SDCCDT">
                  <h3 className="font-bold ">Sự đẳng cấu của đồ thị</h3>
                  <p>
                    2 đồ thị G<sub>1</sub> = &lt;V<sub>1</sub>, E<sub>1</sub>
                    &gt; và G<sub>2</sub> = &lt;V<sub>2</sub>, E<sub>2</sub>&gt;
                    được gọi là đẳng cấu với nhau nếu tồn tại một song ánh f: V
                    <sub>1</sub>
                    {" → "} V<sub>2</sub>, v<sub>2</sub> = f(v<sub>1</sub>) ∈ V
                    <sub>2</sub> sao cho: (x, y) ∈ E<sub>1</sub> {"<=>"} (f(x),
                    f(y)) ∈ V<sub>2</sub>
                  </p>
                </div>
              </div>
              <div id="DDT" className="mb-4">
                <h2 className="font-bold mb-4 text-left">II. Duyệt Đồ Thị</h2>
                <div className="mb-4" id="DFS">
                  <h3 className="font-bold ">
                    Duyệt đồ thị theo chiều sâu (Thuật toán DFS)
                  </h3>
                  <pre>
                    <code>
                      {`1. Đưa 1 đỉnh s bất kỳ vào ngăn xếp
2. While (ngăn xếp chưa rỗng) do
   2.1. Lấy 1 đỉnh ở đỉnh ngăn xếp
   2.2. if (u đã duyệt) continue;
   2.3. Duyệt u (vd: in u ra màn hình)
   2.4. Đánh dấu u đã duyệt
   2.5. for (các đỉnh kề của u) do { đưa v vào ngăn xếp }`}
                    </code>
                  </pre>
                </div>
                <div className="mb-4" id="DFSDQ">
                  <h3 className="font-bold ">
                    Duyệt đồ thị theo chiều sâu bằng đệ quy
                  </h3>
                  <pre>
                    <code>
                      {`1. if (u đã duyệt) return;
2. Đánh dấu u đã duyệt
3. for (các đỉnh kề v của u) do { gọi đệ quy(v) }`}
                    </code>
                  </pre>
                </div>
                <div className="mb-4" id="BFS">
                  <h3 className="font-bold ">
                    Duyệt đồ thị theo chiều rộng (Thuật toán BFS)
                  </h3>
                  <pre>
                    <code>
                      {`1. Đưa 1 đỉnh s bất kỳ vào hàng đợi
2. While (hàng đợi chưa rỗng) do
   2.1. Lấy 1 đỉnh ở đầu hàng đợi
   2.2. if (u đã duyệt) continue;
   2.3. Duyệt u (vd: in u ra màn hình)
   2.4. Đánh dấu u đã duyệt
   2.5. for (các đỉnh kề của u) do { đưa v vào hàng đợi }`}
                    </code>
                  </pre>
                </div>
              </div>
              <div id="TLTDT" className="mb-4">
                <h2 className="font-bold mb-4 text-left">
                  III. Tính Liên Thông Của Đồ Thị
                </h2>
                <div id="DNLT" className="mb-4">
                  <h3 className="font-bold ">Định Nghĩa</h3>
                  <ul className="list-disc ml-4">
                    <li>
                      Đồ thị vô hướng G được gọi là liên thông nếu và chỉ nếu
                      với mọi cặp đỉnh u, v ∈ V luôn tồn tại đường đi (walk) từ
                      u {"→"} v. Ngược lại, G được gọi là không liên thông.
                    </li>
                    <li>
                      Đỉnh u được gọi là liên thông với đỉnh v {"<=>"} tồn tại
                      đường đi từ u {"→"} v.
                    </li>
                    <li>
                      Quan hệ liên thông trên G là tập các cặp có thứ tự (u, v)
                      sao cho u liên thông với v.
                    </li>
                    <li>
                      Các bộ phận liên thông của đồ thị G là tập các đồ thị con
                      liên thông lớn nhất của G (là các lớp tương đương của quan
                      hệ liên thông)
                    </li>
                    <li>
                      Đỉnh cô lập (có bậc bằng 0) cũng là một bộ phận liên thông
                      chỉ gồm chính nó và được gọi là bộ phận liên thông tầm
                      thường (trivial connected component)
                    </li>
                  </ul>
                </div>
                <div id="SCC" className="mb-4">
                  <h3 className="font-bold ">
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
              <div id="DC" className="mb-4">
                <h2 className="font-bold mb-4 text-left">
                  IV. Duyệt đồ thị và ứng dụng
                </h2>
                <div id="KTCT" className="mb-4">
                  <h3 className="font-bold ">Kiểm tra đồ thị chứa chu trình</h3>
                  <p><strong>Thuật toán kiểm tra đồ thị chứa chu trình</strong></p>
                  <ul className="mb-4 ml-4">
                    <li className="ml-1">
                      <p>Trạng thái của đỉnh</p>
                      <ul className="list-disc ml-4">
                        <li className="ml-2">
                          Chưa duyệt: chưa đụng tới nó (TRẮNG/WHITE)
                        </li>
                        <li className="ml-2">
                          Đang duyệt: đang duyệt nó nhưng chưa duyệt hết kề của
                          nó (XÁM/GRAY)
                        </li>
                        <li className="ml-2">
                          Đã duyệt xong: duyệt nó và đã duyệt hết các kề của nó
                          (ĐEN/BLACK)
                        </li>
                      </ul>
                    </li>
                    <li className="ml-1">
                      <p>Thuật toán:</p>
                      <ul className="list-disc ml-4">
                        <li className="ml-2">
                          DFS + tô màu các đỉnh trong quá trình duyệt
                        </li>
                        <li className="ml-2">
                          Nếu khi xét 1 đỉnh kề v của u mà v có màu xám {"=>"}{" "}
                          tạo chu trình
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div id="KTPD" className="mb-4">
                  <h3 className="font-bold ">Kiểm tra đồ thị phân đôi</h3>
                  <p><strong>Thuật toán kiểm tra đồ thị phân đôi</strong></p>
                  <ul className="mb-4 ml-4">
                    <li className="ml-1">
                      Duyệt đồ thị + tô màu các đỉnh bằng 1 trong 2 màu (XANH,
                      ĐỎ). Hai đỉnh kề nhau có màu khác nhau.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div id="PNC" className="mb-4">
              <h1>PHẦN NÂNG CAO</h1>
              <div id="EULER&HAMILTON" className="mb-4">
                <h2 className="font-bold mb-4 text-left">
                  I. Đồ Thị Euler & Đồ Thị Hamilton
                </h2>
                <div id="EULER" className="mb-4">
                  <h3 className="font-bold">Đồ thị Euler</h3>
                  <p>
                   <strong>Chu trình Euler (Euler circuit) </strong>trong đồ thị G là một chu
                    trình đơn cung chứa tất cả các cung của G
                  </p>
                  <p>
                    <strong>Đường đi Euler (Euler path)</strong>  trong đồ thị G là đường đi đơn
                    cung chứa tất cả các đỉnh của G
                  </p>
                  <div>
                    <p><strong>Định lý Euler:</strong></p>
                    <ul className="list-disc pl-4 ml-4">
                      <li>
                        Đa đồ thị (vô hướng) liên thông có ít nhất 2 đỉnh có chu
                        trình Euler khi và chỉ khi tất cả các đỉnh của nó đều có
                        bậc chẵn
                      </li>
                      <li>
                        Đa đồ thị (vô hướng) liên thông có đường đi Euler (nhưng
                        không có chu trình Euler) khi và chỉ khi nó có đúng 2
                        đỉnh bậc lẻ
                      </li>
                    </ul>
                    <p>
                     <strong> Thuật toán Fleury xây dựng chu trình Euler</strong>
                    </p>
                    <ul className="list-disc pl-4  ml-4">
                      <li>Chọn 1 đỉnh bất kỳ</li>
                      <li>
                        Chọn tiếp các cung liên tiếp cho đến khi tạo thành chu
                        trình. Mỗi khi 1 cung được chọn, xóa nó ra khỏi đồ thị
                      </li>
                      <li>
                        Các cung được chọn sao cho đỉnh đầu của cung mới là đỉnh
                        cuối của cung cũ và nó không phải là cầu (Cầu: xóa bỏ
                        cung này sẽ làm đồ thị mất liên thông) trừ phi không có
                        lựa chọn khác
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="HAMILTON" className="mb-4">
                  <h3 className="font-bold ">Đồ thị Hamilton</h3>

                  <p><strong>Chu trình Hamilton (Hamilton circuit)</strong></p>
                  <ul className="list-disc ml-4">
                    <li>
                      Chu trình đơn đỉnh (simple circuit) đi qua các đỉnh của đồ
                      thị, mỗi đỉnh đúng 1 lần (trừ đỉnh xuất phát)
                    </li>
                  </ul>
                  <p><strong>Đường đi Hamilton (Hamilton path)</strong></p>
                  <ul className="list-disc ml-4">
                    <li>
                      Đường đi đơn đỉnh (simple path) đi qua các đỉnh của đồ thị
                      G, mỗi đỉnh đúng 1 lần
                    </li>
                  </ul>
                </div>
              </div>

              <div id="TDDNN" className="mb-4">
                <h2 className="font-bold mb-4 text-left">
                  II. Tìm Đường Đi Ngắn Nhất
                </h2>
                <div id="DTTS" className="mb-4">
                  <h3>Biểu diễn đồ thị có trọng số</h3>
                  <p>
                    Có thể mở rộng các phương pháp biểu diễn đồ thị trước đây để
                    biểu diễn đồ thị có trọng số
                  </p>
                  <p><strong>Ma trận kề (Ma trận trọng số)</strong></p>
                  <ul className="list-disc ml-4">
                    <li>Nếu có (u, v) thì W[u][v] = trọng số cung (u, v)</li>
                    <li>
                      Nếu không có (u, v) thì W[u][v] = NO_EDGE (ví dụ: -1)
                    </li>
                  </ul>
                  <p><strong>Danh sách cung</strong></p>
                  <ul className="list-disc ml-4">
                    <li>Mỗi cung lưu trữ: đỉnh đầu, đỉnh cuối và trọng số</li>
                  </ul>
                </div>
                <div id="DDNN" className="mb-4">
                  <h3 className="font-bold ">Đường đi ngắn nhất</h3>
                  <p><strong>Đường đi ngắn nhất (shortest path)</strong></p>
                  <ul className="list-disc ml-4">
                    <li>
                      Chiều dài/ chi phí (cost) của đường đi (path) là tổng các
                      trọng số của các cung trên đường đi
                    </li>
                    <li>
                      Đường đi ngắn nhất (shortest path) là đường đi có chiều
                      dài nhỏ nhất
                    </li>
                  </ul>
                  <p>
                    <strong>Một đoạn đường đi (sub-path)</strong> của đường đi ngắn nhất cũng là
                    đường đi ngắn nhất
                  </p>
                  <ul className="list-disc ml-4">
                    <li>
                      Tính chất cấu trúc con tối ưu (optimal substructure) ⇒ có
                      thể áp dụng kỹ thuật quy hoạch động để thiết kế các giải
                      thuật tìm đường đi ngắn nhất
                    </li>
                  </ul>
                </div>
                <div id="MOORE-DIJKSTRA" className="mb-4">
                  <h3 className="font-bold ">Thuật toán Moore - Dijkstra</h3>

                  <p>
                    Tìm đường đi ngắn nhất từ 1 đỉnh đến các đỉnh khác trên đồ
                    thị có trọng số (single source shortest path problem - SSSP)
                  </p>

                  <p><strong>Điều kiện áp dụng:</strong></p>
                  <ul className="list-disc ml-4">
                    <li>Đồ thị có trọng số không âm</li>
                    <li>Có hướng hoặc vô hướng đều được</li>
                  </ul>

                  <p><strong>Ý tưởng chính:</strong></p>
                  <ul className="list-disc ml-4">
                    <li>Khởi tạo đường đi trực tiếp từ s đến các đỉnh</li>
                    <li>
                      Lần lượt cập nhật lại đường đi nếu tìm được đường đi mới
                      tốt hơn đường đi cũ
                    </li>
                  </ul>
                  <p><strong>Gọi đỉnh bắt đầu là s</strong></p>
                  <p><strong>Các biến hỗ trợ:</strong></p>
                  <ul className="list-disc ml-4">
                    <li>
                      pi[u]: chiều dài đường đi ngắn nhất (tạm thời) từ s đến u
                    </li>
                    <li>
                      p[u]: đỉnh trước đỉnh u trên đường đi ngắn nhất (tạm thời)
                      từ s đến u
                    </li>
                    <li>
                      mark[u]: đánh dấu đỉnh u (đã tìm được đường đi ngắn nhất
                      đến u)
                    </li>
                  </ul>
                  <p><strong>Giải thuật:</strong></p>
                  <ul className="list-disc ml-4">
                    <p>1. Khởi tạo:</p>
                    <ul className="list-disc ml-4">
                      <li>pi[u] = oo với mọi u, p[u] = -1 với mọi u</li>
                      <li>pi[s] = 0</li>
                      <li>mark[u] = 0 với mọi u</li>
                    </ul>
                    <p>2. Lặp n-1:</p>
                    <ul className="list-disc ml-4">
                      <li>Chọn đỉnh chưa đánh dấu và có pi[u] nhỏ nhất</li>
                      <li>Đánh dấu u</li>
                      <li>
                        Xét các đỉnh kề v (chưa đánh dấu) của u để cập nhật
                        đường đi nếu đường đi qua u rồi đến v tốt hơn đường đi
                        cũ
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div id="TOPO&UD" className="mb-4">
                <h2 className="font-bold mb-4 text-left">
                  III. Thứ Tự Topo & Ứng Dụng
                </h2>
                <div id="TOPO" className="mb-4">
                  <h3 className="font-bold ">Thứ tự topo</h3>
                  <p>
                    <strong>Thứ tự topo</strong> (topological order) của các đỉnh trên đồ thị có
                    hướng G là một cách sắp xếp thứ tự các đỉnh của G sao cho
                    với mọi cung (u, v), đỉnh gốc u phải đứng trước đỉnh ngọn v.
                  </p>
                  <p>
                    <strong>Sắp xếp topo (topological ordering/sort):</strong> sắp xếp các đỉnh
                    theo thứ tự topo.
                  </p>
                  <p><strong>Đồ thị có hướng không chu trình (DAG)</strong></p>
                  <ul className="list-disc ml-4">
                    <li>Có hướng</li>
                    <li>Không chứa chu trình</li>
                    <li>Tồn tại ít nhất 1 thứ tự topo</li>
                  </ul>
                  <h3 className="font-bold mt-4">
                    Thuật toán sắp xếp topo dựa trên BFS
                  </h3>
                  <p><strong>1. Khởi tạo:</strong></p>
                  <ul className="list-disc ml-4">
                    <li>Tính bậc vào của các đỉnh, d[u]</li>
                    <li>Hàng đợi Q chứa các đỉnh có bậc vào = 0</li>
                    <li>Danh sách L ban đầu rỗng</li>
                  </ul>
                  <p><strong>2. Lặp:</strong></p>
                  <ul className="list-decimal ml-8">
                    <li>Trong khi Q không rỗng:</li>
                    <ul className="list-decimal">
                      <li className="ml-4">
                        Lấy phần tử đầu hàng đợi Q, gọi là u
                      </li>
                      <li className="ml-4">Thêm u vào danh sách L</li>
                      <li className="ml-4">Giảm bậc vào của các đỉnh kề v</li>
                      <li className="ml-4">
                        Nếu bậc vào của v = 0, thêm v vào Q
                      </li>
                    </ul>
                  </ul>
                </div>
                <div id="XHDT" className="mb-4">
                  <h3>Xếp hạng các đỉnh của đồ thị</h3>
                  <p>
                    <strong>Gốc/ nguồn (root/ source) của đồ thị</strong>
                  </p>
                  <ul className="list-disc ml-4">
                    <li>Đỉnh không có cung đi vào (indegree = 0)</li>
                    <li>DAG có ít nhất 1 gốc</li>
                  </ul>
                  <p><strong>Hạng (rank) của một đỉnh</strong></p>
                  <ul className="list-disc ml-4">
                    <li>u là gốc, rank[u] = 0</li>
                    <li>
                      Ngược lại, rank[u] = số cung trên đường đi dài nhất từ gốc
                      đến u
                    </li>
                  </ul>
                  <p>
                    <strong>Thuật toán xếp hạng đồ thị (dựa trên BFS):</strong>
                  </p>
                  <ul className="list-decimal ml-4">
                    <li>Xếp hạng cho (các) gốc (hạng 0)</li>
                    <li>Loại bỏ gốc ra khỏi đồ thị ⇒ xuất hiện gốc mới</li>
                    <li>Xếp hạng cho gốc mới (hạng 1)</li>
                    <li>Tiếp tục loại bỏ gốc và xếp hạng cho gốc mới...</li>
                  </ul>
                </div>
                <div id="QLDA" className="mb-4">
                  <h3 className="font-bold ">Quản lý dự án</h3>
                  <h4 className="font-bold  mt-4">Dự án (project):</h4>
                  <ul className="list-disc pl-4">
                    <li>
                      Danh sách công việc (activities/tasks), mỗi công việc có
                      thời gian hoàn thành
                    </li>
                    <li>Có sự phụ thuộc giữa các công việc</li>
                  </ul>
                  <h4 className="font-bold  mt-4">Vấn đề:</h4>
                  <ul className="list-disc pl-4">
                    <li>Kế hoạch thực hiện các công việc</li>
                    <li>Ước tính thời gian hoàn thành</li>
                  </ul>
                  <h4 className="font-bold  mt-4">Mô hình hóa đồ thị:</h4>
                  <ul className="list-disc pl-4">
                    <li>Công việc ⇒ Đỉnh</li>
                    <li>Sự phụ thuộc ⇒ Cung</li>
                    <li>Thời gian hoàn thành công việc ⇒ Trọng số đỉnh</li>
                    <li>Thêm 2 đỉnh giả: α & β</li>
                    <li>
                      Thêm cung từ α đến các đỉnh có bậc vào 0, từ các đỉnh có
                      bậc ra 0 đến β
                    </li>
                  </ul>
                  <h4 className="font-bold  mt-4">
                    Thời điểm bắt đầu sớm nhất (early start time):
                  </h4>
                  <ul className="list-disc pl-4">
                    <li>
                      Ký hiệu t[u]: thời điểm sớm nhất để bắt đầu công việc u
                    </li>
                    <li>t[β]: thời điểm sớm nhất để hoàn thành dự án</li>
                  </ul>
                  <h4 className="font-bold  mt-4">Tính toán t[u]:</h4>
                  <ul className="list-disc pl-4">
                    <li>t[α] = 0</li>
                    <li>
                      Xét các đỉnh theo thứ tự topo, tính t[u] = max(t[x] +
                      d[x]) với x là công việc trước của u
                    </li>
                  </ul>
                  <h4 className="font-bold  mt-4">Tính toán T[u]:</h4>
                  <ul className="list-disc pl-4">
                    <li>Xét các đỉnh theo thứ tự giảm dần</li>
                    <li>T[u] = min(T[v] - d[u]) với v là đỉnh kề của u</li>
                  </ul>
                  <p>Công việc then chốt (critical activities): t[u] = T[u]</p>
                  <p>
                    Đường then chốt (critical path) là đường nối các công việc
                    then chốt
                  </p>
                </div>
              </div>

              <div id="C&CKTT" className="mb-4">
                <h2 className="font-bold mb-4 text-left">
                  IV. Cây & Cây Khung Tối Thiểu
                </h2>
                <div id="CVH" className="mb-4">
                  <h3 className="font-bold ">Cây vô hướng</h3>
                  <p><strong>Định nghĩa:</strong></p>
                  <ul className="list-disc ml-4">
                    <li>
                      Cây (tree): đồ thị vô hướng liên thông và không có chu
                      trình.
                    </li>
                    <li>T là cây ⇒ T là đồ thị đơn (simple graph).</li>
                    <li>
                      Đồ thị liên thông tối thiểu: Đồ thị liên thông, nếu xóa
                      một cung bất kỳ thì nó không còn liên thông nữa.
                    </li>
                  </ul>
                  <p>
                    <strong>Rừng:</strong> đồ thị vô hướng, không có chu trình.
                  </p>
                  <h4 className="font-bold mt-4">Định lý</h4>
                  <ul className="list-disc pl-4">
                    <li>
                      Định lý 1: Đồ thị G là cây ⇄ giữa mỗi cặp đỉnh có đúng 1
                      đường đi.
                    </li>
                    <li>Định lý 2: Cây có n đỉnh sẽ có n-1 cung.</li>
                    <li>
                      Định lý 3: Đồ thị liên thông n đỉnh, n-1 cung là 1 cây.
                    </li>
                    <li>
                      Định lý 4: Đồ thị G là cây ⇄ G liên thông tối thiểu.
                    </li>
                    <li>
                      Định lý 5: Đồ thị có n đỉnh, n-1 cung, không chứa chu
                      trình thì liên thông.
                    </li>
                    <li>
                      Định lý 6: Cây có ít nhất 2 đỉnh thì sẽ có ít nhất 2 đỉnh
                      treo (đỉnh bậc 1).
                    </li>
                    <li>Định lý 7: 1 rừng có n đỉnh, k cây sẽ có n-k cung.</li>
                  </ul>
                </div>
                <div id="Kruskal" className="mb-4">
                  <h3>Thuật toán Kruskal</h3>
                  <ul className="list-decimal ml-4">
                    <li>Sắp xếp các cung của G theo trọng số tăng dần.</li>
                    <li>Khởi tạo cây T rỗng.</li>
                    <li>
                      Lần lượt xét từng cung, thêm vào T nếu không tạo chu
                      trình.
                    </li>
                    <li>
                      Điều kiện dừng: T có n-1 cung hoặc tất cả các cung đã được
                      xét.
                    </li>
                  </ul>
                </div>
                <div id="Prim" className="mb-4">
                  <h3 className="font-bold">Thuật toán Prim</h3>
                  <ul className="list-decimal ml-4">
                    <li>Khởi tạo cây T rỗng.</li>
                    <li>Chọn 1 đỉnh u bất kỳ làm đỉnh bắt đầu.</li>
                    <li>
                      Lặp n-1 lần:
                      <ul className="list-disc pl-6">
                        <li>
                          Tìm đỉnh v chưa xét, gần với các đỉnh đã xét nhất.
                        </li>
                        <li>Thêm cung (u, v) vào T.</li>
                        <li>Đánh dấu v đã xét.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="CCH&CKTT" className="mb-4">
                <h2 className="font-bold mb-4 text-left">
                  V. Cây Có Hướng & Cây Khung Tối Thiểu
                </h2>
                <div id="CCH" className="mb-4">
                  <h3 className="font-bold ">Cây có hướng</h3>
                  <ul className="list-decimal pl-6">
                    <li>
                      Tồn tại một đỉnh r được nối với mỗi đỉnh khác bằng một
                      đường đi duy nhất xuất phát từ r.
                    </li>
                    <li>
                      Gần liên thông mạnh và cực tiểu đối với tính chất này.
                    </li>
                    <li>
                      Liên thông, tồn tại một đỉnh r có bậc trong bằng không, và
                      các đỉnh khác có bậc trong bằng 1.
                    </li>
                    <li>
                      Không có chu trình, tồn tại một đỉnh r có bậc trong bằng
                      không, và các đỉnh khác có bậc trong bằng 1.
                    </li>
                    <li>Gần liên thông mạnh và không có chu trình.</li>
                    <li>Gần liên thông mạnh và có n-1 cung.</li>
                  </ul>
                  <h4 className="font-bold  mt-4">Cây khung có hướng</h4>
                  <ul className="list-disc pl-4">
                    <li>Là một cây có hướng.</li>
                    <li>Gồm tất cả các đỉnh của đồ thị G.</li>
                    <li>
                      Cây khung có hướng nhỏ nhất: có tổng trọng số nhỏ nhất.
                    </li>
                  </ul>
                </div>
                <div id="ChuLiu/Edmonds" className="mb-4">
                  <h3 className="font-bold ">Thuật toán Chu-Liu/Edmonds</h3>
                  <h4 className="font-bold  mt-4">Pha co</h4>
                  <ul className="list-decimal pl-6">
                    <li>Gọi đồ thị gốc là G₀, đặt t = 0.</li>
                    <li>
                      Lặp:
                      <ul className="list-disc pl-6">
                        <li>Xây dựng đồ thị xấp xỉ Hₜ từ Gₜ.</li>
                        <li>
                          Nếu Hₜ không chứa chu trình → chuyển sang pha giãn.
                        </li>
                        <li>
                          Ngược lại, co Gₜ thành Gₜ₊₁:
                          <ul className="list-disc pl-6">
                            <li>
                              Gom các đỉnh trong chu trình thành một đỉnh mới.
                            </li>
                            <li>Điều chỉnh trọng số của các cung liên quan.</li>
                          </ul>
                        </li>
                        <li>Tăng t lên 1.</li>
                      </ul>
                    </li>
                  </ul>
                  <h4 className="font-bold  mt-4">Pha giãn</h4>
                  <ul className="list-disc pl-6">
                    <li>Giãn cây khung Tₜ₊₁ thành cây khung Tₜ.</li>
                    <li>Mở đỉnh bị gom lại → khôi phục chu trình.</li>
                    <li>Điều chỉnh trọng số của cung đi đến chu trình.</li>
                    <li>Xóa một cung trong chu trình.</li>
                    <li>
                      Xây dựng đồ thị xấp xỉ Hₜ từ Gₜ bằng cách giữ cung có
                      trọng số nhỏ nhất với mỗi đỉnh (trừ gốc).
                    </li>
                  </ul>
                </div>
              </div>

              <div id="CCH&CKTT" className="mb-4">
                <h2 className="font-bold mb-4 text-left">
                  V. Cây Có Hướng & Cây Khung Tối Thiểu
                </h2>
                <div id="CCH" className="mb-4">
                  <h3>Cây có hướng</h3>
                  <ul className="list-decimal pl-6">
                    <li>
                      Tồn tại một đỉnh r được nối với mỗi đỉnh khác bằng một
                      đường đi duy nhất xuất phát từ r.
                    </li>
                    <li>
                      Gần liên thông mạnh và cực tiểu đối với tính chất này.
                    </li>
                    <li>
                      Liên thông, tồn tại một đỉnh r có bậc trong bằng không, và
                      các đỉnh khác có bậc trong bằng 1.
                    </li>
                    <li>
                      Không có chu trình, tồn tại một đỉnh r có bậc trong bằng
                      không, và các đỉnh khác có bậc trong bằng 1.
                    </li>
                    <li>Gần liên thông mạnh và không có chu trình.</li>
                    <li>Gần liên thông mạnh và có n-1 cung.</li>
                  </ul>
                  <p className="font-bold  mt-4">Cây khung có hướng</p>
                  <ul className="list-disc pl-4">
                    <li>Là một cây có hướng.</li>
                    <li>Gồm tất cả các đỉnh của đồ thị G.</li>
                    <li>
                      Cây khung có hướng nhỏ nhất: có tổng trọng số nhỏ nhất.
                    </li>
                  </ul>
                </div>
                <div id="ChuLiu/Edmonds" className="mb-4">
                  <h3 className="font-bold ">Thuật toán Chu-Liu/Edmonds</h3>
                  <p className="font-bold  mt-4">Pha co</p>
                  <ul className="list-decimal pl-6">
                    <li>Gọi đồ thị gốc là G₀, đặt t = 0.</li>
                    <li>
                      Lặp:
                      <ul className="list-disc pl-6">
                        <li>Xây dựng đồ thị xấp xỉ Hₜ từ Gₜ.</li>
                        <li>
                          Nếu Hₜ không chứa chu trình → chuyển sang pha giãn.
                        </li>
                        <li>
                          Ngược lại, co Gₜ thành Gₜ₊₁:
                          <ul className="list-disc pl-6">
                            <li>
                              Gom các đỉnh trong chu trình thành một đỉnh mới.
                            </li>
                            <li>Điều chỉnh trọng số của các cung liên quan.</li>
                          </ul>
                        </li>
                        <li>Tăng t lên 1.</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="font-bold  mt-4">Pha giãn</p>
                  <ul className="list-disc pl-6">
                    <li>Giãn cây khung Tₜ₊₁ thành cây khung Tₜ.</li>
                    <li>Mở đỉnh bị gom lại → khôi phục chu trình.</li>
                    <li>Điều chỉnh trọng số của cung đi đến chu trình.</li>
                    <li>Xóa một cung trong chu trình.</li>
                    <li>
                      Xây dựng đồ thị xấp xỉ Hₜ từ Gₜ bằng cách giữ cung có
                      trọng số nhỏ nhất với mỗi đỉnh (trừ gốc).
                    </li>
                  </ul>
                </div>
                <div id="LCDTM" className="mb-4">
                  <h2 className="font-bold mb-4 text-left">
                    VI. Luồng Cực Đại Trong Mạng
                  </h2>
                  <div id="LTM" className="mb-4">
                    <h3 className="font-bold ">Luồng (trên mạng)</h3>
                    <ul className="list-disc pl-6">
                      <li>
                        Luồng trên mạng là dòng chảy từ đỉnh phát (s) đến đỉnh
                        thu (t), ký hiệu f(u, v).
                      </li>
                      <li>
                        Thỏa mãn các điều kiện:
                        <ul className="list-disc pl-6">
                          <li>0 ≤ f(u, v) ≤ c(u, v).</li>
                          <li>
                            Tổng luồng vào = tổng luồng ra với mỗi đỉnh trừ s và
                            t.
                          </li>
                          <li>Tổng luồng ra khỏi s = tổng luồng vào t.</li>
                        </ul>
                      </li>
                      <li>Giá trị luồng |f| = tổng luồng ra khỏi s.</li>
                      <li>
                        Luồng cực đại: luồng có giá trị lớn nhất từ s đến t.
                      </li>
                    </ul>
                  </div>
                  <div id="LC" className="mb-4">
                    <h3 className="font-bold ">Lát Cắt</h3>
                    <p>Một lát cắt tách s và t, gọi là s-t cut.</p>
                    <p>
                      Tập các cung xuất phát từ S đi đến T được gọi là các cung
                      của lát cắt.
                    </p>
                    <p>Khả năng thông qua lát cắt: c(S, T) = ∑ c(u, v).</p>
                  </div>
                  <div id="L&LC" className="mb-4">
                    <h3 className="font-bold ">Luồng & Lát Cắt</h3>
                    <ul className="list-disc pl-6">
                      <li>Bổ đề 1: Luồng qua lát cắt = giá trị luồng.</li>
                      <li>
                        Bổ đề 2: Giá trị luồng không vượt quá khả năng thông qua
                        của lát cắt.
                      </li>
                      <li>
                        Hệ quả: Nếu |f| = c(S, T) thì f là luồng cực đại và (S,
                        T) là lát cắt hẹp nhất.
                      </li>
                    </ul>
                    <p>
                      Định lý Ford-Fulkerson (1956): Giá trị luồng cực đại = khả
                      năng thông qua lát cắt hẹp nhất.
                    </p>
                  </div>
                  <div id="Ford-Fulkerson" className="mb-4">
                    <h3 className="font-bold ">Thuật Toán Ford - Fulkerson</h3>
                    <p><strong>Ý tưởng:</strong> Tìm lát cắt hẹp nhất bằng cách tăng luồng.</p>
                    <ul className="list-disc pl-6">
                     
                      <li>Bước 1: Khởi tạo luồng hợp lệ (thường là 0).</li>
                      <li>Bước 2: Tìm đường tăng luồng từ s đến t.</li>
                      <li>Bước 3: Lặp đến khi không thể tăng thêm luồng.</li>
                    </ul>
                  </div>
                  <p className="text-right">
                    (Nguồn: Giáo trình Lý Thuyết Đồ Thị - PGS.TS Phạm Nguyên
                    Khang)
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Tainguyenhoctap;
