import { Link } from "react-router-dom";

function LogoWithTitle() {
  return (
    <>
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src=".\src\assets\img\iconGraphTheory.png"
          className="h-8"
          alt="Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          GraphBuilder
        </span>
      </Link>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone-1000 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </>
  );
}

export default LogoWithTitle;
