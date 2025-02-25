




function Header() {
  return (
    <header>
      <nav className="border-gray-200 bg-transparent m-[0 0 auto 0]">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 gap-[20px]">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="../../../../../img/iconGraphTheory.png" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">GraphBuild</span>
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone-1000 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-gray-700 bg-transparent main-nav">
              <li>
                <a href="#" className="block py-2 px-3 rounded-sm bg-blue-700 md:bg-transparent md:p-0 font-bold navigation-checked" aria-current="page">
                  Trang chủ
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink1"
                  data-dropdown-toggle="dropdownNavbar1"
                  className="flex items-center justify-between w-full py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto text-white focus:text-white border-gray-700 hover:bg-gray-700 md:hover:bg-transparent font-bold navigation"
                >
                  Tạo đồ thị
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div id="dropdownNavbar1" className="z-10 hidden font-normal bg-gray-700 divide-y divide-gray-100 rounded-lg shadow-sm w-30 divide-gray-600">
                  <ul className="py-2 text-sm text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="nav/vedothi.html" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">
                        Vẽ đồ thị
                      </a>
                    </li>
                    <li>
                      <a href="nav/nhapdothi.html" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">
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
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div id="dropdownNavbar2" className="z-10 hidden font-normal bg-gray-700 divide-y divide-gray-100 rounded-lg shadow-sm w-47 divide-gray-600">
                  <ul className="py-2 text-sm text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="nav/duyetdothi.html" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">
                        Duyệt đồ thị
                      </a>
                    </li>
                    <li>
                      <a href="nav/timlienthong.html" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">
                        Tìm liên thông
                      </a>
                    </li>
                    <li>
                      <a href="nav/duongdingannhat.html" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">
                        Tìm đường đi ngắn nhất
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:border-0 md:p-0 text-white hover:bg-gray-700 md:hover:bg-transparent font-bold navigation">
                  Tài nguyên & Học tập
                </a>
              </li>
              <li>
                <a href="nav/vechungtoi.html" className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:border-0 md:p-0 text-white hover:bg-gray-700 md:hover:bg-transparent font-bold navigation">
                  Về chúng tôi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    
  );
}

export default Header;